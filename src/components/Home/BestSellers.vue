<template>
  <section class="best__sellers">
    <div class="max__width">
      <div class="title">
        <div class="sup__title">Best Beauty</div>
        <div class="main__title">Best Sellers</div>
      </div>
      <div class="product__container">
        <ProductCard
          v-for="product in products"
          :key="product._id"
          :product="product"
        />
      </div>
      <div class="button__container">
        <button class="primary__btn" @click="navigateToShop">
          View All Product
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
import ProductCard from "../ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  methods: {
    navigateToShop() {
      router.push({ name: "shop" });
    },
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style scoped>
.best__sellers {
  padding: 40px 0;
}

.best__sellers .title {
  text-align: center;
}

.best__sellers .title .sup__title {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.best__sellers .title .main__title {
  margin-top: 4px;
  font-size: 36px;
  line-height: 42px;
  font-weight: 500;
}

.best__sellers .product__container {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.best__sellers .product__container .product {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.best__sellers .button__container {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 1250px) {
  .best__sellers .product__container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 768px) {
  .best__sellers .product__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 500px) {
  .best__sellers .product__container {
    grid-template-columns: 1fr;
  }
}
</style>
