<template>
  <div>
    <OverlayCom :isActive="isShowCart" @onclick="closeCart" />
    <div class="side__cart" :class="{ active: isShowCart }">
      <div class="cart__header">Shoping Cart</div>
    </div>
  </div>
</template>

<script>
import OverlayCom from "./OverlayCom.vue";
export default {
  components: {
    OverlayCom,
  },
  props: {
    isShowCart: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
  },
};
</script>

<style scoped>
.side__cart {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  max-width: 300px;
  background: white;
  z-index: 11;
  transition: 0.3s ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.side__cart.active {
  right: 0;
}

.side__cart .cart__header {
  padding: 30px;
  font-size: 18px;
  border-bottom: 1px solid #eee;
}
</style>
