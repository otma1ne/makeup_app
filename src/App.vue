<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
     -->
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --primaryColor: #f4a678;
  --textColor: #555;
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
  padding: 10px 24px;
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
  padding: 10px 24px;
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
}
</style>
