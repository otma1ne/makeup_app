<template>
  <nav>
    <OverlayCom :isActive="isShowMenu" @onclick="showMenu(false)" />
    <div class="max__width">
      <div class="container">
        <menuIcon class="menu__icon" @click="showMenu(true)" />
        <router-link :to="{ name: 'home' }">
          <div class="logo">
            <logo class="logo__icon" />
          </div>
        </router-link>
        <ul class="menu" :class="{ active: isShowMenu }">
          <li>Home</li>
          <li>Makeup</li>
          <li>Skincare</li>
          <li>Fragrance</li>
          <li>Body</li>
          <li>Contact</li>
        </ul>
        <div class="icons">
          <searchIcon class="search__icon" @click="showSearch(true)" />
          <userIcon class="user__icon" />
          <cartIcon class="bag__icon" @click="showCart(true)" />
        </div>
      </div>
    </div>
    <SideCart :isShowCart="isShowCart" @closeCart="showCart(false)" />
    <SearchCom :isShowSearch="isShowSearch" @closeSearch="showSearch(false)" />
  </nav>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import userIcon from "@/assets/icons/user.svg";
import cartIcon from "@/assets/icons/shopping bag 1.svg";
import searchIcon from "@/assets/icons/search_outline.svg";
import SideCart from "./SideCart.vue";
import SearchCom from "./SearchCom.vue";
import menuIcon from "@/assets/icons/burger_menu.svg";
import OverlayCom from "./OverlayCom.vue";

export default {
  components: {
    logo,
    userIcon,
    cartIcon,
    searchIcon,
    menuIcon,
    SideCart,
    SearchCom,
    OverlayCom,
  },
  data() {
    return {
      isShowCart: false,
      isShowSearch: false,
      isShowMenu: false,
    };
  },
  methods: {
    showCart(value) {
      this.isShowCart = value;
    },
    showSearch(value) {
      this.isShowSearch = value;
    },
    showMenu(value) {
      this.isShowMenu = value;
    },
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
  display: grid;
  grid-template-columns: 140px 1fr 140px;
  align-items: center;
  justify-items: center;
}

nav .container .menu__icon {
  display: none;
  stroke: black;
  width: 16px;
  justify-self: self-start;
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
  justify-self: self-end;
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

@media only screen and (max-width: 992px) {
  nav .container .menu__icon {
    display: block;
  }

  nav .container .menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    z-index: 10;
    gap: 20px;
    max-width: 300px;
    flex-direction: column;
    background: white;
    padding: 60px 40px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: 0.3s ease-in-out;
  }

  nav .container .menu.active {
    right: 0;
  }
}

@media only screen and (max-width: 600px) {
  nav .container .icons .search__icon {
    display: none;
  }
  nav .container {
    grid-template-columns: 80px 1fr 80px;
  }
  nav .container .logo .logo__icon {
    width: 120px;
  }
  nav .container .icons {
    gap: 10px;
  }
}
</style>
