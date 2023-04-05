<template>
  <div class="product">
    <div class="product__details">
      <div class="img__container">
        <img
          :src="require('@/assets/images/' + product.images[0] + '')"
          alt=""
        />
      </div>
      <div class="info">
        <div class="name">{{ product.name }}</div>
        <div class="price">{{ product.price }}</div>
      </div>
    </div>
    <div class="controls">
      <button>-</button>
      <input type="text" v-model="quantity" readonly />
      <button>+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 1,
    };
  },
};
</script>

<style scoped>
.product {
  padding: 20px;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product .product__details {
  display: flex;
  align-items: center;
  gap: 20px;
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
