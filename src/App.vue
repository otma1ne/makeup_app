<template>
  <div id="app">
    <NavBar />
    <LoginModalVue />
    <RegisterModal />
    <ProductModal />
    <router-view />
    <FooterSection />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";
import LoginModalVue from "./components/LoginModal.vue";
import RegisterModal from "./components/RegisterModal.vue";
import ProductModal from "./components/ProductModal.vue";

export default {
  components: {
    NavBar,
    FooterSection,
    LoginModalVue,
    RegisterModal,
    ProductModal,
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --primaryColor: #f4a678;
  --textColor: #555;
}

::-moz-selection {
  color: white;
  background: var(--primaryColor);
}

::selection {
  color: white;
  background: var(--primaryColor);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Prompt", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: none;
  color: unset;
}

.max__width {
  padding: 0 160px;
  width: 100%;
  height: 100%;
}

/* scroll bar style */

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: white;
}

::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 8px;
}

/* Global styles */

.primary__btn {
  position: relative;
  padding: 8px 24px;
  border: 2px solid black;
  text-transform: uppercase;
  background: transparent;
  width: max-content;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s ease-in-out;
}

.secondary__btn {
  position: relative;
  padding: 8px 24px;
  border: 2px solid white;
  color: white;
  text-transform: uppercase;
  background: transparent;
  width: max-content;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s ease-in-out;
}

.primary__btn::after,
.secondary__btn::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  left: 0;
  bottom: -100%;
  transition: 0.2s ease-in-out;
  z-index: -1;
}

.primary__btn::after {
  background: black;
}

.primary__btn:hover {
  color: white;
}

.secondary__btn::after {
  background: white;
}

.secondary__btn:hover {
  color: black;
}

.primary__btn:hover:after,
.secondary__btn:hover:after {
  bottom: 0;
}

input[type="text"] {
  padding: 10px 24px;
  transition: 0.3s ease-in-out;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="number"]:focus {
  border: 2px solid black;
}

input[type="checkbox"] {
  accent-color: black;
}

select {
  position: relative;
  padding: 10px 60px 10px 10px;
  color: var(--textColor);
  -webkit-appearance: none;
  appearance: none;
  border: 1px solid var(--textColor);
}

select {
  background-image: url(@/assets/images/chevron\ down.png);
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) center;
}

.input__labled {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input__labled label {
  font-size: 14px;
}

.input__labled .error__message {
  font-size: 12px;
  color: red;
  display: none;
}

.input__labled.error .error__message {
  display: block;
}

.input__labled.error input {
  border: 1px solid red;
}

.input__labled input {
  transition: 0.3s ease-in-out;
  padding: 6px 16px;
}
/* Responsive styles */

@media only screen and (max-width: 1200px) {
  .max__width {
    padding: 0 100px;
  }
}

@media only screen and (max-width: 992px) {
  .max__width {
    padding: 0 80px;
  }
}

@media only screen and (max-width: 768px) {
  .max__width {
    padding: 0 40px;
  }
}

@media only screen and (max-width: 500px) {
  .max__width {
    padding: 0 20px;
  }
}
</style>
