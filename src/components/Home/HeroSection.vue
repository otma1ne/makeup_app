<template>
  <section class="home">
    <swiper-container
      slides-per-view="1"
      speed="300"
      effect="fade"
      autoplay="true"
      loop="true"
      @slidechangetransitionstart="onSlideChangeTransitionStart()"
      @slidechangetransitionend="onSlideChangeTransitionEnd()"
      class="swiper"
    >
      <swiper-slide class="swiper__slide">
        <div class="slide__info">
          <div class="max__width">
            <div class="container">
              <div class="sub__title" data-aos="fade-up">
                <p>Perfect Rougue</p>
              </div>
              <div class="title" data-aos="fade-up" data-aos-delay="300">
                <h1>Out & A Pout Fiery Red Lip</h1>
              </div>
              <div class="text" data-aos="fade-up" data-aos-delay="600">
                <p>
                  A little color, a pop of shimmer, and a swipe of gloss. These
                  three makeup must-haves will have you playing it low-key cute
                  on the daily.
                </p>
              </div>
              <div class="price" data-aos="fade-up" data-aos-delay="900">
                <h3><span>Price</span> $28.00</h3>
              </div>
              <button
                class="secondary__btn"
                data-aos="fade-right"
                data-aos-delay="1200"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div class="slide__img">
          <img src="@/assets/images/revslider_h1_img-1.jpg" alt="slide bg" />
        </div>
      </swiper-slide>
      <swiper-slide class="swiper__slide two">
        <div class="slide__info">
          <div class="max__width">
            <div class="container">
              <div class="sub__title" data-aos="fade-up">
                <p>So Fresh, So Good</p>
              </div>
              <div class="title" data-aos="fade-up" data-aos-delay="300">
                <h1>Out & A Pout Fiery Red Lip</h1>
              </div>
              <div class="text" data-aos="fade-up" data-aos-delay="600">
                <p>
                  A little color, a pop of shimmer, and a swipe of gloss. These
                  three makeup must-haves will have you playing it low-key cute
                  on the daily.
                </p>
              </div>
              <div class="price" data-aos="fade-up" data-aos-delay="900">
                <h3><span>Price</span> $28.00</h3>
              </div>
              <button
                class="secondary__btn"
                data-aos="fade-right"
                data-aos-delay="1200"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div class="slide__img">
          <img src="@/assets/images/revslider_h1_img-2.jpg" alt="slide bg" />
        </div>
      </swiper-slide>
      <swiper-slide class="swiper__slide three">
        <div class="slide__info">
          <div class="max__width">
            <div class="container">
              <div class="sub__title" data-aos="fade-up">
                <p>So Fresh, So Good</p>
              </div>
              <div class="title" data-aos="fade-up" data-aos-delay="300">
                <h1>Gloss Pop Face & Eye Gloss</h1>
              </div>
              <div class="text" data-aos="fade-up" data-aos-delay="600">
                <p>
                  Whether it’s on bare skin or over makeup, just swipe it on
                  anywhere you want for a fresh, dewy look.
                </p>
              </div>
              <div class="price" data-aos="fade-up" data-aos-delay="900">
                <h3><span>Price</span> $28.00</h3>
              </div>
              <button
                class="secondary__btn"
                data-aos="fade-right"
                data-aos-delay="1200"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div class="slide__img">
          <img src="@/assets/images/revslider_h1_img-3.jpg" alt="slide bg" />
        </div>
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { register } from "swiper/element/bundle";
import $ from "jquery";
register();
AOS.init();

export default {
  name: "HomeView",
  methods: {
    onSlideChangeTransitionStart() {
      $(".home .swiper .sub__title").hide(0);
      $(".home .swiper .sub__title")
        .removeClass("aos-init")
        .removeClass("aos-animate");
      $(".home .swiper .title").hide(0);
      $(".home .swiper .title")
        .removeClass("aos-init")
        .removeClass("aos-animate");
      $(".home .swiper .text").hide(0);
      $(".home .swiper .text")
        .removeClass("aos-init")
        .removeClass("aos-animate");
      $(".home .swiper .price").hide(0);
      $(".home .swiper .price")
        .removeClass("aos-init")
        .removeClass("aos-animate");
      $(".home .swiper  button").hide(0);
      $(".home .swiper  button")
        .removeClass("aos-init")
        .removeClass("aos-animate");
    },
    onSlideChangeTransitionEnd() {
      $(".home .swiper .sub__title").show(0);
      $(".home .swiper .title").show(0);
      $(".home .swiper .text").show(0);
      $(".home .swiper .price").show(0);
      $(".home .swiper  button").show(0);
      AOS.init();
    },
  },
};
</script>
<style scoped>
.home {
  margin-top: 104px;
}
.home .swiper {
  height: calc(100vh - 104px);
}
.home .swiper .swiper__slide {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.home .swiper .swiper__slide .slide__info {
  background: #896a52;
  color: white;
}

.home .swiper .swiper__slide.two .slide__info {
  background: #705458;
  color: white;
}

.home .swiper .swiper__slide.three .slide__info {
  background: #bf815b;
  color: white;
}

.home .swiper .swiper__slide .slide__info .container {
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home .swiper .swiper__slide .slide__info .container .sub__title {
  font-size: 16px;
}
.home .swiper .swiper__slide .slide__info .container .title {
  margin-top: 8px;
  font-size: 36px;
  line-height: 64px;
  letter-spacing: 3px;
}

.home .swiper .swiper__slide .slide__info .container .text {
  margin-top: 30px;
  font-size: 14px;
}

.home .swiper .swiper__slide .slide__info .container .price h3 {
  margin-top: 20px;
  font-size: 22px;
  font-weight: 600;
}

.home .swiper .swiper__slide .slide__info .container .price span {
  font-weight: 400;
  font-size: 18px;
}

.home .swiper .swiper__slide .slide__info .container .secondary__btn {
  margin-top: 30px;
}

.home .swiper .swiper__slide .slide__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
