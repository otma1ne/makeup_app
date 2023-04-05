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
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'shop' }">Makeup</router-link></li>
          <li><router-link :to="{ name: 'shop' }">Skincare</router-link></li>
          <li><router-link :to="{ name: 'shop' }">Fragrance</router-link></li>
          <li><router-link :to="{ name: 'shop' }">Body</router-link></li>
        </ul>
        <div class="icons">
          <searchIcon class="search__icon" @click="showSearch(true)" />
          <userIcon
            class="user__icon"
            @click="showLogin()"
            v-if="!getUserInfo.isLoggedin"
          />
          <div class="cart__icon__container" @click="showCart(true)">
            <cartIcon class="bag__icon" />
            <div class="count">{{ getCartLength }}</div>
          </div>
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
    showLogin() {
      this.$store.dispatch("changeShowLogin", true);
    },
  },
  computed: {
    getUserInfo() {
      return this.$store.getters.user;
    },
    getCartLength() {
      return this.$store.getters.cartLength;
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

nav .container .icons .cart__icon__container {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

nav .container .icons .cart__icon__container .count {
  position: absolute;
  bottom: -5px;
  left: -5px;
  background: red;
  color: white;
  width: 16px;
  height: 16px;
  font-size: 10px;
  font-weight: 500;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
