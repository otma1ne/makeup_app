<template>
  <section class="checkout">
    <div class="breadcrumb__container">
      <div class="title">Chekout</div>
      <ul>
        <li>Home<chevronIcon height="22" /></li>
        <li>Chekout</li>
      </ul>
    </div>
    <div class="max__width">
      <div class="checkout__container">
        <div class="payment__container">
          <div class="title">Payment details</div>
          <form class="payment__details">
            <div class="inputs">
              <div class="input__labled email">
                <label for="email_input">Email address</label>
                <input
                  type="email"
                  id="email_input"
                  placeholder="Enter your email address"
                />
              </div>
              <div class="input__labled card__number">
                <label for="card__number">Card number</label>
                <input
                  type="text"
                  id="card__number"
                  placeholder="Enter your card number"
                />
              </div>
              <div class="input__labled expiry__date">
                <label for="expiry__date">Expiry date</label>
                <input type="text" id="expiry__date" placeholder="MM / YY" />
              </div>
              <div class="input__labled cvv">
                <label for="cvv">Expiry date</label>
                <input type="text" id="cvv" placeholder="CVV" />
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
    </div>
  </section>
</template>

<script>
import chevronIcon from "@/assets/icons/chevron right 1.svg";

export default {
  components: {
    chevronIcon,
  },
  data() {
    return {
      hasPromo: false,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
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
