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
        <FilterSideBar />
        <div class="products__container">
          <div class="header">
            <select>
              <option value="default">Default Sorting</option>
              <option value="name">Sort By name</option>
              <option value="price_asc">Sort By price Asc</option>
              <option value="price_desc">Sort By price Desc</option>
            </select>
            <div class="info">Showing 12 of 16</div>
          </div>
          <div class="products">
            <ProductCard
              v-for="item in items"
              :key="item"
              :product="{
                name: 'Fantastic Rubber Knife',
                category: 'Makeup',
                price: '11.56',
                image: '23_1-460x460.png',
              }"
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

export default {
  components: {
    chevronIcon,
    ProductCard,
    FilterSideBar,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
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
</style>
