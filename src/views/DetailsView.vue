<template>
  <section class="details">
    <div class="breadcrumb">
      <div class="max__width">
        <ul>
          <li>Home <chevronIcon width="18" height="18" fill="f4f4f4" /></li>
          <li>Shop <chevronIcon width="18" height="18" fill="f4f4f4" /></li>
          <li>
            Categories <chevronIcon width="18" height="18" fill="f4f4f4" />
          </li>
          <li>Product <chevronIcon width="18" height="18" fill="f4f4f4" /></li>
        </ul>
      </div>
    </div>
    <div class="max__width">
      <div class="container">
        <div class="imgs__container">
          <div class="swiper__container">
            <div class="imgs__control">
              <img
                v-for="(image, index) in product['images']"
                :key="index"
                :src="require('@/assets/images/' + image)"
                :class="{ active: currentIndex === index }"
                @click="handleImageClick(index)"
                alt="product"
              />
            </div>
            <swiper-container
              class="swiper"
              id="imgs__swiper"
              allow-touch-move="false"
            >
              <swiper-slide
                v-for="(image, index) in product['images']"
                :key="index"
              >
                <img :src="require('@/assets/images/' + image)" alt="product" />
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
        <div class="details__container">
          <div class="product__name">{{ product.name }}</div>
          <AwesomeVueStarRating
            :star="3"
            :hasresults="false"
            :hasdescription="false"
            :starsize="'xs'"
            :disabled="true"
          />
          <div class="product__description">{{ product.description }}</div>
          <div class="product__price">${{ product.price }}</div>
          <div class="product__colors">
            <div class="title">Colors</div>
            <div class="colors">
              <div
                class="color"
                v-for="color in product['colors']"
                :key="color"
                :style="{ background: color }"
              ></div>
            </div>
          </div>
          <div class="product__sizes">
            <div class="title">Sizes</div>
            <div class="sizes">
              <div class="size" v-for="size in product['sizes']" :key="size">
                {{ size }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chevronIcon from "@/assets/icons/chevron right 1.svg";
import AwesomeVueStarRating from "awesome-vue-star-rating";
let swiperEl = "";
export default {
  components: {
    chevronIcon,
    AwesomeVueStarRating,
  },
  data() {
    return {
      product: {
        name: "Practical Granite Bottle",
        description:
          "Aut omnis modi tempore doloribus repellendus quidem est. Qui quia velit id repellendus eum sed officia. Officiis accusantium in veniam nostrum minus consequatur.",
        price: 125.95,
        colors: ["#f4d7b8", "#daa570", "#c6966b", "#976c48"],
        sizes: ["35ml", "50ml", "100ml"],
        images: ["26_1.jpg", "26_2.jpg", "26_3.jpg", "26_4.jpg"],
      },
      currentIndex: 0,
    };
  },
  methods: {
    handleImageClick(index) {
      swiperEl.swiper.slideTo(index);
      this.currentIndex = index;
    },
  },
  mounted() {
    swiperEl = document.querySelector("#imgs__swiper");
  },
};
</script>

<style scoped>
.details {
  margin-top: 104px;
}

.details .breadcrumb {
  padding: 25px 0;
  background: #f4f4f4;
}

.details .breadcrumb ul {
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 10px;
}

.details .breadcrumb ul li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.details .breadcrumb ul li:last-child svg {
  display: none;
}

.details .container {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.details .container .imgs__container {
  position: relative;
  padding-top: 80%;
}

.details .container .imgs__container .swiper__container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 10px;
}

.details .container .imgs__container .swiper__container .imgs__control {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.details .container .imgs__container .swiper__container .imgs__control img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
}

.details
  .container
  .imgs__container
  .swiper__container
  .imgs__control
  img.active {
  border: 2px solid var(--primaryColor);
}

.details .container .imgs__container .swiper__container .swiper {
  width: 100%;
}

.details .container .imgs__container .swiper__container .swiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.details .container .details__container {
  padding: 0 0 0 40px;
}

.details .container .details__container .product__name {
  font-size: 28px;
  font-weight: 500;
}

.details .container .details__container .product__description {
  margin-top: 10px;
  font-size: 15px;
  line-height: 28px;
  color: var(--textColor);
}

.details .container .details__container .product__price {
  margin-top: 15px;
  font-size: 22px;
  font-weight: 600;
}

.details .container .details__container .product__colors,
.details .container .details__container .product__sizes {
  margin-top: 20px;
  font-size: 14px;
  color: var(--textColor);
  font-weight: 500;
}

.details .container .details__container .product__colors .colors,
.details .container .details__container .product__sizes .sizes {
  display: flex;
  gap: 10px;
}

.details .container .details__container .product__colors .colors .color {
  margin-top: 15px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #f4f4f4;
  cursor: pointer;
}

.details .container .details__container .product__sizes .sizes .size {
  margin-top: 15px;
  font-size: 12px;
  color: var(--textColor);
  padding: 8px 12px;
  border: 1px solid gray;
}
</style>

<style>
.rating .list .star:not(.active) {
  color: #e1e1e1;
}
.rating .list:hover .star:not(.active) {
  color: #e1e1e1;
}
</style>
