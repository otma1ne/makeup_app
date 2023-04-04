<template>
  <div>
    <OverlayCom :isActive="isShowFilter" @onclick="closeFilter" />
    <div class="filter__sidebar" :class="{ active: isShowFilter }">
      <div class="container">
        <div class="filter__item">
          <div class="title">Product Category</div>
          <ul>
            <li v-for="category in productsCategories" :key="category.name">
              {{ category.name }} <span>({{ category.count }})</span>
            </li>
          </ul>
        </div>
        <div class="filter__item">
          <div class="title">Filter by price</div>
          <input class="price__filter" type="range" :value="filterPrice" />
          <div class="price__info">
            <p>Price : $<span>0</span> - $<span>100</span></p>
            <button class="primary__btn">Filter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OverlayCom from "../OverlayCom.vue";
export default {
  props: {
    isShowFilter: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    OverlayCom,
  },
  data() {
    return {
      filterPrice: 100,
    };
  },
  methods: {
    closeFilter() {
      this.$emit("closeFilter");
    },
  },
  computed: {
    productsCategories() {
      const categoryCount = {};
      this.$store.getters.products.forEach((product) => {
        const category = product.category;
        if (categoryCount[category]) {
          categoryCount[category]++;
        } else {
          categoryCount[category] = 1;
        }
      });
      const categories = Object.keys(categoryCount).map((categoryName) => ({
        name: categoryName,
        count: categoryCount[categoryName],
      }));
      return categories;
    },
  },
};
</script>

<style>
.filter__sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 130px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter__sidebar .container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.filter__sidebar .filter__item .title {
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.filter__sidebar .filter__item ul {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 14px;
  color: var(--textColor);
}

.filter__sidebar .filter__item ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter__sidebar .filter__item ul li span {
  font-size: 10px;
  color: var(--textColor);
}

.filter__sidebar .filter__item .price__filter {
  margin-top: 30px;
  width: 100%;
  height: 4px;
  accent-color: black;
}

.filter__sidebar .filter__item .price__info {
  margin-top: 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter__sidebar .filter__item .price__info span {
  font-weight: 500;
}
.filter__sidebar .filter__item .price__info .primary__btn {
  padding: 4px 12px;
  font-size: 12px;
}

@media only screen and (max-width: 992px) {
  .filter__sidebar {
    display: flex;
    position: fixed;
    top: 0;
    left: -100%;
    padding: 40px 30px;
    background: white;
    z-index: 11;
    width: 100%;
    max-width: 300px;
    height: 100vh;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: 0.3s ease-in-out;
  }

  .filter__sidebar.active {
    left: 0;
  }

  .filter__sidebar .container {
    width: 100%;
    position: static;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
