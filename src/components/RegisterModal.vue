<template>
  <div>
    <OverlayComVue :isActive="isShowRegister" @onclick="closeRegister" />
    <div class="register__container" :class="{ active: isShowRegister }">
      <div class="title">Register</div>
      <div class="sub__title">Create a new account</div>
      <form>
        <div class="input__labled">
          <label for="lastname">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
        </div>
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
        </div>
        <button class="primary__btn">Register</button>
        <div class="register">
          Already have an ccount ? <span @click="showLogin">login</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OverlayComVue from "./OverlayCom.vue";
export default {
  components: {
    OverlayComVue,
  },
  methods: {
    closeRegister() {
      this.$store.dispatch("changeShowRegister", false);
    },
    showLogin() {
      this.closeRegister();
      this.$store.dispatch("changeShowLogin", true);
    },
  },
  computed: mapState(["isShowRegister"]),
};
</script>

<style scoped>
.register__container {
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

.register__container.active {
  display: block;
}
.register__container .title {
  font-size: 28px;
  font-weight: 600;
}

.register__container .sub__title {
  font-size: 14px;
}

.register__container form {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}

.register__container form input {
  width: 100%;
}

.register__container .input__labled {
  margin-top: 20px;
}

.register__container .register {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  color: var(--textColor);
}

.register__container .register span {
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
