<template>
  <footer>
    <div class="max__width">
      <div class="sub__footer">
        <div class="item">
          <div class="logo">
            <logo class="logo__icon" />
          </div>
          <ul>
            <li>
              <p><span>Phone :</span> +49 541 245 854</p>
            </li>
            <li>
              <p>
                <span>Address :</span> 4500 Lorem ipsum dolor, sit amet
                consectetur adipisicing.
              </p>
            </li>
          </ul>
          <div class="payment__info">
            <p>We Accept:</p>
            <div class="icons">
              <MasterCard width="25" height="50" />
              <VisaIcon width="35" />
              <IpayIcon width="35" />
            </div>
          </div>
        </div>
        <div class="item">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <p>Delivery information</p>
            </li>
            <li>
              <p>Sale terms & condition</p>
            </li>
            <li>
              <p>Returns and refunds</p>
            </li>
            <li>
              <p>Privacy notice</p>
            </li>
            <li>
              <p>Shoping FAQs</p>
            </li>
          </ul>
        </div>
        <div class="item">
          <h5>Popular categories</h5>
          <ul>
            <li>
              <p>Accessories</p>
            </li>
            <li>
              <p>Mobile</p>
            </li>
            <li>
              <p>Headphone</p>
            </li>
            <li>
              <p>Laptop</p>
            </li>
            <li>
              <p>Television</p>
            </li>
            <li>
              <p>Smart watch</p>
            </li>
            <li>
              <p>Speaker</p>
            </li>
          </ul>
        </div>
        <div class="item">
          <h5>Subscription Offer</h5>
          <div class="input__button">
            <input type="text" placeholder="Enter email Id" />
            <button class="primary__btn">Send</button>
          </div>
          <p class="subscribe__info">
            Sign up to recive updates, promotions, and sneak peaks of upcoming
            products.
          </p>
          <div class="follow__us">
            <p>Follow Us on:</p>
            <div class="icons">
              <FbIcon width="20" />
              <TwitterIcon width="20" />
              <PintrestIcon width="20" />
              <YoutubeIcon width="20" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>© 2023, Made with pasion by Otmane</p>
        <p>All rights reserved by Otmane</p>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import MasterCard from "@/assets/icons/MasterCard.svg";
import VisaIcon from "@/assets/icons/visa.svg";
import IpayIcon from "@/assets/icons/ipay.svg";
import FbIcon from "@/assets/icons/Facebook - Original.svg";
import TwitterIcon from "@/assets/icons/Vector.svg";
import PintrestIcon from "@/assets/icons/Pinterest - Original.svg";
import YoutubeIcon from "@/assets/icons/YouTube - Original.svg";
export default {
  components: {
    logo,
    MasterCard,
    VisaIcon,
    IpayIcon,
    FbIcon,
    TwitterIcon,
    PintrestIcon,
    YoutubeIcon,
  },
};
</script>

<style scoped>
footer {
  padding-top: 80px;
}

footer .sub__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
}

footer .sub__footer .item {
  flex: 1;
}

footer .sub__footer .item h5 {
  font-weight: 500;
  font-size: 14px;
}

footer .sub__footer .item .logo {
  width: 100px;
}

footer .sub__footer .item .logo img {
  width: 100%;
}

footer .sub__footer .item ul {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

footer .sub__footer .item ul li p {
  font-size: 12px;
  line-height: 22px;
  color: var(--textColor);
}

footer .sub__footer .item ul li p span {
  font-weight: 500;
}

footer .sub__footer .item .payment__info {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

footer .sub__footer .item .payment__info p {
  font-size: 12px;
  font-weight: 500;
}

footer .sub__footer .item .payment__info .icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

footer .sub__footer .item .input__button {
  margin-top: 40px;
  display: flex;
}

footer .sub__footer .item .input__button button {
  background: black;
  color: white;
  padding: 8px 24px;
}

footer .sub__footer .item .input__button input {
  padding: 8px 24px;
}

footer .sub__footer .item .subscribe__info {
  margin-top: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--textColor);
}

footer .sub__footer .item .follow__us {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

footer .sub__footer .item .follow__us p {
  font-size: 12px;
  font-weight: 500;
}

footer .sub__footer .item .follow__us .icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

footer .sub__footer .item .follow__us .icons svg {
  cursor: pointer;
}

footer .footer {
  border-top: 1px solid #ededed;
  margin-top: 40px;
  font-size: 12px;
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Responsive styles */

@media screen and (max-width: 550px) {
  footer .footer {
    justify-content: center;
    gap: 10px;
  }
}
</style>
