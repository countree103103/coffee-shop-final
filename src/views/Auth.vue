<template>
  <div id="auth-view">
    <div class="auth-wrapper">
      <div class="login-wrapper">
        <div v-if="state == 1">
          <h1>已有帐号?</h1>
          <v-form ref="loginForm">
            <v-text-field
              name="user_name"
              label="输入用户名"
              id="id"
              v-model="form.login.user_name"
            ></v-text-field>
            <v-text-field
              name="user_password"
              label="输入密码"
              min="8"
              type="password"
              v-model="form.login.user_password"
              :rules="[
                (value) =>
                  (value && value.length >= 8) || '密码长度必须大于等于8！',
              ]"
              @keydown.enter="state == 1 ? login() : null"
            ></v-text-field>
            <v-btn outlined right @click="login" :loading="form.login.loading"
              >登入</v-btn
            >
          </v-form>
        </div>
        <div v-else>
          <h1>已有账号?</h1>
          <p>点击下面按钮登入!</p>
          <v-btn outlined @click="stateChange(1)">登入</v-btn>
        </div>
      </div>
      <div class="register-wrapper">
        <div v-if="state == 2">
          <h1>未有帐号?</h1>
          <v-form ref="registerForm">
            <v-text-field
              name="user_name"
              label="输入用户名"
              id="id"
              v-model="form.register.user_name"
            ></v-text-field>
            <v-text-field
              name="user_password"
              label="输入密码"
              min="8"
              type="password"
              v-model="form.register.user_password"
            ></v-text-field>
            <v-text-field
              name="confirm_user_password"
              label="确认密码"
              min="8"
              type="password"
              :rules="[
                (value) =>
                  value == form.register.user_password || '两次密码不一致！',
                (value) =>
                  (value && value.length >= 8) || '密码长度必须大于等于8！',
              ]"
              @keydown.enter="state == 2 ? register() : null"
            ></v-text-field>
            <v-btn
              outlined
              right
              @click="register"
              :loading="form.register.loading"
              >注册</v-btn
            >
          </v-form>
        </div>
        <div v-else>
          <h1>没有账号?</h1>
          <p>点击下面按钮成为我们的一员!</p>
          <v-btn outlined @click="stateChange(2)">注册</v-btn>
        </div>
      </div>
      <div :class="{ 'auth--indicator': true, register: state == 2 }"></div>
    </div>
    <v-snackbar v-model="showMsg" timeout="2000" color="#512c1d">
      {{ msg }}
      <template v-slot:action="{}">
        <v-btn @click.native="showMsg = false" text>关闭</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import gsap from "gsap/all";
import { SERVER_ADDRESS } from "../config";
export default {
  name: "Auth",
  data() {
    return {
      //1为登录,2为注册
      state: 1,
      form: {
        login: {
          user_name: "",
          user_password: "",
          loading: false,
        },
        register: {
          user_name: "",
          user_password: "",
          loading: false,
        },
      },
      showMsg: false,
      msg: "",
    };
  },
  beforeCreate() {
    if (this.$store.state.user) {
      this.$router.push("/user");
    }
  },
  mounted() {
    gsap.from(".auth-wrapper", 0.7, {
      x: -40,
      opacity: 0,
    });
  },
  methods: {
    stateChange(state) {
      this.state = state;
      // state == 2
      //   ? gsap.to(".auth--indicator", {})
      //   : gsap.to(".auth--indicator", {
      //       x: "0",
      //     });
    },
    async login() {
      if (this.$refs.loginForm.validate()) {
        let loginForm = new FormData(this.$refs.loginForm.$el);
        try {
          this.form.login.loading = true;
          let res = await axios.post(
            `${SERVER_ADDRESS}/coffee/user/login`,
            loginForm
          );
          console.log(res.data);
          if (res.data) {
            let result = await axios.get(`/coffee/user/getUserInfo`);
            console.log(result);
            if (result.data) {
              let userInfo = result.data;
              this.$store.state.user = userInfo;
              this.$router.push("/user");
            } else {
              this.showMsg = true;
              this.msg = "获取用户信息失败！请稍后再试";
            }
          } else {
            this.showMsg = true;
            this.msg = "登陆失败!请检查用户名或密码";
          }
        } catch (error) {
          this.form.login.loading = false;
          this.showMsg = true;
          this.msg = "登录失败！请稍后再试";
        }
        this.form.login.loading = false;
      }
    },
    async register() {
      if (this.$refs.registerForm.validate()) {
        let registerForm = new FormData(this.$refs.registerForm.$el);
        this.form.register.loading = true;
        try {
          let res = await axios.post(`/coffee/user/register`, registerForm);
          console.log(res.data);
          if (!res.data) {
            this.showMsg = true;
            this.msg = "用户已存在！";
            this.form.register.loading = false;
          } else {
            this.showMsg = true;
            this.msg = "注册成功!请登录";
            this.state = 1;
            this.form.register.loading = false;
          }
        } catch (error) {
          console.log(error);
          this.showMsg = true;
          this.msg = "提交失败，服务器错误！";
          this.form.register.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss">
#auth-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 500px) {
    height: 100%;
  }
  background-color: var(--bgColor);
}
.auth-wrapper {
  position: relative;
  height: 60vh;
  width: 80vw;
  box-shadow: 0 5px 10px 5px rgba($color: #000000, $alpha: 0.2);
  margin: auto;
  // margin-top: 25vh;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
}
.login-wrapper {
  height: 100%;
  width: 50%;
  padding: 5%;
}
.register-wrapper {
  height: 100%;
  width: 50%;
  padding: 5%;
}

@media screen and (max-width: 500px) {
  .auth-wrapper {
    flex-direction: column;
    height: 650px;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
  .login-wrapper {
    height: 50%;
    width: auto;
    padding: 5%;
  }
  .register-wrapper {
    height: 50%;
    width: auto;
    padding: 5%;
  }
}

.auth--indicator {
  &.register {
    left: 50%;
  }
  left: 0;
  transition: all 0.2s;
  position: absolute;
  height: 100%;
  width: 50%;
  background-color: #b79783;
  z-index: -1;
  @media screen and (max-width: 500px) {
    position: absolute;
    height: 50%;
    width: 100%;
    top: 0;
    &.register {
      left: 0;
      top: 50%;
    }
  }
}
</style>
