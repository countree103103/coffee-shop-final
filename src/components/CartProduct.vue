<template>
  <li class="cart-product">
    <div class="cart-product--img">
      <img :src="product.product_img" alt="" />
    </div>
    <div class="cart-product--name">
      <h5 class="font-bold">{{ product.product_name }}</h5>
    </div>
    <div class="cart-product--option">{{ c_opt }}</div>
    <div class="cart-product--price">
      {{ product.product_price_now }}￥ X {{ product.product_num }} =
      <span> {{ product.product_price_now * product.product_num }}￥</span>
    </div>
    <!-- <div class="cart-product--num">
      <v-btn outlined fab x-small @click="num <= 1 ? del() : num--"
        ><v-icon x-small>mdi-minus</v-icon></v-btn
      >
      <span>{{ product.product_num }}</span>
      <v-btn outlined fab x-small @click="num++"
        ><v-icon x-small>mdi-plus</v-icon></v-btn
      >
    </div> -->
  </li>
</template>

<script>
export default {
  name: "CartProduct",
  props: ["product"],
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    c_opt() {
      let arr = [];
      for (const i of this.product.product_opt) {
        arr.push(i.value);
      }
      return arr.join(",");
    },
    imgSrc() {
      return require(`../assets/${this.imgName}`);
    },
  },
  methods: {
    del() {
      // alert("删除");
    },
  },
};
</script>

<style lang="scss">
.cart-product {
  @apply rounded-lg sm:rounded-xl;
  position: relative;
  display: grid;
  grid-template-areas:
    "img name name price"
    "img opt opt num"
    "img opt opt num";
  grid-template-columns: 10fr 4fr 4fr 2fr;
  // height: 200px;
  width: 70%;
  // padding: 0 10px;
  // border-radius: 20px;
  margin-bottom: 3%;
  overflow: hidden;
  // border-bottom: 1px black solid;
  box-shadow: 0 10px 7px rgba($color: #000000, $alpha: 0.2);
  background-color: white;
  .cart-product--name {
    grid-area: name;
    color: var(--primary);
    display: flex;
    align-items: center;
    padding: 10%;
    h5 {
      // font-size: 1.2rem;
      @apply text-lg sm:text-2xl;
    }
  }
  .cart-product--price {
    grid-area: price;
    padding: 10%;
    span {
      font-size: 1.5rem;
      @apply text-sm sm:text-xl lg:text-3xl;
    }
    @apply text-sm sm:text-xl lg:text-3xl mr-4 sm:mr-8 whitespace-nowrap;
  }
  .cart-product--num {
    grid-area: num;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    span {
      padding: 5px;
    }
  }
  .cart-product--option {
    @apply text-sm sm:text-lg;
    // font-size: 0.3rem;
    grid-area: opt;
    color: gray;
    // padding: 10px;
    padding: 10%;
  }
  .cart-product--img {
    @apply p-1 sm:p-2;
    grid-area: img;
    position: relative;
    overflow: hidden;
    // margin-right: 30px;
    // padding: 4px;
    border-right: 1px black dashed;

    // @media screen and (max-width: 500px) {
    //   border-radius: 4px;
    // }
    overflow: hidden;
    img {
      @apply rounded-lg sm:rounded-xl;
      height: 100%;
      width: 100%;
      object-fit: contain;
      // border-radius: 20px;
      // padding-right: 5%;
    }
  }

  @media screen and (max-width: 500px) {
    // &::after {
    //   content: "";
    //   position: absolute;
    //   bottom: -5px;
    //   left: 0px;
    //   // margin-top: 3px;
    //   height: 3px;
    //   width: 100%;
    //   // background-color: black;
    //   border-bottom: 2px solid black;
    // }
    // height: 120px;
    width: 90%;
    margin-bottom: 10px;
    // border-radius: 10px;
    box-shadow: none;
    overflow: inherit;
  }
}
</style>
