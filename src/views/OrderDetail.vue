<template>
  <div id="order-detail">
    <v-container>
      <v-row><h1 class="text-xl font-bold">订单详情</h1></v-row>
      <v-row><h5>感谢您对本咖啡店的信任，欢迎再次光临~</h5></v-row>
      <v-row style="border-top: 1px black dashed"
        ><v-col cols="12" lg="7"
          ><CartProduct imgName="asd.jpeg"></CartProduct>
          <CartProduct imgName="asd.jpeg"></CartProduct>
          <CartProduct imgName="asd.jpeg"></CartProduct
        ></v-col>
        <v-col lg="5" class="order-detail-info">
          <v-row>
            <v-col class="order-detail-info--attr">订单创建时间</v-col>
            <v-col>21点16分</v-col>
          </v-row>
          <v-row>
            <v-col class="order-detail-info--attr">配送地址</v-col>
            <v-col>21点16分</v-col>
          </v-row>
          <v-row>
            <v-col class="order-detail-info--attr">配送员</v-col>
            <v-col>21点16分</v-col>
          </v-row>
        </v-col></v-row
      >
    </v-container>
  </div>
</template>

<script>
import CartProduct from "../components/CartProduct.vue";

export default {
  name: "OrderDetail",
  data() {
    return {};
  },
  components: { CartProduct },
};
</script>

<style lang="scss">
#order-detail {
  background-color: var(--bgColor);
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
