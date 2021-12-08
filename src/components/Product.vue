<template>
  <li :class="{ 'product-item': true, enlarge: enlarge }">
    <v-btn
      outlined
      fab
      x-small
      v-show="enlarge"
      @click="enlarge = false"
      class="product-detail--close"
      ><v-icon large fab outlined>mdi-close</v-icon></v-btn
    >
    <img :src="imgSrc" />
    <div class="product-card">
      <h2 class="product-name">{{ productName }}</h2>
      <p class="product-price--before" v-show="productBeforePrice">
        {{ productBeforePrice }}￥
      </p>
      <p class="product-price">{{ productPrice }}￥</p>
      <p class="product-detail" @click="enlarge = !enlarge" v-show="!enlarge">
        查看详情
      </p>
      <p
        class="product-detail--addtocart"
        v-show="enlarge"
        @click="addToCart()"
      >
        添加到购物车
      </p>
      <div class="product-option" v-show="enlarge">
        <div class="product-option--sweetness">
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
          ></v-radio-group>
        </div>
      </div>
      <div class="product-num" v-show="enlarge">
        <v-btn outlined fab x-small @click="num <= 0 ? null : num--"
          ><v-icon>mdi-minus</v-icon></v-btn
        >
        {{ num }}
        <v-btn outlined fab x-small @click="num++"
          ><v-icon>mdi-plus</v-icon></v-btn
        >
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
  },
};
</script>

<style lang="scss">
.product-item {
  &.enlarge {
    &:hover {
      transform: scale(1);
    }
    .product-detail--addtocart {
      position: absolute;
      bottom: 5%;
      cursor: pointer;
      border: 1.5px solid black;
      padding: 4px;
      transition: 0.3s all;
      &:hover {
        border-color: var(--primary);
        // border-radius: 10%;
      }
    }
    .product-num {
      position: absolute !important;
      bottom: 5%;
      right: 5%;
    }
    @media screen and (max-width: 500px) {
      img {
        height: 30%;
      }
    }
    img {
      height: 38.2%;
    }
    .product-detail--close {
      position: absolute;
      right: 10px;
      top: 10px;
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
    // &::after {
    //   content: "";
    //   position: fixed !important;
    //   left: 0 !important;
    //   top: 0 !important;
    //   background-color: rgba($color: #000000, $alpha: 0.3);
    //   box-shadow: 0 0 1000px 1000px black;
    //   width: 100vw;
    //   height: 100vh;
    //   z-index: -1000;
    // }
  }
  .product-card {
    padding: 12px;
  }
  position: relative;
  display: block;
  // width: 30%;
  margin: 20px;
  width: 360px;
  min-width: 280px;
  background-color: white;
  box-shadow: 0 5px 20px 5px rgba($color: #000000, $alpha: 0.1);
  height: 300px;
  // margin-top: 30px;
  border-radius: 5%;
  overflow: hidden;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }
}

.product-detail {
  position: absolute;
  bottom: 5%;
  cursor: pointer;
  border: 1.5px solid black;
  padding: 4px;
  transition: 0.3s all;
  &:hover {
    border-color: var(--primary);
    // border-radius: 10%;
  }
}
.product-name {
  // letter-spacing: 0.5px;
  color: var(--primary);
}
.product-price {
  text-align: right;
  font-size: 1.5rem;
}
.product-price--before {
  text-decoration: line-through;
  text-align: right;
}
.product-option {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  // justify-content: space-around;
  overflow-y: scroll;
  // margin-top: 20px;
  & > div {
    margin-right: 20px;
    padding: 1%;
    border-radius: 14px;
    border: 1px dashed black;
  }
  * {
    white-space: nowrap;
  }
}
</style>
