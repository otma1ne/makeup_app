<template>
  <div>
    <OverlayComVue :isActive="isShowSearch" @onclick="closeSearch" />
    <div class="search" :class="{ active: isShowSearch }">
      <div class="max__width">
        <div class="inputs__container">
          <input
            type="text"
            placeholder="Search for the products"
            v-model="searchQuery"
            @input="handleSearchInput"
          />
          <button class="primary__btn">Search</button>
        </div>
        <div class="search__body" v-if="products.length > 0">
          <div class="product__container">
            <ProductCard
              v-for="product in products"
              :key="product._id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/ProductService";
import OverlayComVue from "./OverlayCom.vue";
import ProductCard from "./ProductCard.vue";
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

export default {
  components: {
    OverlayComVue,
    ProductCard,
  },
  props: {
    isShowSearch: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
      products: [],
    };
  },
  methods: {
    closeSearch() {
      this.$emit("closeSearch");
    },
    handleSearchInput: debounce(function () {
      if (this.searchQuery !== "") {
        ProductService.searchproduct(this.searchQuery)
          .then((response) => {
            this.products = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.products = [];
      }
    }, 500),
  },
};
</script>

<style scoped>
.search {
  position: fixed;
  left: 0;
  top: -100%;
  padding: 80px 0;
  width: 100%;
  background: white;
  transition: 0.3s ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 11;
}

.search.active {
  top: 0;
}

.search .inputs__container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search .inputs__container input[type="text"] {
  width: 100%;
}

.search .search__body {
  margin-top: 40px;
  height: 100%;
  overflow-y: auto;
  max-height: 550px;
}

.search .search__body .product__container {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.search .search__body .product__container .product {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

@media only screen and (max-width: 1250px) {
  .search .search__body .product__container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (max-width: 768px) {
  .search .search__body .product__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 500px) {
  .search .search__body .product__container {
    grid-template-columns: 1fr;
  }
}
</style>
