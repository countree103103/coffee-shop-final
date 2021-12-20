<template>
  <div id="user-view">
    <v-container>
      <v-row>
        <v-col>
          <UserInfo :user="user"></UserInfo>
        </v-col>
        <v-col class="user-order"
          ><div>
            <v-card>
              <v-card-title primary-title> 您的订单 </v-card-title>
              <v-container>
                <Order
                  v-for="(order, index) in orderList"
                  :order="order"
                  :key="index"
                ></Order>
              </v-container>
              <v-pagination v-model="page" :length="3"></v-pagination>
            </v-card></div
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import Order from "../components/Order.vue";
import { reader, showMsg } from "../utils";
import UserInfo from "../components/UserInfo.vue";
export default {
  name: "User",
  data() {
    return {
      user: {
        user_name: null,
        user_gender: null,
        address: [],
      },
      page: 1,
      orderList: [],
    };
  },
  watch: {
    async head() {
      let r = await reader(this.head);
      this.mysrc = r.result;
    },
  },
  methods: {
    async getImg() {
      let respone = await fetch(
        "https://5cb98fc0-78ed-4800-919b-3e8098877d72.bspapp.com/get"
      );
      let result = await respone.json();
      console.log(result);
      this.mysrc = result.data[4].img;
    },

    async getOrderList() {
      try {
        let result = await axios.get("/coffee/order");
        if (result.data) {
          this.orderList = result.data;
          this.orderList.reverse();
        } else {
          showMsg.call(this, "获取订单列表失败!");
        }
      } catch (error) {
        console.log(error);
        showMsg.call(this, "服务器错误!");
      }
    },
  },
  created() {
    if (!this.$store.state.user) {
      this.$router.push("/auth");
    } else {
      for (const key in this.$store.state.user) {
        this.user[key] = this.$store.state.user[key];
      }
    }
    this.getOrderList();
  },
  beforeRouteLeave(to, from, next) {
    // this.$forceUpdate();
    next();
  },
  components: { Order, UserInfo },
};
</script>

<style lang="scss">
#user-view {
  background-color: var(--bgColor);
  min-height: 100%;
}
.address_table {
  @apply border p-1 border-gray-500 rounded-lg;
}
.logout-btn {
  width: 100%;
  margin-top: 5vh;
}
</style>
