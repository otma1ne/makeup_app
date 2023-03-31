<template>
  <div>
    <HeroSectionVue />
    <AboutSectionVue />
  </div>
</template>

<script>
import HeroSectionVue from "@/components/Home/HeroSection.vue";
import AboutSectionVue from "@/components/Home/AboutSection.vue";

export default {
  components: {
    HeroSectionVue,
    AboutSectionVue,
  },
};
</script>

<style></style>
