import Vue from "vue";
import Vuex from "vuex";
import { SERVER_ADDRESS } from "../config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transitionName: "",
    user: null,
    snackbar: {
      show: false,
      msg: "",
    },
  },
  mutations: {
    changeTransition(state, transitionName) {
      state.transitionName = transitionName;
    },
  },
  actions: {},
  modules: {},
});
