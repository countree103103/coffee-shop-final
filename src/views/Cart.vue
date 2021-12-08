<template>
  <div id="cart">
    <h1>购物车</h1>
    <div class="cart-list">
      <cart-product></cart-product><cart-product></cart-product
      ><cart-product></cart-product><cart-product></cart-product
      ><cart-product></cart-product>
    </div>
    <h1>总共</h1>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {
    "cart-product": () => import("../components/CartProduct.vue"),
  },
};
</script>

<style lang="scss">
#cart {
  .cart-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  @media screen and (max-width: 500px) {
    height: 100%;
  }
  // background-color: var(--bgColor);
}
</style>
