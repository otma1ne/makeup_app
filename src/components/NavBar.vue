<template>
  <nav>
    <div class="max__width">
      <div class="container">
        <div class="logo">
          <logo class="logo__icon" />
        </div>
        <ul class="menu">
          <li>Home</li>
          <li>Makeup</li>
          <li>Skincare</li>
          <li>Fragrance</li>
          <li>Body</li>
          <li>Contact</li>
        </ul>
        <div class="icons">
          <searchIcon class="search__icon" />
          <userIcon class="user__icon" />
          <cartIcon class="bag__icon" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import userIcon from "@/assets/icons/user.svg";
import cartIcon from "@/assets/icons/shopping bag 1.svg";
import searchIcon from "@/assets/icons/search_outline.svg";

export default {
  components: {
    logo,
    userIcon,
    cartIcon,
    searchIcon,
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px 0;
  z-index: 10;
  background: white;
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav .container .logo .logo__icon {
  width: 140px;
}

nav .container .menu {
  display: flex;
  gap: 40px;
}

nav .container .menu li {
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

nav .container .icons {
  display: flex;
  align-items: center;
  gap: 20px;
}

nav .container .icons svg {
  cursor: pointer;
}

nav .container .icons .user__icon {
  width: 18px;
}

nav .container .icons .bag__icon,
nav .container .icons .search__icon {
  width: 20px;
}
</style>
