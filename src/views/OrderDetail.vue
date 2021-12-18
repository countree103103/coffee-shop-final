<template>
  <div id="order-detail">
    <v-container>
      <v-row><h1 class="text-xl font-bold">订单详情</h1></v-row>
      <v-row v-if="$route.query.state == 1"
        ><h5>感谢您对本咖啡店的信任，欢迎再次光临~</h5></v-row
      >
      <v-row style="border-top: 1px black dashed"
        ><v-col cols="12" lg="7">
          <CartProduct
            v-for="(product, index) in productList"
            :product="product"
            :key="index"
          ></CartProduct>
        </v-col>
        <v-col lg="5" class="order-detail-info">
          <v-row v-if="$route.query.state == 1">
            <v-col class="order-detail-info--attr">订单创建时间</v-col>
            <v-col>21点16分</v-col>
          </v-row>
          <v-row>
            <v-col class="order-detail-info--attr">配送地址</v-col>
            <v-col
              ><v-select :items="address" v-model="selectedAddress"></v-select
            ></v-col>
          </v-row>
          <v-row>
            <v-col class="order-detail-info--attr">支付方式</v-col>
            <v-col
              ><v-select
                :items="['微信支付', '支付宝支付']"
                v-model="payment_type"
              ></v-select
            ></v-col>
          </v-row>
          <v-row v-if="$route.query.state == 1">
            <v-col class="order-detail-info--attr">配送员</v-col>
            <v-col>21点16分</v-col>
          </v-row>
        </v-col></v-row
      >
      <v-row v-if="$route.query.state == 2">
        <v-col
          ><v-btn color="" outlined @click="submitOrder">确认订单</v-btn></v-col
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { showMsg } from "../utils";
import CartProduct from "../components/CartProduct.vue";
import { cartMixin } from "../service/CartService";

export default {
  name: "OrderDetail",
  props: {
    //1为已确认订单,2为待确认订单
    state: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      productList: [],
      address: [],
      selectedAddress: "",
      payment_type: "",
    };
  },
  created() {
    this.productList = this.$store.state.cartList;
    for (const address of this.$store.state.user.address) {
      let arr = [];
      arr.push(address.name, address.address, address.tel);
      this.address.push(arr.join("/"));
    }
  },
  methods: {
    async submitOrder() {
      if (
        !(this.selectedAddress && this.selectedAddress.length) ||
        !(this.payment_type && this.payment_type.length) ||
        !this.productList
      ) {
        showMsg.call(this, "确认失败!请检查订单");
        return false;
      }
      let formData = new FormData();
      //深拷贝产品列表及删除占用大小大的产品属性
      let submit_product_list = JSON.parse(JSON.stringify(this.productList));
      for (const product of submit_product_list) {
        delete product.product_img;
        delete product.product_des;
      }
      formData.append("product_list", JSON.stringify(submit_product_list));
      formData.append("address", this.selectedAddress);
      formData.append("payment_type", this.payment_type);
      try {
        let result = await axios.post("/coffee/order/add", formData);
        if (result.data) {
          showMsg.call(this, "订单提交成功!");
          this.$router.push({ path: "/user" });
          this.clearCart(true);
        } else {
          showMsg.call(this, "订单提交失败");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: { CartProduct },
  mixins: [cartMixin],
};
</script>

<style lang="scss">
#order-detail {
  background-color: var(--bgColor);
  min-height: 100%;
  padding: 30px;
  h1 {
    color: var(--primary);
    margin-bottom: 10px;
  }
  h5 {
    margin-bottom: 10px;
  }
  .order-detail-info {
    border-left: 1px black dashed;
    @media screen and (max-width: 500px) {
      border-top: 1px black dashed;
      border-left: none;
    }
    .order-detail-info--attr {
      color: gray;
      font-size: 1.05rem;
    }
  }
}
</style>
