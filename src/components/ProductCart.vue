<template>
  <div class="prodcut">
    <div class="img__container">
      <img :src="require('@/assets/images/' + item.product.images[0])" alt="" />
    </div>
    <div class="details">
      <div class="name">{{ item.product.name }}</div>
      <div class="quantity">
        <div class="price">{{ item.product.price }}</div>
        x {{ item.quantity }}
      </div>
    </div>
    <closeIcon width="16" @click="handleRemoveCart(item.product._id)" />
  </div>
</template>

<script>
import closeIcon from "@/assets/icons/cross.svg";
export default {
  components: {
    closeIcon,
  },
  props: {
    item: {
      type: Object,
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
  },
};
</script>

<style scoped>
.prodcut {
  position: relative;
  padding: 15px 30px 15px 20px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #f1f1f1;
}

.prodcut svg {
  position: absolute;
  right: 10px;
  top: 10px;
  fill: var(--textColor);
  cursor: pointer;
}

.prodcut .img__container {
  width: 60px;
  height: 60px;
}

.prodcut .img__container img {
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.prodcut .details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.prodcut .details .name {
  font-size: 14px;
}

.prodcut .quantity {
  font-size: 12px;
  color: var(--textColor);
  display: flex;
  gap: 5px;
}

.prodcut .quantity .price {
  color: var(--primaryColor);
}
</style>
