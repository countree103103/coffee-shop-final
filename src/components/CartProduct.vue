<template>
  <li class="cart-product">
    <div class="cart-product--img">
      <img :src="imgSrc" alt="" />
    </div>
    <div class="cart-product--name"><h5>卡布奇诺</h5></div>
    <div class="cart-product--option">热/去冰/热/去冰/热</div>
    <div class="cart-product--price">
      666￥ X {{ num }} = <span> {{ 666 * num }}￥</span>
    </div>
    <div class="cart-product--num">
      <v-btn outlined fab x-small @click="num <= 1 ? del() : num--"
        ><v-icon x-small>mdi-minus</v-icon></v-btn
      >
      <span>{{ num }}</span>
      <v-btn outlined fab x-small @click="num++"
        ><v-icon x-small>mdi-plus</v-icon></v-btn
      >
    </div>
  </li>
</template>

<script>
export default {
  name: "CartProduct",
  props: ["imgName"],
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    del() {
      // alert("删除");
    },
  },
  computed: {
    imgSrc() {
      return require(`../assets/${this.imgName}`);
    },
  },
};
</script>

<style lang="scss">
.cart-product {
  div {
    // border: 1px solid black;
  }
  .cart-product--name {
    grid-area: name;
    color: var(--primary);
    display: flex;
    align-items: center;
    padding: 10%;
    h5 {
      font-size: 1.2rem;
    }
  }
  .cart-product--price {
    grid-area: price;
    padding: 10%;
    span {
      font-size: 1.5rem;
    }
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
    grid-area: opt;
    color: gray;
    // padding: 10px;
    padding: 10%;
  }
  .cart-product--img {
    grid-area: img;
    position: relative;
    overflow: hidden;
    // margin-right: 30px;
    padding: 4px;
    border-right: 1px black dashed;

    // @media screen and (max-width: 500px) {
    //   border-radius: 4px;
    // }
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      border-radius: 20px;
      // padding-right: 5%;
    }
  }

  @media screen and (max-width: 500px) {
    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0px;
      // margin-top: 3px;
      height: 3px;
      width: 100%;
      // background-color: black;
      border-bottom: 2px solid black;
    }
    // height: 120px;
    width: 90%;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: none;
    overflow: inherit;
  }

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
  border-radius: 20px;
  margin-bottom: 3%;
  overflow: hidden;
  // border-bottom: 1px black solid;
  box-shadow: 0 10px 7px rgba($color: #000000, $alpha: 0.2);
  background-color: white;
}
</style>
