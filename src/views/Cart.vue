<template>
  <div id="cart">
    <h1>购物车</h1>
    <ul class="cart-list">
      <cart-product imgName="latte.jpeg"></cart-product
      ><cart-product imgName="asd.jpeg"></cart-product
      ><cart-product imgName="american.jpeg"></cart-product
      ><cart-product imgName="moka.jpeg"></cart-product
      ><cart-product imgName="asd.jpeg"></cart-product>
    </ul>
    <div class="cart-summary">
      <v-btn outlined>结算</v-btn>
      <span class="cart-summary--total">总共 999$</span>
    </div>
  </div>
</template>

<script>
import gsap from "gsap/all";
import CartProduct from "../components/CartProduct.vue";

export default {
  name: "Cart",
  components: {
    CartProduct,
  },
  mounted() {
    gsap.from(".cart-product", {
      left: -40,
      stagger: 0.05,
      opacity: 0,
    });
  },
};
</script>

<style lang="scss">
.cart-summary {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0px;
  .cart-summary--total {
    font-size: 2rem;
  }
}
#cart {
  background-color: var(--bgColor);
  h1 {
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 50%;
      // bottom: -10px;
      position: absolute;
      background-color: var(--primary);
    }
    color: var(--primary);
    align-self: flex-start;
    margin: 3vh 0 5vh 13%;
    font-size: 2rem;
    // margin-left: 13%;
    // margin-bottom: 20px;
    @media screen and (max-width: 500px) {
      align-self: flex-start;
      margin: 20px 0 10px 20px;
    }
  }
  .cart-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  @media screen and (max-width: 500px) {
    height: 100%;
    min-height: 75vh;
  }
  // background-color: var(--bgColor);
}
</style>
