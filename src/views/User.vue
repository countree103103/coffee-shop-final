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
                    ><v-avatar tile>
                      <v-img src="../assets/american.jpeg"></v-img> </v-avatar
                  ></v-col>
                  <v-col cols="8"><v-card-title>用户资料</v-card-title></v-col>
                </v-row>
                <v-container>
                  <v-form>
                    <v-text-field
                      label="用户名"
                      :value="$store.state.user.user_name"
                    ></v-text-field
                    ><v-text-field
                      label="性别"
                      :value="$store.state.user.user_gender"
                    ></v-text-field>
                    <v-file-input v-model="head"></v-file-input>
                    <v-img :src="mysrc"></v-img>
                  </v-form>
                </v-container>
                <v-row>
                  <v-spacer></v-spacer>
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
import { reader } from "../utils";
export default {
  name: "User",
  data() {
    return {
      page: 1,
      head: null,
      mysrc: null,
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
  },
  created() {
    if (!this.$store.state.user) {
      this.$router.push("/auth");
    }
    this.getImg();
  },
  components: { Order },
};
</script>

<style lang="scss">
#user-view {
  background-color: var(--bgColor);
}
.logout-btn {
  width: 80%;
  margin-top: 5vh;
}
</style>
