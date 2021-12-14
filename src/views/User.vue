<template>
  <div id="user-view">
    <v-container>
      <v-row>
        <v-col class="user-information"
          ><div>
            <v-card width="400">
              <v-container>
                <v-row>
                  <v-col cols="4"
                    ><v-avatar rounded>
                      <v-img src="../assets/american.jpeg"></v-img> </v-avatar
                  ></v-col>
                  <v-col cols="8"><v-card-title>用户资料</v-card-title></v-col>
                </v-row>
                <v-container>
                  <v-form ref="userForm">
                    <v-text-field
                      label="用户名"
                      name="user_name"
                      :value="user.user_name"
                    ></v-text-field
                    ><v-select
                      :items="['男', '女', '未知']"
                      name="user_gender"
                      v-model="user.user_gender"
                      label="性别"
                    ></v-select>
                    <!-- <v-file-input v-model="head"></v-file-input>
                    <v-img :src="mysrc"></v-img> -->
                  </v-form>
                </v-container>
                <v-row>
                  <v-col
                    ><v-btn class="logout-btn" rounded @click="update"
                      >更新用户数据</v-btn
                    ></v-col
                  >
                  <v-col
                    ><v-btn @click="logout" class="logout-btn" rounded
                      >登出</v-btn
                    ></v-col
                  >
                </v-row>
              </v-container>

              <v-card-text> </v-card-text>
            </v-card>
          </div>
        </v-col>
        <v-col class="user-order"
          ><div>
            <v-card width="400">
              <v-card-title primary-title> 您的订单 </v-card-title>
              <v-container>
                <Order></Order>
                <Order></Order>
                <Order></Order>
              </v-container>
              <v-pagination v-model="page" :length="3"></v-pagination>
            </v-card></div
        ></v-col>
      </v-row>

      <v-row><v-col> </v-col></v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import Order from "../components/Order.vue";
import { reader, showMsg } from "../utils";
export default {
  name: "User",
  data() {
    return {
      page: 1,
      user: {
        user_name: null,
        user_gender: null,
      },
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
    async logout() {
      let result = await axios.post("/coffee/user/logout");
      if (result.data) {
        this.$store.state.user = null;
        this.$router.push("/auth");
      } else {
        alert("登出失败!");
      }
    },
    async update() {
      try {
        let result = await axios.post(
          "/coffee/user/updateUserInfo",
          new FormData(this.$refs.userForm.$el)
        );
        if (result.data) {
          showMsg.call(this, "用户数据更新成功!");
          this.$store.state.user = result.data;
          //对this.user深拷贝store的user信息
          for (const key in this.$store.state.user) {
            this.user[key] = this.$store.state.user[key];
          }
        } else {
          showMsg.call(this, "失败!请检查数据,新用户名可能已存在");
        }
      } catch (error) {
        showMsg.call(this, "服务器错误!请稍后再试");
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
    this.getImg();
  },
  beforeRouteLeave(to, from, next) {
    // this.$forceUpdate();
    next();
  },
  components: { Order },
};
</script>

<style lang="scss">
#user-view {
  background-color: var(--bgColor);
}
.logout-btn {
  width: 100%;
  margin-top: 5vh;
}
</style>
