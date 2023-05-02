<template>
  <div class="product">
    <closeIcon width="16" @click="handleRemoveCart(product._id)" />
    <div class="product__details">
      <div class="img__container">
        <img
          :src="require('@/assets/images/' + product.images[0] + '')"
          alt=""
        />
      </div>
      <div class="info">
        <div class="name">{{ product.name }}</div>
        <div class="price">{{ product.sale_price }}</div>
      </div>
    </div>
    <div class="controls">
      <button @click="handleMinusQuantityClick">-</button>
      <input type="text" :value="quantity" readonly />
      <button @click="handlePlusQuantityClick">+</button>
    </div>
  </div>
</template>

<script>
import closeIcon from "@/assets/icons/cross.svg";
export default {
  components: {
    closeIcon,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },

  methods: {
    handleRemoveCart(productId) {
      const payload = {
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("user_id"),
        productId,
      };
      this.$store.dispatch("removeFromCart", payload);
    },
    handlePlusQuantityClick() {
      const payload = {
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("user_id"),
        productId: this.product._id,
        quantity: this.quantity + 1,
      };
      if (this.quantity < 10) {
        this.$store.dispatch("changeCart", payload);
      }
    },
    handleMinusQuantityClick() {
      const payload = {
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("user_id"),
        productId: this.product._id,
        quantity: this.quantity - 1,
      };
      if (this.quantity > 1) {
        this.$store.dispatch("changeCart", payload);
      }
    },
  },
};
</script>

<style scoped>
.product {
  position: relative;
  padding: 20px 15px;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 20px;
  justify-content: space-between;
}

.product svg {
  position: absolute;
  right: 10px;
  top: 10px;
  fill: var(--textColor);
  cursor: pointer;
}
.product .product__details {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  gap: 10px;
}

.product .product__details .img__container {
  width: 80px;
  height: 80px;
}

.product .product__details .img__container img {
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.product .product__details .info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.product .product__details .info .name {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
}

.product .product__details .info .price {
  font-size: 14px;
  color: var(--primaryColor);
}

.product .controls {
  border: 1px solid #f1f1f1;
}

.product .controls button {
  width: 35px;
  height: 40px;
  font-size: 18px;
  background: white;
  border: none;
  border-right: 1px solid #f1f1f1;
  border-left: 1px solid #f1f1f1;
  cursor: pointer;
}
.product .controls input {
  width: 50px;
  height: 40px;
  border: none;
  padding: 0;
  text-align: center;
}
</style>
