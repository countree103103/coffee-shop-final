<template>
  <v-container class="order" @click="goToDetail">
    <v-row>
      <v-col>
        <ul>
          <li
            v-for="(product, index) in JSON.parse(order.product_list)"
            :key="index"
          >
            <p class="order-item-name">{{ product.product_name }}</p>
            <span class="order-item-option">{{
              getOpt(product.product_opt)
            }}</span
            ><span class="order-item-num"
              >{{ product.product_price_now }}￥ X
              {{ product.product_num }}</span
            >
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="mt-7">
      <v-spacer></v-spacer>
      <v-col class="flex justify-end">
        <span class="font-light text-gray-500 text-sm"
          ><v-icon small class="mr-1">{{ order_status_icon }}</v-icon
          >{{ order.order_status }}</span
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-3">
        <v-btn outlined small @click.stop="$router.push('/menu')"
          >再来一单</v-btn
        ></v-col
      >
      <!-- <v-col><v-btn outlined small>去评价</v-btn></v-col> -->
      <!-- <v-spacer></v-spacer> -->
      <v-col class="order-total flex flex-row justify-end mt-2"
        ><span
          >共{{ order.product_num_total }}件商品，实付{{
            order.order_sum
          }}￥</span
        ></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Order",
  props: {
    order: {},
  },
  data() {
    return {};
  },
  computed: {
    // order_status_css(){
    //   let css = null;
    //   switch (this.order.order_status) {
    //     case "待确认":
    //     case "准备中":
    //     case "配送中":{
    //       return css = "font-light text-gray-500 text-sm"
    //       break;
    //     }
    //     // case "准备中":{

    //     //   break;
    //     // }
    //     // case "配送中":{

    //     //   break;
    //     // }
    //     case "订单完成":{
    //       return css = "font-light text-green-500 text-sm"
    //       break;
    //     }
    //     case "订单取消":{
    //       return css = "font-light text-red-500 text-sm"
    //       break;
    //     }

    //     default:
    //       break;
    //   }
    // },
    order_status_icon() {
      let icon = "";
      switch (this.order.order_status) {
        case "待确认": {
          icon = "mdi-clock-time-four-outline";
          break;
        }
        case "准备中": {
          icon = "mdi-coffee-maker-outline";
          break;
        }
        case "配送中": {
          icon = "mdi-moped-outline";
          break;
        }
        case "订单完成": {
          icon = "mdi-check";
          break;
        }
        case "订单取消": {
          icon = "mdi-cancel";
          break;
        }

        default:
          icon = "";
          break;
      }
      return icon;
    },
  },
  methods: {
    goToDetail() {
      this.$router.push({
        name: "OrderDetail",
        query: { state: 1 },
        params: { order: this.order },
      });
    },
    getOpt(opt) {
      let arr = [];
      for (const i of opt) {
        arr.push(i.value);
      }
      return arr.join(",");
    },
  },
};
</script>

<style lang="scss">
.order {
  &:nth-child(1) {
    border-top: 1px solid gray;
  }
  &:hover {
    background-color: rgba($color: #ececec, $alpha: 1);
  }
  border-bottom: 1px solid gray;
  transition: 0.2s all;
  height: auto;
  width: 100%;
  min-width: 200px;
  .order-total {
    position: relative;
    span {
      font-size: 0.7rem;
      color: gray;
    }
  }
  ul {
    list-style: none;
    // list-style-position: outside;
    li {
      position: relative;
      margin-bottom: 8px;
      .order-item-option {
        font-size: 0.7rem;
        color: gray;
        margin-left: 10px;
        padding-right: 25%;
      }
      .order-item-num {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
