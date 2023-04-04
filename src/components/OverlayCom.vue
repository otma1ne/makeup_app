<template>
  <div
    class="overlay"
    :class="{ active: isActive }"
    @click="handleOverlayClick"
  ></div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleOverlayClick() {
      this.$emit("onclick");
    },
  },
};
</script>

<style scoped>
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.overlay.active {
  display: flex;
}
</style>
