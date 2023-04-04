import ProductService from "@/services/ProductService";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowLogin: false,
    isShowRegister: false,
    isShowProductModal: false,
    products: [],
    cart: [],
    user: {},
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
  },
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
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_USER(state, user) {
      state.user = user;
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
    fetchProducts({ commit }) {
      ProductService.getProducts()
        .then((response) => {
          commit("SET_PRODUCTS", response.data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
  modules: {},
});
