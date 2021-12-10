<template>
  <div class="product-list-wrapper" @click.stop="closeProduct">
    <h1>精选咖啡</h1>
    <ul class="product-list">
      <product
        ref="products"
        v-for="(product, i) in products"
        :imgName="product.imgName"
        :productName="product.productName"
        :productPrice="product.productPrice"
        :productBeforePrice="product.productBeforePrice"
        :key="i"
      ></product>
    </ul>
  </div>
</template>

<script>
import { gsap } from "gsap";
import product from "../components/Product.vue";
export default {
  name: "Home",
  data() {
    return {
      products: [
        {
          imgName: "latte.jpeg",
          productName: "拿铁",
          productPrice: "666",
          // productBeforePrice: null,
          productBeforePrice: 999,
        },
        {
          imgName: "latte.jpeg",
          productName: "latte",
          productPrice: "666",
        },
        {
          imgName: "latte.jpeg",
          productName: "latte",
          productPrice: "666",
        },
        {
          imgName: "latte.jpeg",
          productName: "latte",
          productPrice: "666",
        },
        {
          imgName: "latte.jpeg",
          productName: "latte",
          productPrice: "666",
        },
        {
          imgName: "latte.jpeg",
          productName: "latte",
          productPrice: "666",
        },
        {
          imgName: "latte.jpeg",
          productName: "latte",
          productPrice: "666",
        },
        {
          imgName: "latte.jpeg",
          productName: "latte",
          productPrice: "666",
        },
      ],
    };
  },
  components: {
    product,
  },
  mounted() {
    gsap.from(".product-item", {
      left: -40,
      stagger: 0.05,
      opacity: 0,
    });
  },
  methods: {
    closeProduct(e) {
      this.$refs.products.forEach((i) => {
        i.close();
      });
    },
    test(event) {
      console.log(event);
    },
  },
};
</script>
<style lang="scss">
.product-list-wrapper {
  padding: 5%;
  background-color: var(--bgColor);
  h1 {
    color: var(--primary);
    position: relative;
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 50%;
      bottom: -10px;
      position: absolute;
      background-color: var(--primary);
    }
  }
}
.product-list {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  // align-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0 3% 0 3%;
  margin-top: 5%;
  flex-wrap: wrap;
}
</style>
