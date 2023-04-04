<template>
  <div>
    <HeroSectionVue />
    <AboutSectionVue />
    <FeaturedProductSectionVue />
    <BestSellersVue />
    <CategorySectionVue />
    <BrandSectionVue />
    <TestimonialsSectionVue />
  </div>
</template>
<script>
import HeroSectionVue from "@/components/Home/HeroSection.vue";
import AboutSectionVue from "@/components/Home/AboutSection.vue";
import FeaturedProductSectionVue from "@/components/Home/FeaturedProductSection.vue";
import BestSellersVue from "@/components/Home/BestSellers.vue";
import CategorySectionVue from "@/components/Home/CategorySection.vue";
import BrandSectionVue from "@/components/Home/BrandSection.vue";
import TestimonialsSectionVue from "@/components/Home/TestimonialsSection.vue";

/* eslint-disable vue/no-unused-components */
export default {
  components: {
    HeroSectionVue,
    AboutSectionVue,
    FeaturedProductSectionVue,
    BestSellersVue,
    CategorySectionVue,
    BrandSectionVue,
    TestimonialsSectionVue,
  },
};
</script>

<style></style>
