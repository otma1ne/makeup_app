<template>
  <section class="testimonials">
    <div class="max__width">
      <div class="sup__title">Testimonials</div>
      <div class="main__title">Customers Said</div>
      <div class="testimonials__container">
        <div class="img__container">
          <img src="@/assets/images/h1_img-3.jpg" alt="" />
        </div>
        <swiper-container class="swiper">
          <swiper-slide
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="swiper__slide"
          >
            <div class="card">
              <div class="header">
                <div class="customer__info">
                  <div class="customer__image">
                    <img
                      :src="require('@/assets/images/' + testimonial.image)"
                      alt="Customer image"
                    />
                  </div>
                  <div class="customer__details">
                    <div class="name">{{ testimonial.name }}</div>
                    <div class="job">{{ testimonial.job }}</div>
                  </div>
                </div>
              </div>
              <div class="content">
                {{ testimonial.content }}
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>

<script>
import { register } from "swiper/element/bundle";
register();
export default {
  data() {
    return {
      testimonials: [
        {
          image: "About-05.jpg",
          name: "Lisa Eldridge",
          job: "Makeup expert",
          content:
            " “I like to use this on a makeup free face, usually in the morning, then follow up with a cleanser. It's nice that this scrub isn't drying though.”",
        },
        {
          image: "About-06.jpg",
          name: "Rose Salar",
          job: "Makeup expert",
          content:
            " “Not able to tell you how happy I am with beauty. Beauty is the real deal! Man, this thing is getting better and better as I learn more about it.”",
        },
        {
          image: "3_3.jpg",
          name: "Jenny",
          job: "Makeup expert",
          content:
            " “The service was excellent. If you want real marketing that works and effective implementation - beauty center's got you covered.”",
        },
      ],
    };
  },
};
</script>

<style scoped>
.testimonials {
  margin: 60px 0;
  padding: 80px 0;
  background: url(@/assets/images/h1_bg-1.jpg);
  background-position: center;
  background-size: cover;
}

.testimonials .testimonials__container {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.testimonials .sup__title {
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.testimonials .main__title {
  text-align: center;
  margin-top: 4px;
  font-size: 36px;
  line-height: 42px;
  font-weight: 500;
}

.testimonials .testimonials__container .img__container {
  position: relative;
  height: 350px;
}

.testimonials .testimonials__container .img__container img {
  position: absolute;
  top: 0;
  left: 0;
}

.testimonials .testimonials__container .swiper {
  width: 100%;
  margin: 80px 0;
}

.testimonials .testimonials__container .swiper .swiper__slide .card {
  position: relative;
  background: white;
  padding: 40px 40px 60px 40px;
  margin-bottom: 48px;
}

.testimonials .testimonials__container .swiper .swiper__slide .card:after {
  content: "";
  background-color: #fff;
  display: block;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: -49px;
  left: 0;
  -webkit-clip-path: polygon(0 0, 0 100%, 100% 0);
  clip-path: polygon(0 0, 0 100%, 100% 0);
}

.testimonials
  .testimonials__container
  .swiper
  .header
  .customer__info
  .customer__image {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  overflow: hidden;
}

.testimonials .testimonials__container .swiper .header .customer__info {
  display: flex;
  gap: 20px;
  align-items: center;
}

.testimonials
  .testimonials__container
  .swiper
  .header
  .customer__info
  .customer__image
  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.testimonials .testimonials__container .swiper .header .customer__details {
  display: flex;
  flex-direction: column;
}

.testimonials
  .testimonials__container
  .swiper
  .header
  .customer__details
  .name {
  font-size: 15px;
  font-weight: 500;
}

.testimonials .testimonials__container .swiper .header .customer__details .job {
  font-size: 12px;
  color: var(--textColor);
}

.testimonials .testimonials__container .swiper .content {
  margin-top: 30px;
  font-size: 18px;
  line-height: 32px;
  color: var(--textColor);
}
</style>
