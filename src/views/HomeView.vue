<template>
  <div>
    <HeroSectionVue />
    <AboutSectionVue />
    <FeaturedProductSectionVue />
    <BestSellersVue />
    <CategorySectionVue />
    <BrandSectionVue />
    <TestimonialsSectionVue />
    <FooterSection />
  </div>
</template>

<script>
import HeroSectionVue from "@/components/Home/HeroSection.vue";
import AboutSectionVue from "@/components/Home/AboutSection.vue";
import FeaturedProductSectionVue from "@/components/Home/FeaturedProductSection.vue";
import BestSellersVue from "@/components/Home/BestSellers.vue";
import CategorySectionVue from "@/components/Home/CategorySection.vue";
import FooterSection from "@/components/Home/FooterSection.vue";
import BrandSectionVue from "@/components/Home/BrandSection.vue";
import TestimonialsSectionVue from "@/components/Home/TestimonialsSection.vue";

export default {
  components: {
    HeroSectionVue,
    AboutSectionVue,
    FeaturedProductSectionVue,
    BestSellersVue,
    FooterSection,
    CategorySectionVue,
    BrandSectionVue,
    TestimonialsSectionVue,
  },
};
</script>

<style></style>
