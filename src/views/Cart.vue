<template>
  <div id="cart">
    <h1 class="text-2xl font-bold">购物车</h1>
    <ul class="cart-list">
      <template v-if="cartList && cartList.length">
        <div
          class="flex flex-row justify-center items-center transition-all"
          v-for="product in cartList"
          :key="product.id"
        >
          <div class="mr-4 animate-bounce" v-show="del">
            <v-btn color="error" small fab @click="deleteProduct(product.id)"
              ><v-icon>mdi-delete</v-icon></v-btn
            >
          </div>
          <cart-product :product="product"></cart-product>
        </div>
      </template>
      <template v-else>
        <div class="flex flex-col justify-center items-center">
          <p class="p-4">购物车为空!前往菜单选择自己喜欢的咖啡吧~</p>
          <v-btn color="" @click="$router.push('menu')" rounded>前往菜单</v-btn>
        </div>
      </template>
    </ul>
    <div class="cart-summary" v-if="cartList && cartList.length">
      <v-btn outlined @click="confirmOrder">结算</v-btn>
      <v-btn color="error" @click="del = !del">删除</v-btn>
      <v-btn color="error" @click="clearCart">清空购物车</v-btn>
      <span class="cart-summary--total">总共 {{ total }}￥</span>
    </div>
  </div>
</template>

<script>
import gsap from "gsap/all";
import CartProduct from "../components/CartProduct.vue";
import { db } from "../service/CartService";
import { showMsg } from "../utils";
import axios from "axios";

export default {
  name: "Cart",
  components: {
    CartProduct,
  },
  data() {
    return {
      cartList: [],
      del: false,
    };
  },
  computed: {
    total() {
      let sum = 0;
      for (const product of this.cartList) {
        sum += product.product_num * product.product_price_now;
      }
      return sum;
    },
  },
  created() {
    this.getCartList();
  },
  mounted() {
    gsap.from(".cart-product", {
      left: -40,
      stagger: 0.05,
      opacity: 0,
    });
  },
  methods: {
    getCartList() {
      let request = db
        .transaction("Cart", "readwrite")
        .objectStore("Cart")
        .getAll();
      request.onsuccess = (event) => {
        this.cartList = event.target.result;
        this.$store.state.cartList = this.cartList;
        console.log(event.target.result);
      };
      request.onerror = (event) => {
        console.log("db request error!");
      };
    },
    clearCart() {
      if (confirm("确定清空购物车？")) {
        let request = db
          .transaction("Cart", "readwrite")
          .objectStore("Cart")
          .clear();
        request.onsuccess = (event) => {
          this.getCartList();
          showMsg.call(this, "清空购物车成功!");
        };
        request.onerror = (event) => {
          console.log("db request error!");
        };
      } else {
        null;
      }
    },
    deleteProduct(id) {
      let request = db
        .transaction("Cart", "readwrite")
        .objectStore("Cart")
        .delete(id);
      request.onsuccess = (event) => {
        this.getCartList();
        // showMsg.call(this, "清空购物车成功!");
      };
      request.onerror = (event) => {
        console.log("db request error!");
      };
    },
    async confirmOrder() {
      this.$router.push({ path: "/order-detail", query: { state: 2 } });
    },
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  // height: 100vh;
  // @media screen and (max-width: 500px) {
  //   height: 100%;
  //   min-height: 75vh;
  // }
  // background-color: var(--bgColor);
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
}
</style>
