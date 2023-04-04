<template>
  <div>
    <OverlayComVue :isActive="isShowRegister" @onclick="closeRegister" />
    <div class="register__container" :class="{ active: isShowRegister }">
      <div class="title">Register</div>
      <div class="sub__title">Create a new account</div>
      <form @submit="register">
        <div class="input__labled" :class="{ error: errors.usernameError }">
          <label for="lastname">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            v-model="username"
            @keypress="errors.usernameError = false"
            placeholder="Enter your username"
          />
          <div class="error__message">Please enter the username</div>
        </div>
        <div
          class="input__labled"
          :class="{ error: errors.emailError || errors.emailInvalidError }"
        >
          <label for="email__input">Email</label>
          <input
            type="text"
            name="email"
            id="email__input"
            v-model="email"
            @keypress="
              () => {
                errors.emailError = false;
                errors.emailInvalidError = false;
              }
            "
            placeholder="Enter your email"
          />
          <div class="error__message">
            {{
              errors.emailInvalidError
                ? "Please enter a valid email"
                : "Please enter the Email"
            }}
          </div>
        </div>
        <div class="input__labled" :class="{ error: errors.passwordError }">
          <label for="password__input">Password</label>
          <input
            type="password"
            name="password"
            id="password__input"
            v-model="password"
            @keypress="errors.passwordError = false"
            placeholder="Enter your password"
          />
          <div class="error__message">Please enter the Password</div>
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
import UserService from "@/services/UserService";
import { mapState } from "vuex";
import OverlayComVue from "./OverlayCom.vue";
export default {
  components: {
    OverlayComVue,
  },
  data() {
    return {
      errors: {
        usernameError: false,
        emailError: false,
        emailInvalidError: false,
        passwordError: false,
      },
      username: null,
      email: null,
      password: null,
    };
  },
  methods: {
    closeRegister() {
      this.$store.dispatch("changeShowRegister", false);
    },
    showLogin() {
      this.closeRegister();
      this.$store.dispatch("changeShowLogin", true);
    },
    resetForm() {
      this.username = null;
      this.email = null;
      this.password = null;
    },
    checkForm() {
      this.errors = [];

      if (!this.username) {
        this.errors = { ...this.errors, usernameError: true };
      }
      if (!this.email) {
        this.errors = { ...this.errors, emailError: true };
      } else if (!this.validEmail(this.email)) {
        this.errors = { ...this.errors, emailInvalidError: true };
      }
      if (!this.password) {
        this.errors = { ...this.errors, passwordError: true };
      }

      if (
        !this.errors.emailError &&
        !this.errors.emailInvalidError &&
        !this.errors.usernameError &&
        !this.errors.passwordError
      ) {
        return true;
      }

      return false;
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    register(e) {
      e.preventDefault();
      if (this.checkForm()) {
        UserService.register({
          username: this.username,
          email: this.email,
          password: this.password,
        })
          .then((response) => {
            if (response.status === 201) {
              this.resetForm();
              this.showLogin();
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
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
  padding: 40px 30px;
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
