<template>
  <div class="product-list-wrapper" @click.stop="closeProduct">
    <h1 class="text-2xl font-bold">精选咖啡</h1>
    <ul class="product-list">
      <template></template>
      <product
        ref="products"
        v-for="(product, i) in products"
        :product_img="product.product_img"
        :product_name="product.product_name"
        :product_price_now="product.product_price_now"
        :product_price_before="product.product_price_before"
        :product_des="product.product_des"
        :product_opt="product.product_opt"
        :product_status="product.product_status"
        :key="i"
      ></product>
    </ul>
  </div>
</template>

<script>
import { gsap } from "gsap";
import product from "../components/Product.vue";
import axios from "axios";
import { showMsg } from "../utils";

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
  created() {
    this.getProductList();
  },
  mounted() {
    setTimeout(() => {
      gsap.from(".product-item", {
        left: -40,
        stagger: 0.05,
        opacity: 0,
      });
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
    async getProductList() {
      try {
        let result = await axios.get("/coffee/product/");
        if (result.data) {
          this.products = result.data;
        } else {
          showMsg.call(this, "获取产品列表失败!");
        }
      } catch (error) {
        console.log(error);
        showMsg.call(this, "服务器错误!");
      }
    },
  },
};
</script>
<style lang="scss">
.product-list-wrapper {
  padding: 5%;
  background-color: var(--bgColor);
  height: 100%;
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
  // height: 100%;
  padding: 0 3% 0 3%;
  margin-top: 5%;
  flex-wrap: wrap;
}
</style>
