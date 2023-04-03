<template>
  <section class="cart">
    <div class="breadcrumb__container">
      <div class="title">Shop</div>
      <ul>
        <li>Home<chevronIcon height="22" /></li>
        <li>Cart</li>
      </ul>
    </div>
    <div class="max__width">
      <div class="cart__container" v-if="cartProducts.length > 0">
        <div class="products__container">
          <div class="products__container__header">
            <h4>Products</h4>
            <h4>Quantity</h4>
          </div>
          <div class="products__container__body"></div>
        </div>
        <div class="total__container">
          <div class="total__container__header">
            <h4>Total</h4>
          </div>
          <div class="total__container__body">
            <div class="item">
              <div class="name">Subtotal</div>
              <div class="value">$150</div>
            </div>
            <div class="item">
              <div class="name">Shipping</div>
              <div class="value">$0</div>
            </div>
            <div class="item">
              <div class="name">Total</div>
              <div class="value">$150</div>
            </div>
            <button class="primary__btn">Proceed to Chekout</button>
          </div>
        </div>
      </div>
      <div class="empty" v-else>
        <emptycartIcon width="150" height="150" />
        <div class="title">Your cart is currently empty.</div>
        <button class="primary__btn" @click="navigateToHome()">
          Return to shop
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import chevronIcon from "@/assets/icons/chevron right 1.svg";
import emptycartIcon from "@/assets/icons/empty_cart.svg";
import router from "@/router";
export default {
  components: {
    chevronIcon,
    emptycartIcon,
  },
  data() {
    return {
      cartProducts: [],
    };
  },
  methods: {
    navigateToHome() {
      router.push({ name: "home" });
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
  display: flex;
  justify-content: space-between;
}

.cart .cart__container .products__container .products__container__header h4,
.cart .cart__container .total__container .total__container__header h4 {
  font-weight: 500;
}

.cart .cart__container .products__container .products__container__body,
.cart .cart__container .total__container .total__container__body {
  margin-top: 20px;
  height: 300px;
  border: 1px solid #eee;
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
