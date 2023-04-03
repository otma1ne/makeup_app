<template>
  <div>
    <OverlayComVue :isActive="isShowLogin" @onclick="closeLogin" />
    <div class="login__container" :class="{ active: isShowLogin }">
      <div class="title">Sign In</div>
      <div class="sub__title">Welcome back again !</div>
      <form>
        <div class="input__labled">
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div class="input__labled">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <p>Lost your password ?</p>
        </div>
        <button class="primary__btn">Login</button>
        <div class="register">
          Don't have an account ? <span @click="showRegister">register</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import OverlayComVue from "./OverlayCom.vue";
import { mapState } from "vuex";
export default {
  components: {
    OverlayComVue,
  },
  methods: {
    closeLogin() {
      this.$store.dispatch("changeShowLogin", false);
    },
    showRegister() {
      this.closeLogin();
      this.$store.dispatch("changeShowRegister", true);
    },
  },
  computed: mapState(["isShowLogin"]),
};
</script>

<style scoped>
.login__container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 30px);
  max-width: 400px;
  background: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 11;
  display: none;
  padding: 60px 30px;
}

.login__container.active {
  display: block;
}

.login__container .title {
  font-size: 28px;
  font-weight: 600;
}

.login__container .sub__title {
  font-size: 14px;
}

.login__container form {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}

.login__container .input__labled {
  margin-top: 20px;
}

.login__container .input__labled p {
  margin-top: 4px;
  font-size: 12px;
  text-align: end;
}

.login__container .register {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  color: var(--textColor);
}

.login__container .register span {
  font-weight: 500;
  color: black;
  cursor: pointer;
}

.primary__btn {
  margin-top: 30px;
  padding: 6px 12px;
  width: 100%;
  background: black;
  color: white;
}
</style>
