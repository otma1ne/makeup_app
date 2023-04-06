<template>
  <section class="shop">
    <div class="breadcrumb__container">
      <div class="title">Shop</div>
      <ul>
        <li>Home<chevronIcon height="22" /></li>
        <li>Shop</li>
      </ul>
    </div>
    <div class="max__width">
      <div class="shop__container">
        <FilterSideBar
          :isShowFilter="isShowFilter"
          :activeFilter="activeFilter"
          @closeFilter="showFilter(false)"
          @setCategory="setCategory"
        />
        <div class="products__container">
          <div class="header">
            <div class="filter">
              <button
                class="primary__btn filter__btn"
                @click="showFilter(true)"
              >
                <filterIcon />
              </button>
              <select v-model="activeSorting">
                <option value="default" selected>Default Sorting</option>
                <option value="name">Sort By name</option>
                <option value="price_asc">Sort By price Asc</option>
                <option value="price_desc">Sort By price Desc</option>
              </select>
            </div>
            <div class="info">
              Showing {{ products.length }} of {{ products.length }}
            </div>
          </div>
          <div class="products">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chevronIcon from "@/assets/icons/chevron right 1.svg";
import ProductCard from "@/components/ProductCard.vue";
import FilterSideBar from "@/components/Shop/FilterSideBar.vue";
import filterIcon from "@/assets/icons/filter_outline.svg";

export default {
  components: {
    chevronIcon,
    ProductCard,
    FilterSideBar,
    filterIcon,
  },
  data() {
    return {
      isShowFilter: false,
      activeFilter: "All",
      activeSorting: "default",
    };
  },
  methods: {
    showFilter(value) {
      this.isShowFilter = value;
    },
    setCategory(category) {
      console.log(category);
      this.activeFilter = category;
    },
  },
  computed: {
    products() {
      let sortedProducts = [...this.$store.getters.products]; // make a copy of the original products array to avoid mutating it directly
      if (this.activeFilter !== "All") {
        sortedProducts = sortedProducts.filter(
          (product) => product.category === this.activeFilter
        );
      }
      switch (this.activeSorting) {
        case "name":
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "price_asc":
          sortedProducts.sort((a, b) => a.sale_price - b.sale_price);
          break;
        case "price_desc":
          sortedProducts.sort((a, b) => b.sale_price - a.sale_price);
          break;
        default:
          break;
      }
      return sortedProducts;
    },
  },
};
</script>

<style scoped>
.shop {
  margin-top: 104px;
}

.shop .breadcrumb__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 80px 0;
  background: url(@/assets/images/Breadcrumb_bg.jpg);
  background-position: center;
  background-size: cover;
}

.shop .breadcrumb__container .title {
  font-size: 46px;
  font-weight: 600;
}

.shop .breadcrumb__container ul {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
}

.shop .breadcrumb__container ul li {
  display: flex;
  align-content: center;
  gap: 5px;
  color: var(--textColor);
}

.shop .breadcrumb__container ul li svg {
  fill: var(--textColor);
}

.shop .shop__container {
  padding: 80px 0;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}

.shop .shop__container .products__container .products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.shop .shop__container .products__container .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shop .shop__container .products__container .header .filter {
  display: flex;
  gap: 10px;
}

.shop .shop__container .products__container .header .filter__btn {
  display: none;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid var(--textColor);
}

.shop .shop__container .products__container .header .filter__btn svg {
  stroke: var(--textColor);
  width: 18px;
  height: 18px;
}

.shop .shop__container .products__container .header .info {
  font-size: 14px;
  color: var(--textColor);
}

.shop .shop__container .products__container .products {
  margin-top: 30px;
}

.shop .shop__container .products__container .products .product {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

@media only screen and (max-width: 1300px) {
  .shop .shop__container .products__container .products {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 992px) {
  .shop .shop__container {
    grid-template-columns: 1fr;
  }
  .shop .shop__container .products__container .products {
    grid-template-columns: repeat(3, 1fr);
  }
  .shop .shop__container .products__container .header .filter__btn {
    display: flex;
  }
}

@media only screen and (max-width: 768px) {
  .shop .breadcrumb__container {
    padding: 40px 0;
  }

  .shop .breadcrumb__container .title {
    font-size: 36px;
    font-weight: 600;
  }
  .shop .shop__container .products__container .products {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 600px) {
  .shop {
    margin-top: 99px;
  }
}

@media only screen and (max-width: 500px) {
  .shop .shop__container .products__container .products {
    grid-template-columns: 1fr;
  }

  .shop .shop__container .products__container .header .filter select {
    padding: 10px 20px 10px 10px;
  }
}
</style>
