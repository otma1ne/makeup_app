<template>
  <section class="cart">
    <div class="breadcrumb__container">
      <div class="title">Cart</div>
      <ul>
        <li>Home<chevronIcon height="22" /></li>
        <li>Cart</li>
      </ul>
    </div>
    <div class="max__width">
      <div
        class="cart__container"
        v-if="getCartLength > 0 && getUser.isLoggedin"
      >
        <div class="products__container">
          <div class="products__container__header">
            <h4>Products</h4>
            <h4>Quantity</h4>
          </div>
          <div class="products__container__body">
            <ProductCart2Vue
              v-for="item in getCartProduct"
              :key="item.product._id"
              :product="item.product"
              :quantity="item.quantity"
            />
          </div>
        </div>
        <div class="total__container">
          <div class="total__container__header">
            <h4>Total</h4>
          </div>
          <div class="total__container__body">
            <div class="item">
              <div class="name">Subtotal</div>
              <div class="value">${{ calculateTotalPrice }}</div>
            </div>
            <div class="item">
              <div class="name">Shipping</div>
              <div class="value">$0</div>
            </div>
            <div class="item">
              <div class="name">Total</div>
              <div class="value">${{ calculateTotalPrice }}</div>
            </div>
            <button class="primary__btn" @click="navigateToCheckout">
              Proceed to Chekout
            </button>
          </div>
        </div>
      </div>
      <div class="empty" v-if="getCartLength == 0 && getUser.isLoggedin">
        <emptycartIcon width="150" height="150" />
        <div class="title">Your cart is currently empty.</div>
        <button class="primary__btn" @click="navigateToHome()">
          Return to shop
        </button>
      </div>
      <div class="max__width" v-if="!getUser.isLoggedin">
        <div class="login__container">
          <AlertIcon class="icon" width="60" />
          <div class="alert__title">You must be logged in</div>
          <div class="sub__title">
            In order to be able to add products to your cart, you must be logged
            in
          </div>
          <button class="primary__btn" @click="handleLoginClick">Login</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chevronIcon from "@/assets/icons/chevron right 1.svg";
import emptycartIcon from "@/assets/icons/empty_cart.svg";
import router from "@/router";
import ProductCart2Vue from "@/components/ProductCart2.vue";
import AlertIcon from "@/assets/icons/alert.svg";
export default {
  components: {
    chevronIcon,
    emptycartIcon,
    ProductCart2Vue,
    AlertIcon,
  },
  methods: {
    navigateToHome() {
      router.push({ name: "home" });
    },
    navigateToCheckout() {
      router.push({ name: "checkout" });
    },
    handleLoginClick() {
      this.$store.dispatch("changeShowLogin", true);
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.user;
    },
    getCartLength() {
      return this.$store.getters.cartLength;
    },
    getCartProduct() {
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
.cart {
  margin-top: 104px;
}

.cart .breadcrumb__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 80px 0;
  background: url(@/assets/images/Breadcrumb_bg.jpg);
  background-position: center;
  background-size: cover;
}

.cart .breadcrumb__container .title {
  font-size: 46px;
  font-weight: 600;
}

.cart .breadcrumb__container ul {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
}

.cart .breadcrumb__container ul li {
  display: flex;
  align-content: center;
  gap: 5px;
  color: var(--textColor);
}

.cart .breadcrumb__container ul li svg {
  fill: var(--textColor);
}

.cart .cart__container {
  padding: 80px 0;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
}

.cart .cart__container .products__container .products__container__header {
  display: grid;
  grid-template-columns: 1fr 142px;
}

.cart .cart__container .products__container .products__container__header h4,
.cart .cart__container .total__container .total__container__header h4 {
  font-weight: 500;
}

.cart .cart__container .products__container .products__container__body,
.cart .cart__container .total__container .total__container__body {
  margin-top: 20px;
  border: 1px solid #eee;
}

.cart
  .cart__container
  .products__container
  .products__container__body
  .product:last-child {
  border: none;
}

.cart .cart__container .total__container .total__container__body {
  margin-top: 20px;
  border: 2px solid #eee;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart .cart__container .total__container .total__container__body .item {
  display: flex;
  justify-content: space-between;
}

.cart .cart__container .total__container .total__container__body .item .value {
  font-size: 14px;
  font-weight: 500;
}

.cart .cart__container .total__container .total__container__body button {
  margin-top: 20px;
  width: 100%;
}
.cart .empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 104px);
  flex-direction: column;
  gap: 20px;
}

.cart .empty .title {
  font-size: 16px;
  font-weight: 500;
}

.cart .login__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 104px);
  flex-direction: column;
}
.cart .login__container .icon {
  stroke: black;
}

.cart .login__container .alert__title {
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
}

.cart .login__container .sub__title {
  margin-top: 20px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--textColor);
}

.cart .login__container .primary__btn {
  margin-top: 30px;
  background: black;
  color: white;
  min-width: 120px;
}

@media screen and (max-width: 1200px) {
  .cart .cart__container {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 768px) {
  .cart .breadcrumb__container {
    padding: 40px 0;
  }

  .cart .breadcrumb__container .title {
    font-size: 36px;
    font-weight: 600;
  }
}

@media screen and (max-width: 600px) {
  .cart {
    margin-top: 97px;
  }
}
</style>
