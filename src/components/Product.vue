<template>
  <li :class="{ 'product-item': true }" v-if="product_status == '在架'">
    <!-- 未放大的产品卡片 -->
    <div
      class="product-card"
      @click.stop="enlarge ? null : toggleEnlarge(true)"
    >
      <div class="product-img"><img :src="product_img" /></div>
      <h2 class="product-name">{{ product_name }}</h2>
      <div class="product-price">
        <p class="product-price--before" v-show="product_price_before">
          {{ product_price_before }}￥
        </p>
        <p class="product-price--now">{{ product_price_now }}￥</p>
      </div>
      <p class="product-detail" @click="enlarge = !enlarge">查看详情</p>
      <p class="product-des">
        {{ product_des }}
      </p>
    </div>
    <!-- 放大的产品卡片 -->
    <v-dialog v-model="enlarge" content-class="myDialog">
      <li
        :class="{ 'product-item': true, enlarge: enlarge }"
        v-if="product_status == '在架'"
      >
        <div class="product-card">
          <v-btn
            outlined
            fab
            x-small
            v-show="enlarge"
            @click.stop="!enlarge ? null : toggleEnlarge(false)"
            class="product-detail--close"
            ><v-icon large fab outlined>mdi-close</v-icon></v-btn
          >
          <div class="product-img"><img :src="product_img" /></div>
          <h2 class="product-name font-bold text-2xl">{{ product_name }}</h2>
          <div class="product-price">
            <p class="product-price--before" v-show="product_price_before">
              {{ product_price_before }}￥
            </p>
            <p class="product-price--now">{{ product_price_now }}￥</p>
          </div>
          <p
            class="product-detail"
            @click="enlarge = !enlarge"
            v-show="!enlarge"
          >
            查看详情
          </p>
          <p class="product-des">
            {{ product_des }}
          </p>
          <div class="product-detail--addtocart" v-show="enlarge">
            <p @click="addToCart()">加入购物车</p>
          </div>
          <div class="product-option" v-show="enlarge">
            <div v-for="(opt, index) in product.product_opt" :key="index">
              <span>{{ opt.title }}</span
              ><v-radio-group v-model="opt.value" row
                ><v-radio
                  v-for="(i, index2) in opt.attr"
                  :label="i"
                  :value="i"
                  :key="index2"
                ></v-radio>
              </v-radio-group>
            </div>
          </div>
          <div class="product-num" v-show="enlarge">
            <div>
              <v-btn outlined fab x-small @click="num <= 1 ? null : num--"
                ><v-icon>mdi-minus</v-icon></v-btn
              >
              {{ num }}
              <v-btn outlined fab x-small @click="num++"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </div>
          </div>
        </div>
      </li>
    </v-dialog>
  </li>
</template>

<script>
import { db } from "../service/CartService";
import { showMsg } from "../utils";

export default {
  props: [
    "product_img",
    "product_name",
    "product_price_now",
    "product_price_before",
    "product_des",
    "product_opt",
    "product_status",
    "id",
  ],
  data() {
    return {
      num: 1,
      enlarge: false,
      product: {
        product_opt: this.parseProductOpt(this.product_opt),
      },
    };
  },
  watch: {
    product_opt: function (newVal) {
      console.log(newVal);
      this.product.product_opt = this.parseProductOpt(newVal);
    },
  },
  computed: {
    imgSrc() {
      return require(`../assets/${this.product_img}`);
    },
  },
  created() {},
  mounted() {
    setTimeout(() => {}, 2000);
    console.log(this.product_opt);
  },
  methods: {
    parseProductOpt(opt) {
      let new_opt_arr = [];
      for (const i of opt) {
        let new_opt = {};
        new_opt["title"] = i.title;
        new_opt["attr"] = i.attr.split(",");
        new_opt["value"] = "";
        new_opt_arr.push(new_opt);
      }
      return new_opt_arr;
    },
    detail(e) {
      console.log(e);
    },
    close() {
      this.enlarge = false;
    },
    checkOpt(opt) {
      for (const i of opt) {
        if (i.value) {
          continue;
        } else {
          return false;
        }
      }
      return true;
    },
    addToCart() {
      if (this.checkOpt(this.product.product_opt)) {
        null;
      } else {
        showMsg.call(this, "未选择所有产品选项!");
        return false;
      }
      let obj = {
        product_name: this.product_name,
        product_num: this.num,
        product_opt: this.product.product_opt,
        product_img: this.product_img,
        product_price_now: this.product_price_now,
        product_id: this.id,
      };
      // console.log(obj);

      let request_checkSame = db
        .transaction("Cart", "readwrite")
        .objectStore("Cart")
        .index("product_id")
        .getAll(this.id);
      request_checkSame.onsuccess = (event) => {
        console.log(event.target.result);
        for (const product of event.target.result) {
          if (
            JSON.stringify(product.product_opt) ===
            JSON.stringify(obj.product_opt)
          ) {
            product["product_num"] += this.num;
            db.transaction("Cart", "readwrite")
              .objectStore("Cart")
              .put(product);
            this.toggleEnlarge();
            showMsg.call(this, "商品添加到购物车成功!");
            return;
          }
        }
        let request = db
          .transaction("Cart", "readwrite")
          .objectStore("Cart")
          .add(obj);
        request.onsuccess = (event) => {
          this.toggleEnlarge();
          showMsg.call(this, "商品添加到购物车成功!");
        };
        request.onerror = (event) => {
          showMsg.call(this, "商品添加到购物车失败!");
        };
      };
    },
    toggleEnlarge(setTo) {
      setTo !== undefined
        ? (this.enlarge = setTo)
        : (this.enlarge = !this.enlarge);
    },
  },
};
</script>
<style lang="scss">
:root {
  --product-margin: 12px;
}
.product-item {
  @media screen and (min-width: 360px) {
    width: 360px !important;
  }
  &:hover {
    transform: scale(1.02);
  }
  position: relative;
  display: block;
  width: 30%;
  min-width: 280px;
  background-color: white;
  box-shadow: 0 5px 20px 5px rgba($color: #000000, $alpha: 0.1);
  height: 300px;
  margin: 20px;
  border-radius: 5%;
  overflow: hidden;
  transition: transform 0.2s;
}
.product-card {
  display: grid;
  grid-template-areas:
    "img img img img"
    "img img img img"
    "img img img img"
    "name . . ."
    ". . price price"
    ". . price price"
    "detail detail . .";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 4fr 2fr 2fr 2fr 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
  .product-img {
    grid-area: img;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .product-name {
    grid-area: name;
    margin-left: var(--product-margin);
    margin-top: var(--product-margin);
  }
  .product-detail {
    grid-area: detail;
  }
  .product-name {
    @apply font-bold text-lg;
    color: var(--primary);
  }
  .product-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5%;
    margin-left: var(--product-margin);
    cursor: pointer;
    border: 1.5px solid black;
    padding: 4px;
    &:hover {
      border-color: var(--primary);
      // border-radius: 10%;
    }
  }
  .product-price {
    grid-area: price;
    margin-right: var(--product-margin);
    // margin-top: var(--product-margin);
    .product-price--now {
      text-align: right;
      font-size: 1.5rem;
    }

    .product-price--before {
      text-decoration: line-through;
      text-align: right;
    }
  }
  .product-des {
    display: none;
  }
}

.product-item.enlarge {
  &:hover {
    transform: none;
  }
  margin: auto;
  width: 100% !important;
  height: 100% !important;
  border-radius: 10px !important;

  .product-card {
    display: grid;
    grid-template-areas:
      "close . . ."
      "img img img img"
      "name . price price"
      "des des des des"
      "opt opt opt opt"
      "add add num num";
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0fr 31vh 2fr 2fr 5fr 2fr;
    height: 100%;
    width: 100%;
    .product-name {
      @apply text-2xl;
      grid-area: name;
      margin-left: var(--product-margin);
    }
    .product-detail--close {
      grid-area: close;
      position: absolute;
      top: 5px;
      left: 5px;
      z-index: 1000;
    }
    .product-des {
      @apply text-sm;
      grid-area: des;
      display: block;
      padding: 0 12px;
      color: gray;
      text-indent: 1em;
      line-height: 2em;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .product-option {
      grid-area: opt;
      overflow-y: auto;
      overflow-x: hidden;
      margin: 10px 10px 0 10px;
      padding: 12px;
      border: 1px black dashed;
      border-radius: 12px;
    }
    .product-detail--addtocart {
      grid-area: add;
      position: relative;
      & > p {
        cursor: pointer;
        user-select: none;
        border: 1px black solid;
        position: absolute;
        padding: 4px;
        bottom: 17%;
        left: 12%;
      }
    }
    .product-num {
      grid-area: num;
      // position: absolute;
      // bottom: 5%;
      // right: 5%;
      position: relative;
      & > div {
        position: absolute;
        bottom: 14%;
        right: 7%;
      }
    }
    // .product-img{
    //   display: none;
    // }
    .product-img {
      grid-area: img;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .product-price {
      grid-area: price;
      margin-top: var(--product-margin);
    }
  }
}
.myDialog {
  @media screen and (min-width: 360px) {
    width: 360px !important;
  }
  @media screen and (max-width: 500px) {
    height: 500px;
  }
  @media screen and (min-width: 640px) {
    width: 640px !important;
  }
  overflow-y: visible;
  width: 90% !important;
  height: 88% !important;
}
</style>
