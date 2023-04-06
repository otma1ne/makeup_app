<template>
  <section class="checkout">
    <div class="breadcrumb__container">
      <div class="title">Chekout</div>
      <ul>
        <li>Home<chevronIcon height="22" /></li>
        <li>Chekout</li>
      </ul>
    </div>
    <div
      class="max__width"
      v-if="calculateTotalPrice > 0 && !isCheckout && getUser.isLoggedin"
    >
      <div class="checkout__container">
        <div class="payment__container">
          <div class="title">Payment details</div>
          <form class="payment__details" @submit="makePayment">
            <div class="inputs">
              <div
                class="input__labled email"
                :class="{
                  error: errors.emailError || errors.emailInvalidError,
                }"
              >
                <label for="email_input">Email address</label>
                <input
                  type="email"
                  id="email_input"
                  v-model="getUser.email"
                  placeholder="Enter your email address"
                  @keypress="
                    () => {
                      errors.emailError = false;
                      errors.emailInvalidError = false;
                    }
                  "
                />
                <div class="error__message">
                  {{
                    errors.emailInvalidError
                      ? "Please enter a valid email"
                      : "Please enter the Email"
                  }}
                </div>
              </div>
              <div
                class="input__labled card__number"
                :class="{
                  error:
                    errors.cardNumberError || errors.cardNumberInvalidError,
                }"
              >
                <label for="card__number">Card number</label>
                <input
                  type="text"
                  id="card__number"
                  v-model="cardNumber"
                  placeholder="Enter your card number"
                  @keypress="
                    () => {
                      errors.cardNumberError = false;
                      errors.cardNumberInvalidError = false;
                    }
                  "
                />
                <div class="error__message">
                  {{
                    errors.cardNumberInvalidError
                      ? "Please enter a valid card"
                      : "Please enter the card number"
                  }}
                </div>
              </div>
              <div
                class="input__labled expiry__date"
                :class="{
                  error:
                    errors.expiryDateError || errors.expiryDateInvalidError,
                }"
              >
                <label for="expiry__date">Expiry date</label>
                <input
                  type="text"
                  id="expiry__date"
                  placeholder="MM / YY"
                  v-model="expiryDate"
                  maxlength="5"
                  @input="onExpiryDateChange"
                  @keypress="
                    () => {
                      errors.expiryDateError = false;
                      errors.expiryDateInvalidError = false;
                    }
                  "
                />
                <div class="error__message">
                  {{
                    errors.expiryDateInvalidError
                      ? "Please enter a valid date"
                      : "Please enter the expiration date"
                  }}
                </div>
              </div>
              <div
                class="input__labled cvv"
                :class="{
                  error: errors.cvvError || errors.cvvInvalidError,
                }"
              >
                <label for="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="CVV"
                  maxlength="3"
                  v-model="cvv"
                  @keypress="
                    () => {
                      errors.cvvError = false;
                      errors.cvvInvalidError = false;
                    }
                  "
                />
                <div class="error__message">
                  {{
                    errors.cvvInvalidError
                      ? "Please enter a valid Cvv"
                      : "Please enter the Cvv"
                  }}
                </div>
              </div>
            </div>
            <div class="check__input">
              <input type="checkbox" id="has__promo" v-model="hasPromo" />
              <label for="has__promo">I've a promo code</label>
            </div>
            <div class="input__labled .promo__input" v-if="hasPromo">
              <label for="promo">Code promo</label>
              <input type="text" id="promo" placeholder="Enter code promo" />
            </div>
            <button class="primary__btn">Make payment</button>
          </form>
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
          </div>
        </div>
      </div>
    </div>
    <div
      class="max__width"
      v-if="calculateTotalPrice == 0 && isCheckout && getUser.isLoggedin"
    >
      <ThanksComVue />
    </div>
    <div
      class="max__width"
      v-if="calculateTotalPrice == 0 && !isCheckout && getUser.isLoggedin"
    >
      <div class="empty">
        <emptycartIcon width="150" height="150" />
        <div class="title">Your cart is currently empty.</div>
        <button class="primary__btn" @click="navigateToHome()">
          Return to shop
        </button>
      </div>
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
  </section>
</template>

<script>
import chevronIcon from "@/assets/icons/chevron right 1.svg";
import ThanksComVue from "@/components/Checkout/ThanksCom.vue";
import emptycartIcon from "@/assets/icons/empty_cart.svg";
import AlertIcon from "@/assets/icons/alert.svg";
import router from "@/router";

export default {
  components: {
    chevronIcon,
    ThanksComVue,
    emptycartIcon,
    AlertIcon,
  },
  data() {
    return {
      hasPromo: false,
      errors: {
        emailError: false,
        emailInvalidError: false,
        cardNumberError: false,
        cardNumberInvalidError: false,
        expiryDateError: false,
        expiryDateInvalidError: false,
        cvvError: false,
        cvvInvalidError: false,
      },
      cardNumber: null,
      expiryDate: null,
      cvv: null,
    };
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (!this.getUser.email) {
        this.errors = { ...this.errors, emailError: true };
      } else if (!this.validEmail(this.getUser.email)) {
        this.errors = { ...this.errors, emailInvalidError: true };
      }

      if (!this.cardNumber) {
        this.errors = { ...this.errors, cardNumberError: true };
      } else if (!this.validCardNumber(this.cardNumber)) {
        this.errors = { ...this.errors, cardNumberInvalidError: true };
      }

      if (!this.expiryDate) {
        this.errors = { ...this.errors, expiryDateError: true };
      } else if (!this.validExpiryDate(this.expiryDate)) {
        this.errors = { ...this.errors, expiryDateInvalidError: true };
      }

      if (!this.cvv) {
        this.errors = { ...this.errors, cvvError: true };
      } else if (!this.validCvv(this.cvv)) {
        this.errors = { ...this.errors, cvvInvalidError: true };
      }

      if (Object.values(this.errors).every((error) => !error)) {
        return true;
      }
      return false;
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validCardNumber(cardNumber) {
      var re = /^[0-9]{13,19}$/;
      return re.test(cardNumber);
    },
    validExpiryDate(expiryDate) {
      var re = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
      if (!re.test(expiryDate)) {
        return false;
      }
      var today = new Date();
      var parts = expiryDate.split("/");
      var month = parseInt(parts[0]);
      var year = parseInt(parts[1]);
      if (year < 100) {
        year += 2000;
      }
      var expiry = new Date(year, month - 1, 1);
      expiry.setMonth(expiry.getMonth() + 1);
      expiry.setDate(expiry.getDate() - 1);
      return expiry >= today;
    },
    onExpiryDateChange() {
      if (this.expiryDate.length === 2 && !this.expiryDate.includes("/")) {
        this.expiryDate += "/";
      }
    },
    validCvv(cvv) {
      var re = /^[0-9]{3,4}$/;
      return re.test(cvv);
    },
    makePayment(e) {
      e.preventDefault();
      if (this.checkForm()) {
        this.$store.dispatch("checkoutCart", {
          token: localStorage.getItem("token"),
          userId: localStorage.getItem("user_id"),
        });
      }
    },
    navigateToHome() {
      router.push({ name: "home" });
    },
    handleLoginClick() {
      this.$store.dispatch("changeShowLogin", true);
    },
  },
  computed: {
    calculateTotalPrice() {
      let totalPrice = 0;
      this.$store.getters.cart.forEach((item) => {
        totalPrice += item.quantity * item.product.price;
      });
      return totalPrice.toFixed(2);
    },
    getUser() {
      return this.$store.getters.user;
    },
    isCheckout() {
      return this.$store.getters.checkOutCart;
    },
  },
};
</script>

<style scoped>
.checkout {
  margin-top: 104px;
}

.checkout .breadcrumb__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 80px 0;
  background: url(@/assets/images/Breadcrumb_bg.jpg);
  background-position: center;
  background-size: cover;
}

.checkout .breadcrumb__container .title {
  font-size: 46px;
  font-weight: 600;
}

.checkout .breadcrumb__container ul {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
}

.checkout .breadcrumb__container ul li {
  display: flex;
  align-content: center;
  gap: 5px;
  color: var(--textColor);
}

.checkout .breadcrumb__container ul li svg {
  fill: var(--textColor);
}

.checkout .checkout__container {
  padding: 80px 0;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
}

.checkout .checkout__container .title {
  font-size: 18px;
}
.checkout .checkout__container .payment__details {
  margin-top: 40px;
}
.checkout .checkout__container .payment__details .inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "email__input email__input"
    "card__number card__number"
    "expiry__date cvv";
  gap: 20px;
}
.checkout .checkout__container .payment__details .inputs input {
  width: 100%;
}

.checkout .checkout__container .payment__details .input__labled.email {
  grid-area: email__input;
}

.checkout .checkout__container .payment__details .input__labled.card__number {
  grid-area: card__number;
}

.checkout .checkout__container .payment__details .input__labled.expiry__date {
  grid-area: expiry__date;
}

.checkout .checkout__container .payment__details .input__labled.cvv {
  grid-area: cvv;
}

.checkout .checkout__container .payment__details .check__input {
  margin: 30px 0 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.checkout .checkout__container .payment__details .primary__btn {
  margin-top: 40px;
  width: 100%;
}

.checkout .checkout__container .total__container__header h4 {
  font-size: 18px;
  font-weight: 400;
}

.checkout .checkout__container .total__container__body {
  margin-top: 50px;
  border: 2px solid #eee;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.checkout .checkout__container .total__container__body .item {
  display: flex;
  justify-content: space-between;
}

.checkout
  .checkout__container
  .total__container
  .total__container__body
  .item
  .value {
  font-size: 14px;
  font-weight: 500;
}

.checkout
  .checkout__container
  .total__container
  .total__container__body
  button {
  margin-top: 20px;
  width: 100%;
}

.checkout .empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 104px);
  flex-direction: column;
  gap: 20px;
}

.checkout .empty .title {
  font-size: 16px;
  font-weight: 500;
}
.checkout .login__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 104px);
  flex-direction: column;
}
.checkout .login__container .icon {
  stroke: black;
}

.checkout .login__container .alert__title {
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
}

.checkout .login__container .sub__title {
  margin-top: 20px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--textColor);
}

.checkout .login__container .primary__btn {
  margin-top: 30px;
  background: black;
  color: white;
  min-width: 120px;
}

@media screen and (max-width: 992px) {
  .checkout .checkout__container {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 768px) {
  .checkout .breadcrumb__container {
    padding: 40px 0;
  }

  .checkout .breadcrumb__container .title {
    font-size: 36px;
    font-weight: 600;
  }
}

@media screen and (max-width: 600px) {
  .checkout {
    margin-top: 97px;
  }
}
</style>
