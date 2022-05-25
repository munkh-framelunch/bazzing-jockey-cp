<template>
  <div class="menu" :class="{ show }">
    <div class="menu-bar"></div>
    <a href="https://www.tokyocitykeiba.com/" target="_blank" class="menu-logo">
      <img src="/images/pc/tck_logo.png" class="is-pc" />
      <img src="/images/sp/tck_logo.png" class="is-sp" />
    </a>
    <div class="menu-control">
      <div class="social-item">
        <a href="https://twitter.com/tck_keiba" target="_blank">
          <img src="/images/pc/twi_w.png" class="is-pc" />
          <img src="/images/sp/twi_b.png" class="is-sp" />
        </a>
      </div>
      <div class="social-item">
        <a href="https://www.facebook.com/tokyocitykeiba/" target="_blank">
          <img src="/images/pc/fb_w.png" class="is-pc" />
          <img src="/images/sp/fb_b.png" class="is-sp" />
        </a>
      </div>
      <div class="social-item">
        <a href="https://www.instagram.com/tck_keiba_official/" target="_blank">
          <img src="/images/pc/ig_w.png" class="is-pc" />
          <img src="/images/pc/ig_b.png" class="is-sp" />
        </a>
      </div>
      <div class="menu-button" @click="show = !show">
        <div class="menu-button-line is-top"></div>
        <div class="menu-button-line is-mid1"></div>
        <div class="menu-button-line is-mid2"></div>
        <div class="menu-button-line is-bot"></div>
      </div>
    </div>
    <div class="menu-content">
      <div class="menu-inside">
        <div class="wrapper">
          <div class="menu-items">
            <div class="menu-item">
              <div class="menu-item-head">
                <div class="menu-item-head-text font-en">CAMPAIGN</div>
                <div class="menu-item-head-number font-en">01</div>
              </div>
              <div class="goto" data-to="cp1-section1" @click="show = false">
                <img src="/images/pc/cp1_mv.jpg" />
              </div>
              <div class="menu-item-child">
                <div
                  class="child goto"
                  data-to="cp1-section2"
                  @click="show = false"
                >
                  応募期間
                </div>
                <div
                  class="child goto"
                  data-to="cp1-section3"
                  @click="show = false"
                >
                  賞品
                </div>
                <div
                  class="child goto"
                  data-to="cp1-section4"
                  @click="show = false"
                >
                  応募方法
                </div>
              </div>
            </div>
            <div class="menu-item">
              <div class="menu-item-head">
                <div class="menu-item-head-text font-en">CAMPAIGN</div>
                <div class="menu-item-head-number font-en">02</div>
              </div>
              <div class="goto" data-to="cp2-section1" @click="show = false">
                <img src="/images/pc/cp2_mv.jpg" />
              </div>
              <div class="menu-item-child">
                <div
                  class="child goto"
                  data-to="cp2-section2"
                  @click="show = false"
                >
                  応募期間
                </div>
                <div
                  class="child goto"
                  data-to="cp2-section3"
                  @click="show = false"
                >
                  賞品
                </div>
                <div
                  class="child goto"
                  data-to="cp2-section4"
                  @click="show = false"
                >
                  応募方法
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>
<style scoped lang="postcss">
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
.menu-logo {
  position: absolute;
  top: 0;
  left: 0;
  margin: 2% 0 0 2%;
  max-width: 134px;
  width: 8vw;
  z-index: 10;
  @media (--sp) {
    margin: 10px 0 0 3%;
    width: 15vw;
  }
}
.menu-control {
  position: absolute;
  top: 0;
  right: 0;
  margin: 2% 2% 0 0;
  display: flex;
  align-items: center;
  z-index: 10;
  @media (--sp) {
    margin: 10px 3% 0 0;
  }
}
.social-item {
  width: 28px;
  margin: 0 10px;
  transition: opacity 0.4s ease-in-out;
  @media (--sp) {
    width: 20px;
    margin: 0 8px;
  }
  &:hover {
    opacity: 0.7;
  }
}
.menu-button {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  position: relative;
  cursor: pointer;
  @media (--sp) {
    transform: scale(0.8);
    margin-left: 5px;
  }
}
.menu-button-line {
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #fff;
  transition: 0.4s ease-in-out;
  @media (--sp) {
    background-color: #000;
  }
  &.is-top {
    top: 4px;
  }
  &.is-mid1 {
    top: 13px;
    transform-origin: center;
  }
  &.is-mid2 {
    top: 13px;
    transform-origin: center;
  }
  &.is-bot {
    top: 22px;
  }
}
.menu-content {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.9);
  overflow-y: auto;
}
.menu-inside {
  display: flex;
  height: 100%;
  align-items: center;
  min-height: 600px;
}
.menu-items {
  display: flex;
  justify-content: space-between;
  color: #fff;
  @media (--sp) {
    flex-wrap: wrap;
    padding: 0 11%;
  }
}
.menu-item {
  width: 48%;
  @media (--sp) {
    width: 100%;
    margin-bottom: 5%;
  }
}
.menu-item-head {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 0;
}
.menu-item-head-text {
  font-size: 20px;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 5px;
  @media (--wide) {
    font-size: 1.4vw;
  }
  @media (--sp) {
    font-size: 3vw;
  }
}
.menu-item-head-number {
  font-size: 50px;
  line-height: 1;
  font-weight: bold;
  margin-left: 2%;
  @media (--wide) {
    font-size: 3.6vw;
  }
  @media (--sp) {
    font-size: 7vw;
  }
}
.menu-item-child {
  margin-top: 5%;
  display: flex;
}
.child {
  width: 33.33%;
  text-align: center;
  font-size: 18px;
  padding: 1% 0;
  border-left: 1px solid #fff;
  cursor: pointer;
  &:last-child {
    border-right: 1px solid #fff;
    @media (--sp) {
      border-right: none;
    }
  }
  @media (--wide) {
    font-size: 1.3vw;
  }
  @media (--sp) {
    font-size: 4vw;
    &:first-child {
      border-left: none;
    }
  }
}
.menu-bar {
  @media (--sp) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    z-index: 6;
  }
}
.goto {
  cursor: pointer;
}
.menu.show .menu-content {
  display: block;
}
.menu.show .is-top {
  opacity: 0;
}
.menu.show .is-bot {
  opacity: 0;
}
.menu.show .is-mid1 {
  transform: rotate(45deg);
}
.menu.show .is-mid2 {
  transform: rotate(-45deg);
}
</style>
