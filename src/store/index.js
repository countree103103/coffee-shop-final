import Vue from "vue";
import Vuex from "vuex";
import { SERVER_ADDRESS } from "../config";
import { db } from "../service/CartService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transitionName: "",
    user: null,
    snackbar: {
      show: false,
      msg: "",
    },
    db: db,
    cartList: [],
  },
  mutations: {
    changeTransition(state, transitionName) {
      state.transitionName = transitionName;
    },
  },
  actions: {},
  modules: {},
});
