<template>
  <section class="brand">
    <div class="max__width">
      <swiper-container slides-per-view="7" class="swiper" id="brands__swiper">
        <swiper-slide v-for="brand in brands" :key="brand" class="swiper__item">
          <div class="img__container">
            <img :src="require('@/assets/images/' + brand + '')" alt="Brand" />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        "logo-brand_1.png",
        "logo-brand_2.png",
        "logo-brand_3.png",
        "logo-brand_4.png",
        "logo-brand_5.png",
        "logo-brand_6.png",
        "logo-brand_7.png",
        "logo-brand_8.png",
        "logo-brand_9.png",
      ],
    };
  },
  mounted() {
    const swiperEl = document.querySelector("#brands__swiper");

    const swiperParams = {
      slidesPerView: 1,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 7,
        },
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  },
};
</script>

<style scoped>
.brand {
  padding: 60px 0;
}

.brand .swiper .swiper__item .img__container {
  padding-top: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.brand .swiper .swiper__item img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  max-width: 80px;
  opacity: 0.5;
  transition: 0.3s ease-in-out;
}

.brand .swiper .swiper__item:hover img {
  opacity: 1;
}
</style>
