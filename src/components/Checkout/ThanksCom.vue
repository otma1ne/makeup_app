<template>
  <div class="thanks">
    <happyCartIcon />
    <div class="title">Thank you for shopping with us</div>
    <div class="sub__title">
      You will recive a email soon regarding to your payment
    </div>
    <button class="primary__btn" @click="navigateToHome">Back to shop</button>
  </div>
</template>

<script>
import happyCartIcon from "@/assets/icons/happy.svg";
import router from "@/router";
export default {
  components: {
    happyCartIcon,
  },
  methods: {
    navigateToHome() {
      router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.thanks {
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 6px;
}

.thanks svg {
  stroke: var(--primaryColor);
  width: 120px;
}

.thanks .title {
  margin-top: 20px;
  font-size: 28px;
}

.thanks .sub__title {
  font-size: 14px;
  color: var(--textColor);
}

.thanks button {
  margin-top: 30px;
}

@media screen and (max-width: 600px) {
  .thanks .title {
    font-size: 20px;
  }
}
</style>
