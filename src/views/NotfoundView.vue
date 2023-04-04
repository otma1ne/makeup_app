<template>
  <section class="notfound">
    <div class="max__width">
      <div class="notfound__container">
        <div class="title">Oops!</div>
        <div class="sub__title">404 Page not found</div>
        <div class="text">
          This page could'nt be found! Back to homepage if you like. Please use
          search for help!
        </div>
        <button class="primary__btn" @click="navigateToHome">
          Back to home
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    navigateToHome() {
      router.push({ name: "home" });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.notfound {
  margin-top: 104px;
  height: calc(100vh - 104px);
  background: url(@/assets/images/error_background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
}

.notfound .notfound__container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.notfound .notfound__container .title {
  font-size: 62px;
  font-weight: 500;
}

.notfound .notfound__container .sub__title {
  font-size: 24px;
  font-weight: 500;
}

.notfound .notfound__container .text {
  margin-top: 20px;
  font-size: 14px;
  max-width: 500px;
  color: var(--textColor);
}

.notfound .notfound__container .primary__btn {
  margin-top: 40px;
}

.notfound .notfound__container .primary__btn:hover {
  background: black;
}
</style>
