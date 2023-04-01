<template>
  <div class="product">
    <div class="img__container">
      <img
        :src="require('@/assets/images/' + product.image + '')"
        alt="product"
      />
      <div class="icons">
        <div class="icon__container">
          <p>Quick View</p>
          <viewIcon fill="black" width="20" />
        </div>
        <div class="icon__container">
          <p>Add to Cart</p>
          <cartIcon fill="black" width="18" />
        </div>
        <div class="icon__container">
          <p>Compare</p>
          <compareIcon fill="black" width="20" />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="category">{{ product.category }}</div>
      <div class="name">{{ product.name }}</div>
      <div class="price">${{ product.price }}</div>
    </div>
  </div>
</template>

<script>
import cartIcon from "@/assets/icons/favorite.svg";
import viewIcon from "@/assets/icons/eye.svg";
import compareIcon from "@/assets/icons/refresh.svg";
export default {
  components: {
    cartIcon,
    viewIcon,
    compareIcon,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product {
  background: white;
  cursor: pointer;
}
.product .img__container {
  position: relative;
  padding-top: 100%;
  background: #f5f5f5;
  overflow: hidden;
}

.product .img__container img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.product .img__container .icons {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  right: -100%;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s ease-in-out;
}

.product:hover .img__container .icons {
  right: 20px;
}

.product .img__container .icons .icon__container {
  position: relative;
  width: 38px;
  height: 38px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product .img__container .icons .icon__container p {
  position: absolute;
  right: 0;
  font-size: 12px;
  font-weight: 600;
  width: 0;
  height: 0;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 10px;
  overflow: hidden;
  transition: right 0.2s ease;
}

.product .img__container .icons .icon__container:hover p {
  width: max-content;
  height: 38px;
  right: 38px;
}

.product .img__container .icons .icon__container:hover {
  background-color: black;
}

.product .img__container .icons .icon__container:hover svg {
  fill: white;
}

.product .content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.product .content .category {
  font-size: 12px;
  color: var(--textColor);
}

.product .content .name {
  font-size: 16px;
}
.product .content .price {
  font-size: 14px;
  font-weight: 500;
  color: var(--primaryColor);
}
</style>
