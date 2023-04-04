import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import DetailsView from "../views/DetailsView.vue";
import CartView from "../views/CartView.vue";
import NotfoundView from "../views/NotfoundView.vue";
import CheckoutView from "../views/CheckoutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Makeup - home" },
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
    meta: { title: "Makeup - shop" },
  },
  {
    path: "/details/:id",
    name: "details",
    component: DetailsView,
    meta: { title: "Makeup - detail" },
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
    meta: { title: "Makeup - cart" },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
    meta: { title: "Makeup - checkout" },
  },
  {
    path: "**",
    name: "notfound",
    component: NotfoundView,
    meta: { title: "Makeup - not found" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;
  if (title) {
    document.title = title;
  }
  window.scrollTo(0, 0);
  next();
});

export default router;
