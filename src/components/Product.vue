<template>
  <li
    :class="{ 'product-item': true, enlarge: enlarge }"
    @click.stop="enlarge ? null : toggleEnlarge(true)"
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
      <div class="product-img"><img :src="imgSrc" /></div>
      <h2 class="product-name">{{ productName }}</h2>
      <div class="product-price">
        <p class="product-price--before" v-show="productBeforePrice">
          {{ productBeforePrice }}￥
        </p>
        <p class="product-price--now">{{ productPrice }}￥</p>
      </div>
      <p class="product-detail" @click="enlarge = !enlarge" v-show="!enlarge">
        查看详情
      </p>
      <p class="product-des">
        这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~这是一杯暖的拿铁~
      </p>
      <div
        class="product-detail--addtocart"
        v-show="enlarge"
        @click="addToCart()"
      >
        <p>加入购物车</p>
      </div>
      <div class="product-option" v-show="enlarge">
        <div>
          <span>甜度</span
          ><v-radio-group v-model="sweetness" row
            ><v-radio label="无糖" value="no"></v-radio
            ><v-radio label="半糖" value="half"></v-radio
            ><v-radio label="全糖" value="full"></v-radio
          ></v-radio-group>
        </div>
        <div>
          <span>温度</span>
          <v-radio-group v-model="temp" row
            ><v-radio label="热" value="warm"></v-radio
            ><v-radio label="正常冰" value="ice"></v-radio
            ><v-radio label="少冰" value="lessIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
            ><v-radio label="正常冰" value="ice"></v-radio
            ><v-radio label="少冰" value="lessIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
          ></v-radio-group>
        </div>
        <div>
          <span>温度</span>
          <v-radio-group v-model="temp" row
            ><v-radio label="热" value="warm"></v-radio
            ><v-radio label="正常冰" value="ice"></v-radio
            ><v-radio label="少冰" value="lessIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
          ></v-radio-group>
        </div>
        <div>
          <span>温度</span>
          <v-radio-group v-model="temp" row
            ><v-radio label="热" value="warm"></v-radio
            ><v-radio label="正常冰" value="ice"></v-radio
            ><v-radio label="少冰" value="lessIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
          ></v-radio-group>
        </div>
        <div>
          <span>温度</span>
          <v-radio-group v-model="temp" row
            ><v-radio label="热" value="warm"></v-radio
            ><v-radio label="正常冰" value="ice"></v-radio
            ><v-radio label="少冰" value="lessIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
          ></v-radio-group>
        </div>
        <div>
          <span>温度</span>
          <v-radio-group v-model="temp" row
            ><v-radio label="热" value="warm"></v-radio
            ><v-radio label="正常冰" value="ice"></v-radio
            ><v-radio label="少冰" value="lessIce"></v-radio
            ><v-radio label="去冰" value="noIce"></v-radio
          ></v-radio-group>
        </div>
      </div>
      <div class="product-num" v-show="enlarge">
        <div>
          <v-btn outlined fab x-small @click="num <= 0 ? null : num--"
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
</template>

<script>
export default {
  props: [
    "imgName",
    "productName",
    "productDetail",
    "productPrice",
    "productBeforePrice",
  ],
  data() {
    return {
      num: 0,
      enlarge: false,
      sweetness: null,
      temp: null,
      ice: null,
    };
  },
  computed: {
    imgSrc() {
      return require(`../assets/${this.imgName}`);
    },
  },
  methods: {
    detail(e) {
      console.log(e);
    },
    close() {
      this.enlarge = false;
    },
    addToCart() {
      console.log(`${this.productName}-${this.sweetness}-${this.temp}`);
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
  transition: all 0.2s;
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
    transition: 0.3s all;
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
  @media screen and (min-width: 360px) {
    width: 360px !important;
  }
  @media screen and (max-width: 500px) {
    height: 500px;
  }
  &:hover {
    transform: none;
  }
  position: fixed !important;
  margin: auto;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  width: 90% !important;
  @media screen and (min-width: 640px) {
    width: 640px !important;
  }
  height: 88% !important;
  border-radius: 10px !important;
  z-index: 1001;
  box-shadow: 0 0 1000px 1000px rgba($color: #000000, $alpha: 0.8);
  transition: all 0.2s;

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
      grid-area: des;
      display: block;
      padding: 0 12px;
      font-size: 0.6rem;
      color: gray;
      text-indent: 1em;
      line-height: 2em;
      // text-overflow: ellipsis;
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
</style>
