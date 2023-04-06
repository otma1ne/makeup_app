<template>
  <div>
    <OverlayCom :isActive="isShowCart" @onclick="closeCart" />
    <div class="side__cart" :class="{ active: isShowCart }">
      <div class="cart__header">
        Shoping Cart <closeIcon width="20" @click="closeCart" />
      </div>
      <div class="cart__body" v-if="getCartLength > 0">
        <ProductCartVue
          v-for="item in getCart"
          :key="item.product._id"
          :item="item"
        />
      </div>
      <div class="empty__body" v-else>Your cart is empty</div>
      <div class="cart__footer" v-if="getCartLength > 0">
        <div class="total">
          <h3>Subtotal</h3>
          <h3>${{ calculateTotalPrice }}</h3>
        </div>
        <button class="primary__btn" @click="navigateToCart">View cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import OverlayCom from "./OverlayCom.vue";
import closeIcon from "@/assets/icons/cross.svg";
import router from "@/router";
import ProductCartVue from "./ProductCart.vue";
export default {
  components: {
    OverlayCom,
    ProductCartVue,
    closeIcon,
  },
  props: {
    isShowCart: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
    navigateToCart() {
      this.closeCart();
      router.push({ name: "cart" });
    },
  },
  computed: {
    getCartLength() {
      return this.$store.getters.cartLength;
    },
    getCart() {
      return this.$store.getters.cart;
    },
    calculateTotalPrice() {
      let totalPrice = 0;
      this.$store.getters.cart.forEach((item) => {
        totalPrice += item.quantity * item.product.sale_price;
      });
      return totalPrice.toFixed(2);
    },
  },
};
</script>

<style scoped>
.side__cart {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  max-width: 300px;
  background: white;
  z-index: 11;
  transition: 0.3s ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.side__cart.active {
  right: 0;
}

.side__cart .cart__header {
  position: relative;
  padding: 25px 20px;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.side__cart .cart__header svg {
  fill: var(--textColor);
  cursor: pointer;
}

.side__cart .cart__body {
  overflow-y: auto;
}

.side__cart .empty__body {
  text-align: center;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--textColor);
}

.side__cart .cart__footer {
  border-top: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
}

.side__cart .cart__footer .total {
  display: flex;
  justify-content: space-between;
}

.side__cart .cart__footer .total h3 {
  font-weight: 400;
  font-size: 16px;
  color: black;
}

.side__cart .cart__footer button {
  width: 100%;
}
</style>
