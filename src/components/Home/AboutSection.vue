<template>
  <section class="about">
    <div class="max__width">
      <div class="about__container">
        <div class="imgs__container">
          <img
            src="@/assets/images/h1_decor-2.png"
            class="deco__two"
            alt="decoration"
          />
          <img
            src="@/assets/images/h1_img-1.jpg"
            class="img__one bordred"
            alt="about1"
          />
          <img
            src="@/assets/images/h1_img-2.jpg"
            class="img__two bordred"
            alt="about2"
          />
          <img
            src="@/assets/images/h1_decor-1.png"
            class="deco__one"
            alt="decoration"
          />
        </div>
        <div class="text__container">
          <div class="sup__title">About Us</div>
          <div class="main__title">Bring Your Natural Beauty</div>
          <div class="sub__title">We Belong to Something Beautiful</div>
          <div class="text">
            Our company announced a new tagline and manifesto, to reinforce our
            dedication to fostering belonging among all clients and employees
            and to publicly strive for a more inclusive vision for retail in the
            Americas.
          </div>
          <ul class="menu">
            <li><carbsIcon /> Natural Skincare</li>
            <li><diamondIcon />Evolve Heathier</li>
            <li><worldIcon />Eco-Friendly</li>
            <li><humidityIcon />Hypoallergenic</li>
          </ul>
          <button class="primary__btn" @click="navigateToShop">
            Discover Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import humidityIcon from "@/assets/icons/humidity.svg";
import worldIcon from "@/assets/icons/world_2.svg";
import carbsIcon from "@/assets/icons/Carbs.svg";
import diamondIcon from "@/assets/icons/Dimond_alt_fill.svg";
import router from "@/router";
export default {
  components: {
    worldIcon,
    humidityIcon,
    carbsIcon,
    diamondIcon,
  },
  methods: {
    navigateToShop() {
      router.push({ name: "shop" });
    },
  },
};
</script>

<style scoped>
.about {
  padding: 80px 0;
  background: url(@/assets/images/h1_shape-1.png);
  background-repeat: no-repeat;
  background-position: top left;
}

.about .about__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  justify-items: center;
}

.about .about__container .imgs__container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 600px;
}

.about .about__container .imgs__container img {
  position: absolute;
}

.about .about__container .imgs__container img.bordred {
  border: 10px solid white;
}
.about .about__container .imgs__container .img__one {
  top: 0;
  left: 0;
  height: 90%;
}

.about .about__container .imgs__container .img__two {
  height: 60%;
  bottom: 0;
  right: 0;
}

.about .about__container .imgs__container .deco__one {
  top: 0;
  left: -40px;
}

.about .about__container .text__container {
  padding-bottom: 140px;
}

.about .about__container .text__container .sup__title {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.about .about__container .text__container .main__title {
  margin-top: 4px;
  font-size: 36px;
  line-height: 42px;
  font-weight: 500;
}

.about .about__container .text__container .sub__title {
  margin-top: 6px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  box-shadow: 0 -7px 0 0 var(--primaryColor) inset;
  width: max-content;
}

.about .about__container .text__container .text {
  margin-top: 30px;
  color: var(--textColor);
  line-height: 28px;
}

.about .about__container .text__container .menu {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.about .about__container .text__container .menu li {
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 20px;
}

/* .about .about__container .text__container .menu li svg {
  stroke: var(--primaryColor);
} */

.about .about__container .text__container button.primary__btn {
  margin-top: 30px;
}

@media only screen and (max-width: 1400px) {
  .about .about__container .imgs__container .img__one {
    height: 70%;
  }

  .about .about__container .imgs__container .img__two {
    height: 40%;
  }
}

@media only screen and (max-width: 992px) {
  .about .about__container {
    grid-template-columns: 1fr;
    grid-template-rows: 60vh auto;
  }

  .about .about__container .text__container {
    padding-bottom: 0px;
  }

  .about .about__container .imgs__container {
    width: 100%;
    max-width: 400px;
  }

  .about .about__container .imgs__container .img__one {
    height: 90%;
  }

  .about .about__container .imgs__container .img__two {
    height: 50%;
  }
}

@media only screen and (max-width: 500px) {
  .about .about__container .imgs__container {
    width: 100%;
    max-width: 100%;
  }

  .about .about__container .imgs__container .img__one {
    height: 80%;
  }

  .about .about__container .imgs__container .img__two {
    height: 40%;
  }
}
</style>
