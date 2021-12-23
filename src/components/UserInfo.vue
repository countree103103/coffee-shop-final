<template>
  <div class="user-information">
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="4"
            ><v-avatar rounded>
              <v-img src="../assets/american.jpeg"></v-img> </v-avatar
          ></v-col>
          <v-col cols="8"><v-card-title>用户资料</v-card-title></v-col>
        </v-row>
        <v-row>
          <v-col>
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
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <template v-if="user.address && user.address.length">
              <h1 class="mb-4 text-lg text-gray-500">地址簿</h1>
              <v-simple-table class="address_table">
                <thead>
                  <tr>
                    <th>联系人</th>
                    <th>手机</th>
                    <th>地址</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(i, index) in user.address" :key="index">
                    <td class="whitespace-nowrap">{{ i.name }}</td>
                    <td>{{ i.tel }}</td>
                    <td class="whitespace-nowrap">
                      {{ i.address }}
                    </td>
                    <td>
                      <v-btn color="" icon x-small @click="deleteAddress(index)"
                        ><v-icon>mdi-delete</v-icon></v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </template>
            <template v-else>
              <h1 class="mb-4 text-lg text-gray-500">地址簿</h1>
              <p class="address_table no-address">暂无地址，请添加~</p>
            </template>
            <v-btn icon @click="addAddress"><v-icon>mdi-plus</v-icon></v-btn>
          </v-col>
        </v-row>
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
</template>

<script>
import axios from "axios";
import { showMsg } from "../utils";

export default {
  name: "UserInfo",
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      // user: {
      //   user_name: null,
      //   user_gender: null,
      //   address: [],
      // },
    };
  },
  methods: {
    async logout() {
      let result = await axios.post("/coffee/user/logout");
      if (result.data) {
        this.$store.state.user = null;
        this.$router.push("/auth");
      } else {
        alert("登出失败!");
      }
    },
    addAddress() {
      let name, tel, address;
      let exp_tel =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      (name = prompt("请输入姓名")) &&
        (tel = prompt("请输入手机号码")) &&
        exp_tel.test(tel) &&
        (address = prompt("请输入地址"));
      if (name && tel && address) {
        console.log(name, tel, address);
        this.user.address.push({ name, tel, address });
      } else {
        null;
      }
    },
    deleteAddress(index) {
      if (confirm("确认删除该地址？")) {
        this.user.address.splice(index, 1);
      } else {
        null;
      }
    },
    async update() {
      try {
        let formData = new FormData(this.$refs.userForm.$el);
        formData.append("address", JSON.stringify(this.user.address));
        let result = await axios.post("/coffee/user/updateUserInfo", formData);
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
};
</script>

<style lang="scss">
.address_table {
  @apply border p-1 border-gray-500 rounded-lg;
  &.no-address {
    @apply p-8;
  }
}
.logout-btn {
  width: 100%;
  margin-top: 5vh;
}
</style>
