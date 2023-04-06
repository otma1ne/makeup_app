<template>
  <section class="details" :class="{ onsale: product.onsale }">
    <div class="breadcrumb">
      <div class="max__width">
        <ul>
          <li>Home <chevronIcon width="18" height="18" fill="f4f4f4" /></li>
          <li>Shop <chevronIcon width="18" height="18" fill="f4f4f4" /></li>
          <li>
            {{ product.category }}
            <chevronIcon width="18" height="18" fill="f4f4f4" />
          </li>
          <li>
            {{ product.name }}
            <chevronIcon width="18" height="18" fill="f4f4f4" />
          </li>
        </ul>
      </div>
    </div>
    <div class="max__width" v-if="product && !isloading">
      <div class="container">
        <div class="imgs__container">
          <div class="sale">Sale !</div>
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
            :star="product.rating"
            :hasresults="false"
            :hasdescription="false"
            :starsize="'xs'"
            :disabled="true"
          />
          <div class="product__description">{{ product.description }}</div>
          <div class="product__price">
            <div class="discount__price">$9.99</div>
            <div class="init__price">${{ product.price }}</div>
          </div>
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
          <div class="quantity">
            <div class="title">Quantity</div>
            <div class="controls">
              <button @click="handleMinesQuantityClick">-</button>
              <input type="text" v-model="quantity" readonly />
              <button @click="handlePlusQuantityClick">+</button>
            </div>
          </div>
          <button class="primary__btn" @click="handleAddToCart(product._id)">
            Add To Cart
          </button>
        </div>
      </div>
      <div class="reviews">
        <div class="title">Reviews</div>
        <div class="reviews__form">
          <div class="reviews__container">
            <div class="review">
              <div class="img__container">
                <img
                  src="@/assets/images/Profile_avatar_placeholder_large.png"
                  alt="profile_avatar"
                />
              </div>
              <div class="content">
                <div class="rating">
                  <AwesomeVueStarRating
                    :star="3"
                    :hasresults="false"
                    :hasdescription="false"
                    :starsize="'xs'"
                    :disabled="true"
                  />
                </div>
                <div class="username__date">
                  Othman01, <span>24May2023</span>
                </div>
                <div class="review__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  modi vero sint veritatis eveniet reprehenderit hic doloremque
                  rerum molestiae distinctio.
                </div>
              </div>
            </div>
            <div class="review">
              <div class="img__container">
                <img
                  src="@/assets/images/Profile_avatar_placeholder_large.png"
                  alt="profile_avatar"
                />
              </div>
              <div class="content">
                <div class="rating">
                  <AwesomeVueStarRating
                    :star="3"
                    :hasresults="false"
                    :hasdescription="false"
                    :starsize="'xs'"
                    :disabled="true"
                  />
                </div>
                <div class="username__date">
                  Othman01, <span>24May2023</span>
                </div>
                <div class="review__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  modi vero sint veritatis eveniet reprehenderit hic doloremque
                  rerum molestiae distinctio.
                </div>
              </div>
            </div>
          </div>
          <form @submit="addReview">
            <div class="input__labled">
              <div class="label">Your rating</div>
              <AwesomeVueStarRating
                :star="1"
                :hasresults="false"
                :hasdescription="false"
                :starsize="'xs'"
              />
            </div>
            <div class="input__labled">
              <div class="label">You review</div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                placeholder="Enter the review"
              ></textarea>
            </div>
            <div class="input__flex">
              <div class="input__labled">
                <div class="label">Username</div>
                <input type="text" placeholder="Enter the username" />
              </div>
              <div class="input__labled">
                <div class="label">Email</div>
                <input type="text" placeholder="Enter the email" />
              </div>
            </div>
            <button class="primary__btn">Submit</button>
          </form>
        </div>
      </div>
      <div class="related__products" v-if="relatedProducts.length > 0">
        <div class="title">Related Products</div>
        <div class="products">
          <ProductCard
            v-for="product in relatedProducts"
            :key="product._id"
            :product="product"
          />
        </div>
      </div>
    </div>
    <div class="max__width" v-if="isloading">
      <div class="loader__container">
        <img src="@/assets/icons/squares_loader.gif" alt="loader" />
      </div>
    </div>
  </section>
</template>

<script>
import chevronIcon from "@/assets/icons/chevron right 1.svg";
import AwesomeVueStarRating from "awesome-vue-star-rating";
import ProductCard from "@/components/ProductCard.vue";
import ProductService from "@/services/ProductService";
let swiperEl = "";
export default {
  components: {
    chevronIcon,
    AwesomeVueStarRating,
    ProductCard,
  },
  data() {
    return {
      isloading: true,
      product: {},
      relatedProducts: [],
      currentIndex: 0,
      quantity: 1,
    };
  },
  methods: {
    handleImageClick(index) {
      swiperEl = document.querySelector("#imgs__swiper");
      swiperEl.swiper.slideTo(index);
      this.currentIndex = index;
    },
    handlePlusQuantityClick() {
      if (this.quantity < 10) this.quantity += 1;
    },
    handleMinesQuantityClick() {
      if (this.quantity > 1) this.quantity -= 1;
    },
    handleAddToCart(productId) {
      if (this.getUser.isLoggedin) {
        const payload = {
          token: localStorage.getItem("token"),
          userId: localStorage.getItem("user_id"),
          productId: productId,
          quantity: this.quantity,
        };
        this.$store.dispatch("addToCart", payload);
      } else {
        this.$store.dispatch("changeShowAlertModal", true);
      }
    },
    addReview(e) {
      e.preventDefault();
    },
  },
  created() {
    ProductService.getProduct(this.$route.params.id)
      .then((response) => {
        this.product = response.data.product;
        this.relatedProducts = response.data.relatedProducts;
        this.isloading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isloading = false;
      });
  },
  computed: {
    getUser() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style scoped>
.details {
  margin: 104px 0 60px 0;
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

.details .loader__container {
  width: 100%;
  height: calc(100vh - 104px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.details .loader__container img {
  width: 50px;
}

.details .sale {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--primaryColor);
  z-index: 2;
  color: white;
  font-size: 14px;
  padding: 2px 12px;
  display: none;
}

.details.onsale .sale {
  display: block;
}

.details .container {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.details .container .imgs__container {
  position: relative;
  padding-top: 90%;
}

.details .container .imgs__container .swiper__container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-areas: "imgs__control swiper";
  gap: 10px;
}

.details .container .imgs__container .swiper__container .imgs__control {
  grid-area: imgs__control;
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
  grid-area: swiper;
  width: 100%;
}

.details .container .imgs__container .swiper__container .swiper img {
  background: #f4f4f4;
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
  display: flex;
  gap: 10px;
  align-items: center;
}

.details.onsale .container .details__container .product__price .init__price {
  text-decoration: line-through;
  color: var(--textColor);
  font-size: 12px;
}

.details .container .details__container .product__price .discount__price {
  display: none;
}
.details.onsale
  .container
  .details__container
  .product__price
  .discount__price {
  display: block;
  text-decoration: solid;
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
  border: 1px solid #f1f1f1;
  cursor: pointer;
}

.details .container .details__container .quantity {
  margin-top: 20px;
  border: 1px solid #f1f1f1;
  padding-left: 20px;
  font-size: 14px;
  color: var(--textColor);
  width: max-content;
  display: flex;
  align-items: center;
  gap: 20px;
}

.details .container .details__container .quantity .controls button {
  width: 35px;
  height: 40px;
  font-size: 18px;
  background: white;
  border: none;
  border-right: 1px solid #f1f1f1;
  border-left: 1px solid #f1f1f1;
  cursor: pointer;
}
.details .container .details__container .quantity .controls input {
  width: 50px;
  height: 40px;
  border: none;
  padding: 0;
  text-align: center;
}

.details .container .details__container .primary__btn {
  margin-top: 30px;
  width: 100%;
  max-width: 200px;
}
.details .reviews {
  margin-top: 60px;
}

.details .reviews .title {
  font-size: 20px;
}

.details .reviews__form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.details .reviews__container .review {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 20px;
}

.details .reviews__container .review .img__container {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
}

.details .reviews__container .review .img__container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details .reviews__container .review .content .username__date {
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
}

.details .reviews__container .review .content .username__date span {
  font-weight: 400;
  color: var(--textColor);
  font-size: 12px;
}

.details .reviews__container .review .content .review__text {
  margin-top: 10px;
  font-size: 14px;
}

.details .reviews__form form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.details .reviews__form form .input__flex {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.details .reviews__form form .input__flex .input__labled {
  width: 100%;
}

.details .reviews__form form button.primary__btn {
  margin-top: 20px;
}
.details .related__products {
  margin-top: 100px;
}

.details .related__products .title {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
}

.details .related__products .products {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.details .related__products .products .product {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

@media only screen and (max-width: 1200px) {
  .details .container .details__container {
    padding: 0;
  }

  .details .container .imgs__container {
    padding-top: 100%;
  }
  .details .container {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(320px, auto) auto;
  }
}
@media only screen and (max-width: 1250px) {
  .details .related__products .products {
    grid-template-columns: repeat(3, 1fr);
  }

  .details .reviews__form {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 768px) {
  .details .related__products .products {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 600px) {
  .details {
    margin: 97px 0 60px 0;
  }
}

@media only screen and (max-width: 500px) {
  .details .container {
    margin-top: 60px;
  }
  .details .related__products .products {
    grid-template-columns: 1fr;
  }

  .details .container .imgs__container .swiper__container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 60px;
    grid-template-areas:
      "swiper"
      "imgs__control";
  }

  .details .container .imgs__container .swiper__container .imgs__control {
    flex-direction: row;
    gap: 10px;
  }

  .details .container .imgs__container .swiper__container .imgs__control img {
    width: 60px;
    height: 60px;
  }
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
