<template>
  <div class="user__info" :class="{ active: isActive }">
    <div class="info">
      <div class="avatar">
        <img
          src="@/assets/images/Profile_avatar_placeholder_large.png"
          alt=""
        />
      </div>
      <div class="username__email">
        <div class="username">{{ getUserInfo.username }}</div>
        <div class="email">{{ getUserInfo.email }}</div>
      </div>
    </div>
    <ul class="menu">
      <li><UserIcon />Profile</li>
      <li><SettingsIcon />Settings</li>
      <li class="logout" @click="handleLogoutClick"><LogoutIcon />Logout</li>
    </ul>
  </div>
</template>

<script>
import UserIcon from "@/assets/icons/user_outline.svg";
import SettingsIcon from "@/assets/icons/gear 1.svg";
import LogoutIcon from "@/assets/icons/logout 1.svg";
import UserService from "@/services/UserService";
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleLogoutClick() {
      UserService.logout(localStorage.getItem("token"))
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem("user_id");
            localStorage.removeItem("isLoggedin");
            localStorage.removeItem("token");
            this.$store.dispatch("changeUserInfo", {
              id: "",
              email: "",
              isLoggedin: false,
            });
            this.$store.dispatch("clearCart");
            this.$emit("closemodal");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    UserIcon,
    SettingsIcon,
    LogoutIcon,
  },
  computed: {
    getUserInfo() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style scoped>
.user__info {
  position: absolute;
  top: 30px;
  right: 0px;
  background: white;
  border-radius: 2px;
  z-index: 11;
  display: none;
}

.user__info.active {
  display: block;
}

.user__info .info {
  display: flex;
  gap: 10px;
  padding: 20px 15px;
  border-bottom: 1px solid #f1f1f1;
}

.user__info .info .avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
}

.user__info .info .avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.user__info .info .username__email {
  font-size: 14px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.user__info .info .username__email .username {
  font-weight: 500;
}

.user__info .info .username__email .email {
  font-size: 12px;
  color: var(--textColor);
}

.user__info .menu {
  padding: 10px 0;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}

.user__info .menu li {
  padding: 6px 15px;
  cursor: pointer;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
}

.user__info .menu li:not(.logout) svg {
  stroke: var(--textColor);
  width: 18px;
  padding-bottom: 1px;
}

.user__info .menu li:hover {
  background: #f1f1f1;
}

.user__info .menu li.logout {
  color: red;
}

.user__info .menu li.logout svg {
  fill: red;
  width: 18px;
  padding-bottom: 1px;
}
</style>
