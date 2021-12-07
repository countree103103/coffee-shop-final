import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { transitionName: "" },
  mutations: {
    changeTransition(state, transitionName) {
      state.transitionName = transitionName;
    },
  },
  actions: {},
  modules: {},
});
