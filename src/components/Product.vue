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
    <div class="product-card">
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
      <p
        class="product-detail--addtocart"
        v-show="enlarge"
        @click="addToCart()"
      >
        添加到购物车
      </p>
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
:root {
  --product-margin: 20px;
}
.product-item {
  position: relative;
  display: block;
  width: 30%;
  min-width: 280px;
  background-color: white;
  box-shadow: 0 5px 20px 5px rgba($color: #000000, $alpha: 0.1);
  height: 300px;
  margin-top: 30px;
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
    "name . price price"
    ". . price price"
    "detail . . .";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
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
    position: absolute;
    margin-left: var(--product-margin);
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
  .product-price {
    grid-area: price;
    margin-right: var(--product-margin);
    margin-top: var(--product-margin);
    .product-price--now {
      text-align: right;
      font-size: 1.5rem;
    }

    .product-price--before {
      text-decoration: line-through;
      text-align: right;
    }
  }
}
</style>
