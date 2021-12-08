<template>
  <div class="cart-product">
    <div class="cart-product--img">
      <img src="../assets/asd.jpeg" alt="" />
    </div>
    <div class="cart-product--name">美式</div>
    <div class="cart-product--option">热/去冰</div>
    <div class="cart-product--price">666$ X 1</div>
    <div class="cart-product--num">总共:</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cart-product {
  div {
    // border: 1px solid black;
  }
  .cart-product--name {
    grid-area: name;
  }
  .cart-product--price {
    grid-area: price;
  }
  .cart-product--num {
    grid-area: num;
  }
  .cart-product--option {
    grid-area: opt;
  }
  .cart-product--img {
    grid-area: img;
    position: relative;
    overflow: hidden;
    margin-right: 30px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  position: relative;
  display: grid;
  grid-template-areas:
    "img name name price"
    "img opt opt price"
    "img opt opt num";
  grid-template-columns: 5fr 3fr 3fr 2fr;
  height: 300px;
  width: 70%;
  padding: 0 10px;
  // border-radius: 30px;
  margin-bottom: 3%;
  overflow: hidden;
  // border-bottom: 1px black solid;
  box-shadow: 0 1px 10px 5px rgba($color: #000000, $alpha: 0.2);
}

@media screen and (max-width: 500px) {
}
</style>
