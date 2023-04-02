<template>
  <section class="featured__product">
    <div class="overlay"></div>
    <div class="max__width">
      <div class="featured__product__container">
        <div class="info">
          <div class="sup__title">Best Quality</div>
          <div class="main__title">Featured Products</div>
          <div class="text">
            Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor
            incididunt.
          </div>
          <button class="secondary__btn">View All Product</button>
        </div>
        <swiper-container
          slides-per-view="1"
          space-between="30"
          speed="500"
          class="swiper"
          id="featured__product__swiper"
        >
          <swiper-slide>
            <ProductCard
              :product="{
                name: 'Fantastic Rubber Knife',
                category: 'Makeup',
                price: '11.56',
                image: '23_1-460x460.png',
              }"
            />
          </swiper-slide>
          <swiper-slide>
            <ProductCard
              :product="{
                name: 'Fantastic Rubber Knife',
                category: 'Makeup',
                price: '11.56',
                image: '24_1-460x460.png',
              }"
            />
          </swiper-slide>
          <swiper-slide
            ><ProductCard
              :product="{
                name: 'Fantastic Rubber Knife',
                category: 'Makeup',
                price: '11.56',
                image: '23_1-460x460.png',
              }"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "../ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  mounted() {
    const swiperEl = document.querySelector("#featured__product__swiper");

    const swiperParams = {
      slidesPerView: 1,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 2,
        },
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  },
};
</script>

<style scoped>
.featured__product {
  position: relative;
  margin: 80px 0;
  background: url(@/assets/images/h1_shape-3.png);
  background-position: center;
  background-size: cover;
}

.featured__product .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #373737;
  z-index: -1;
}

.featured__product .featured__product__container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}

.featured__product .featured__product__container .info {
  color: white;
  padding: 120px 0;
}
.featured__product .featured__product__container .info .sup__title {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.featured__product .featured__product__container .info .main__title {
  margin-top: 4px;
  font-size: 36px;
  line-height: 42px;
  font-weight: 500;
}

.featured__product .featured__product__container .info .text {
  margin-top: 10px;
  font-size: 14px;
  line-height: 28px;
}

.featured__product .featured__product__container .info button.secondary__btn {
  margin-top: 20px;
}

.featured__product .featured__product__container .swiper {
  top: -80px;
  position: relative;
  width: 100%;
}

@media only screen and (max-width: 1200px) {
  .featured__product .featured__product__container {
    grid-template-columns: 1fr;
  }
}
</style>
