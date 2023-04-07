<template>
  <section class="category">
    <div class="category__container">
      <router-link
        :to="{ name: 'shop', params: { category: category.name } }"
        v-for="category in categories"
        :key="category.name"
      >
        <div class="card">
          <img
            :src="require('@/assets/images/' + category.image + '')"
            alt="Category"
          />
          <div class="content">
            <div>
              <div class="name">{{ category.name }}</div>
              <div class="number">
                {{ productsCategoriesCount(category.name) }} Product
              </div>
            </div>
            <div class="icon__container">
              <ChevronLeft width="30" />
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import ChevronLeft from "@/assets/icons/chevron right.svg";
export default {
  components: {
    ChevronLeft,
  },
  data() {
    return {
      categories: [
        {
          name: "Makeup",
          number: "12",
          image: "h1_cat-1.webp",
        },
        {
          name: "Skincare",
          number: "16",
          image: "h1_cat-2.webp",
        },
        {
          name: "Fragrance",
          number: "10",
          image: "h1_cat-3.webp",
        },
        {
          name: "Body",
          number: "10",
          image: "h1_cat-4.webp",
        },
      ],
    };
  },
  methods: {
    productsCategoriesCount(category) {
      let count = 0;
      const products = this.$store.getters.products;
      products.map((product) => {
        if (product.category === category) {
          count++;
        }
      });
      return count;
    },
  },
};
</script>

<style scoped>
.category {
  padding: 40px 0;
}

.category .category__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.category .category__container .card {
  position: relative;
  padding-top: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
}

.category .category__container .card img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease-in-out;
}

.category .category__container .card:hover img {
  width: 105%;
}

.category .category__container .card .content {
  position: absolute;
  width: 80%;
  bottom: 40px;
  background: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category .category__container .card .content .name {
  font-size: 20px;
  font-weight: 500;
}

.category .category__container .card .content .number {
  margin-top: 4px;
  font-size: 12px;
  color: var(--textColor);
}

.category .category__container .card .content .icon__container {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  border-radius: 100%;
  transition: 0.3s ease-in-out;
}

.category .category__container .card .content .icon__container svg {
  fill: black;
  transition: 0.3s ease-in-out;
}

.category .category__container .card:hover .content .icon__container {
  background: var(--primaryColor);
}

.category .category__container .card:hover .content .icon__container svg {
  fill: white;
}

@media only screen and (max-width: 1200px) {
  .category .category__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 650px) {
  .category .category__container {
    grid-template-columns: 1fr;
  }
}
</style>
