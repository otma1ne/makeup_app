<template>
  <div>
    <OverlayComVue :isActive="isShowProductModal" @onclick="closeModal" />
    <div class="product__modal" :class="{ active: isShowProductModal }">
      <div class="img__container">
        <img
          :src="
            selectedProduct?.images
              ? require('@/assets/images/' + selectedProduct?.images[0])
              : ''
          "
          alt=""
        />
      </div>
      <div class="details__container">
        <closeIcon class="close__icon" width="20" @click="closeModal" />
        <div class="product__name">{{ selectedProduct.name ?? "" }}</div>
        <AwesomeVueStarRating
          :star="4"
          :hasresults="false"
          :hasdescription="false"
          :starsize="'xs'"
          :disabled="true"
        />
        <div class="product__description">
          {{ selectedProduct.description ?? "" }} {{ selectedProduct.rating }}
        </div>
        <div class="product__price">
          ${{ selectedProduct.sale_price ?? "" }}
        </div>
        <div class="quantity">
          <div class="title">Quantity</div>
          <div class="controls">
            <button @click="handleMinesQuantityClick">-</button>
            <input type="text" v-model="quantity" readonly />
            <button @click="handlePlusQuantityClick">+</button>
          </div>
        </div>
        <button
          class="primary__btn"
          @click="handleAddToCart(selectedProduct._id)"
        >
          Add To Cart
        </button>
        <div class="error" v-if="loginError !== ''">{{ this.loginError }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OverlayComVue from "./OverlayCom.vue";
import AwesomeVueStarRating from "awesome-vue-star-rating";
import closeIcon from "@/assets/icons/cross.svg";

export default {
  components: {
    OverlayComVue,
    AwesomeVueStarRating,
    closeIcon,
  },
  data() {
    return {
      quantity: 1,
      loginError: "",
    };
  },
  methods: {
    closeModal() {
      this.$store.dispatch("changeShowProdModal", false);
      this.loginError = "";
    },
    handlePlusQuantityClick() {
      if (this.quantity < 10) this.quantity += 1;
    },
    handleMinesQuantityClick() {
      if (this.quantity > 1) this.quantity -= 1;
    },
    handleAddToCart(productId) {
      if (this.user.isLoggedin) {
        const payload = {
          token: localStorage.getItem("token"),
          userId: localStorage.getItem("user_id"),
          productId: productId,
          quantity: this.quantity,
        };
        this.$store.dispatch("addToCart", payload);
      } else {
        this.loginError = "You must be logged in";
      }
    },
  },
  computed: mapState(["isShowProductModal", "selectedProduct", "user"]),
};
</script>

<style>
.product__modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 30px);
  max-width: 900px;
  background: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 11;
  display: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}
.product__modal.active {
  display: grid;
}

.product__modal .img__container {
  position: relative;
  padding-top: 100%;
  overflow: hidden;
}

.product__modal .img__container img {
  position: absolute;
  top: 0;
  left: 0;
  background: #f5f5f5;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.product__modal .details__container {
  position: relative;
  padding: 40px 20px 40px 0;
}

.product__modal .details__container svg.close__icon {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  fill: var(--textColor);
}

.product__modal .details__container .product__name {
  font-size: 28px;
  font-weight: 500;
}

.product__modal .details__container .product__description {
  margin-top: 10px;
  font-size: 15px;
  line-height: 28px;
  color: var(--textColor);
}

.product__modal .details__container .product__price {
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
}

.product__modal .details__container .quantity {
  margin-top: 20px;
  border: 1px solid #f1f1f1;
  padding-left: 20px;
  font-size: 14px;
  color: var(--textColor);
  width: max-content;
  display: flex;
  align-items: center;
  gap: 20px;
}

.product__modal .details__container .quantity .controls button {
  width: 35px;
  height: 40px;
  font-size: 18px;
  background: white;
  border: none;
  border-right: 1px solid #f1f1f1;
  border-left: 1px solid #f1f1f1;
  cursor: pointer;
}
.product__modal .details__container .quantity .controls input {
  width: 50px;
  height: 40px;
  border: none;
  padding: 0;
  text-align: center;
}

.product__modal .details__container button.primary__btn {
  margin-top: 20px;
  background: black;
  color: white;
  width: 50%;
}

.product__modal .details__container .error {
  font-size: 14px;
  margin-top: 20px;
  color: red;
}

@media only screen and (max-width: 992px) {
  .product__modal {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .product__modal .details__container {
    padding: 20px 40px;
  }

  .product__modal .details__container svg.close__icon {
    top: 10px;
    right: 20px;
  }

  .product__modal .img__container {
    position: relative;
    padding-top: 50%;
  }
}

@media only screen and (max-width: 500px) {
  .product__modal .details__container .product__name {
    font-size: 20px;
  }
  .product__modal .details__container button.primary__btn {
    width: 100%;
  }
}
</style>
