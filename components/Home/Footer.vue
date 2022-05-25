<template>
  <div class="footer">
    <div class="wrapper">
      <div class="footer-inner">
        <div class="social">
          <div class="social-item">
            <a href="https://twitter.com/tck_keiba" target="_blank">
              <img src="/images/pc/twi_w.png" />
            </a>
          </div>
          <div class="social-item">
            <a href="https://www.facebook.com/tokyocitykeiba/" target="_blank">
              <img src="/images/pc/fb_w.png" />
            </a>
          </div>
          <div class="social-item">
            <a
              href="https://www.instagram.com/tck_keiba_official/"
              target="_blank"
            >
              <img src="/images/pc/ig_w.png" />
            </a>
          </div>
        </div>
        <a
          href="https://www.tokyocitykeiba.com/"
          target="_blank"
          class="footer-logo"
        >
          <img src="/images/pc/tck_logo.png" />
        </a>
        <div class="footer-text">
          COPYRIGHT 2022. TOKYOCITYKEIBA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.footer {
  background-color: #000;
  color: #fff;
  position: relative;
}
.footer-inner {
  position: relative;
  height: 210px;
  @media (--sp) {
    height: 100px;
  }
}
.footer-text {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 2.8%;
  text-align: center;
  width: 100%;
  font-size: 12px;
  @media (--sp) {
    text-align: left;
    padding-left: 5%;
    font-size: 10px;
  }
}
.social {
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
  @media (--sp) {
    top: 20%;
    right: 5%;
    transform: none;
  }
}
.social-item {
  margin: 0 10px;
  width: 28px;
  @media (--sp) {
    width: 20px;
    margin: 0 8px;
  }
}
.footer-logo {
  display: block;
  width: 89px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (--sp) {
    top: 20%;
    transform: none;
    width: 60px;
    left: 5%;
  }
}
a {
  transition: opacity 0.4s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
}
</style>
