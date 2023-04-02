<template>
  <div>
    <OverlayComVue :isActive="isShowSearch" @onclick="closeSearch" />
    <div class="search" :class="{ active: isShowSearch }">
      <div class="max__width">
        <div class="inputs__container">
          <input type="text" placeholder="Search for the products" />
          <button class="primary__btn">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OverlayComVue from "./OverlayCom.vue";
export default {
  components: {
    OverlayComVue,
  },
  props: {
    isShowSearch: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeSearch() {
      this.$emit("closeSearch");
    },
  },
};
</script>

<style>
.search {
  position: fixed;
  left: 0;
  top: -100%;
  padding: 80px 0;
  width: 100%;
  max-height: 65vh;
  background: white;
  transition: 0.3s ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 11;
}

.search.active {
  top: 0;
}

.search .inputs__container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search .inputs__container input[type="text"] {
  width: 100%;
}
</style>
