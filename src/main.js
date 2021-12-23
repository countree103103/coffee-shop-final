import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/axios";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "tailwindcss/tailwind.css";
import "@mdi/font/css/materialdesignicons.min.css";

gsap.registerPlugin(ScrollTrigger);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
