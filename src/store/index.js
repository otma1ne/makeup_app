import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowLogin: false,
    isShowRegister: false,
    isShowProductModal: false,
  },
  getters: {},
  mutations: {
    CHANGE_SHOW_LOGIN(state, value) {
      state.isShowLogin = value;
    },
    CHANGE_SHOW_REGISTER(state, value) {
      state.isShowRegister = value;
    },
    CHANGE_SHOW_PRODMODAL(state, value) {
      state.isShowProductModal = value;
    },
  },
  actions: {
    changeShowLogin({ commit }, value) {
      commit("CHANGE_SHOW_LOGIN", value);
    },
    changeShowRegister({ commit }, value) {
      commit("CHANGE_SHOW_REGISTER", value);
    },
    changeShowProdModal({ commit }, value) {
      commit("CHANGE_SHOW_PRODMODAL", value);
    },
  },
  modules: {},
});
