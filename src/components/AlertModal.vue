<template>
  <div>
    <OverlayComVue :isActive="isShowAlerModal" @onclick="closemodal" />
    <div class="alert__modal" :class="{ active: isShowAlerModal }">
      <AlertIcon class="icon" width="60" />
      <div class="alert__title">You must be logged in</div>
      <div class="sub__title">
        In order to be able to add products to your cart, you must be logged in
      </div>
      <button class="primary__btn" @click="handleLoginClick">Login</button>
    </div>
  </div>
</template>

<script>
import OverlayComVue from "./OverlayCom.vue";
import AlertIcon from "@/assets/icons/alert.svg";
import { mapState } from "vuex";
export default {
  components: {
    OverlayComVue,
    AlertIcon,
  },
  methods: {
    closemodal() {
      this.$store.dispatch("changeShowAlertModal", false);
    },
    handleLoginClick() {
      this.closemodal();
      this.$store.dispatch("changeShowLogin", true);
    },
  },
  computed: mapState(["isShowAlerModal"]),
};
</script>

<style scoped>
.alert__modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 11;
  display: none;
  padding: 40px;
  max-width: 500px;
}

.alert__modal.active {
  display: flex;
}

.alert__modal .icon {
  stroke: black;
}

.alert__modal .alert__title {
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
}

.alert__modal .sub__title {
  margin-top: 20px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--textColor);
}

.alert__modal .primary__btn {
  margin-top: 30px;
  background: black;
  color: white;
  min-width: 120px;
}
</style>
