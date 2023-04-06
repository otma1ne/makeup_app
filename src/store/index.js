import CartService from "@/services/CartService";
import ProductService from "@/services/ProductService";
import UserService from "@/services/UserService";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowLogin: false,
    isShowRegister: false,
    isShowProductModal: false,
    checkOutCart: false,
    user: {
      username: "",
      email: "test",
      isLoggedin: false,
    },
    selectedProduct: {},
    products: [],
    cart: [],
  },
  getters: {
    user: (state) => state.user,
    selectedProduct: (state) => state.selectedProduct,
    products: (state) => state.products,
    cart: (state) => state.cart,
    cartLength: (state) => state.cart.length,
    checkOutCart: (state) => state.checkOutCart,
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
    CHANGE_USER_INFO(state, user) {
      state.user = user;
    },
    SET_SELECTED_PRODUCTS(state, product) {
      state.selectedProduct = product;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CART(state, cart) {
      state.cart = cart;
    },
    SET_CHECKOUT(state, value) {
      state.checkOutCart = value;
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
    changeUserInfo({ commit }, user) {
      commit("CHANGE_USER_INFO", user);
    },
    setSelectedProduct({ commit }, product) {
      commit("SET_SELECTED_PRODUCTS", product);
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
    fetchCart({ commit }, token) {
      UserService.getUser(token)
        .then((response) => {
          commit("SET_CART", response.data.cart);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart({ commit }, payload) {
      CartService.addToCart(
        payload.token,
        payload.userId,
        payload.productId,
        payload.quantity
      )
        .then((response) => {
          commit("SET_CART", response.data.user.cart);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeCart({ commit }, payload) {
      CartService.changeQuantity(
        payload.token,
        payload.userId,
        payload.productId,
        payload.quantity
      )
        .then((response) => {
          commit("SET_CART", response.data.user.cart);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeFromCart({ commit }, payload) {
      CartService.removeFromCart(
        payload.token,
        payload.userId,
        payload.productId
      )
        .then((response) => {
          commit("SET_CART", response.data.user.cart);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkoutCart({ commit }, payload) {
      CartService.checkOutCart(payload.token, payload.userId)
        .then((response) => {
          commit("SET_CART", response.data.user.cart);
          commit("SET_CHECKOUT", true);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
