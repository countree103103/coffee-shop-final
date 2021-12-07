<template>
  <div id="auth-view">
    <div class="auth-wrapper">
      <div class="login-wrapper">
        <div v-if="state == 1">
          <h1>已有帐号?</h1>
          <v-form ref="loginForm">
            <v-text-field
              name="userName"
              label="输入用户名"
              id="id"
            ></v-text-field>
            <v-text-field
              name="userPassword"
              label="输入密码"
              hint="最少8个字符"
              min="8"
              type="password"
            ></v-text-field>
            <v-btn outlined right @click="submit">登入</v-btn>
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
              name="userName"
              label="输入用户名"
              id="id"
              v-model="userName"
            ></v-text-field>
            <v-text-field
              name="userPassword"
              label="输入密码"
              hint="最少8个字符"
              min="8"
              type="password"
              v-model="userPassword"
            ></v-text-field>
            <v-text-field
              name="confirmUserPassword"
              label="确认密码"
              hint="最少8个字符"
              min="8"
              type="password"
              :rules="
                (value) => (value == userPassword ? true : 'not matched!')
              "
            ></v-text-field>
            <v-btn outlined right @click="submit">注册</v-btn>
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
  </div>
</template>

<script>
import gsap from "gsap/all";
export default {
  name: "Auth",
  data() {
    return {
      //1为登录,2为注册
      state: 1,
      userName: "",
      userPassword: "",
    };
  },
  mounted() {
    gsap.from(".auth-wrapper", {
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
    submit() {
      if (this.state == 1) {
        this.$refs.loginForm.validate();
      } else {
        this.$refs.registerForm.validate();
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
  height: 100%;
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
    margin-top: 15vh;
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
