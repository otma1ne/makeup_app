<template>
  <div class="product" :class="{ onsale: product.onsale }">
    <div class="sale">Sale !</div>
    <div class="img__container">
      <router-link :to="{ name: 'details', params: { id: product._id } }">
        <img
          :src="require('@/assets/images/' + product.images[0] + '')"
          alt="product"
        />
      </router-link>
      <div class="icons">
        <div class="icon__container" @click="showModal(product)">
          <p>Quick View</p>
          <viewIcon fill="black" width="20" />
        </div>
        <div class="icon__container" @click="handleAddToCart(product._id)">
          <p>Add to Cart</p>
          <cartIcon class="add_tocart" stroke="black" width="18" />
        </div>
        <div class="icon__container">
          <p>Compare</p>
          <compareIcon fill="black" width="20" />
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'details', params: { id: product._id } }">
      <div class="content">
        <div class="category">{{ product.category }}</div>
        <div class="name">{{ product.name }}</div>

        <div class="price saled">
          <div class="discount__price">${{ product.sale_price }}</div>
          <div class="init__price">${{ product.price }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import cartIcon from "@/assets/icons/add_tocart.svg";
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
  methods: {
    showModal(product) {
      this.$store.dispatch("setSelectedProduct", product);
      this.$store.dispatch("changeShowProdModal", true);
    },
    handleAddToCart(productId) {
      if (this.getUser.isLoggedin) {
        const payload = {
          token: localStorage.getItem("token"),
          userId: localStorage.getItem("user_id"),
          productId: productId,
          quantity: this.quantity,
        };
        this.$store.dispatch("addToCart", payload);
      } else {
        this.$store.dispatch("changeShowAlertModal", true);
      }
    },
  },
  computed: {
    getUser() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style scoped>
.product {
  position: relative;
  background: white;
  cursor: pointer;
}

.product .sale {
  position: absolute;
  top: 15px;
  left: 15px;
  background: var(--primaryColor);
  z-index: 2;
  color: white;
  font-size: 14px;
  padding: 2px 12px;
  display: none;
}

.product.onsale .sale {
  display: block;
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
  object-fit: cover;
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
}
.product .content .price {
  font-size: 14px;
  font-weight: 500;
  color: var(--primaryColor);
  display: flex;
  align-items: center;
  gap: 10px;
}

.product.onsale .content .price .init__price {
  text-decoration: line-through;
  color: var(--textColor);
  font-size: 12px;
}

.product .content .price .discount__price {
  display: none;
}
.product.onsale .content .price .discount__price {
  display: block;
  text-decoration: solid;
  color: var(--primaryColor);
}
</style>
