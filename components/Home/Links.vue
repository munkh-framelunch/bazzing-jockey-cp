<template>
  <div class="right-side">
    <div :class="{ close }">
      <div class="right-toggle" @click="close = !close">
        <div class="right-toggle-button">
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="right-side-inside anime">
        <div class="block1">
          <div class="block1-text">
            ネットで<br class="is-pc" />ご購入はこちら！
          </div>
          <div class="block1-content">
            <a
              href="https://www.jra.go.jp/dento/"
              target="_blank"
              class="logo1"
            >
              <img src="/images/common/jra_tck_logo.png" />
            </a>
            <a
              href="https://www.nankankeiba.com/info/spat4/"
              target="_blank"
              class="logo2"
            >
              <img src="/images/common/spat4_logo.png" />
            </a>
            <a
              href="https://keiba.rakuten.co.jp/"
              target="_blank"
              class="logo3"
            >
              <img src="/images/common/rakuten_logo.png" />
            </a>
          </div>
        </div>
        <div class="block2">
          <div class="block2-text">
            大井競馬の<br class="is-pc" />レース中継を<br
              class="is-pc"
            />観るならこちら！
          </div>
          <div class="block2-content">
            <a href="https://www.nankan-tv.com/" target="_blank" class="logo4">
              <img src="/images/common/skaper_logo.png" />
            </a>
            <a
              href="https://s.mxtv.jp/sports/tck/"
              target="_blank"
              class="logo5"
            >
              <img src="/images/common/tokyomx_logo.png" />
            </a>
            <a
              href="https://www.dazn.com/ja-JP/home"
              target="_blank"
              class="logo6"
            >
              <img src="/images/common/dazn_logo.png" />
            </a>
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
      close: false,
    }
  },
}
</script>
<style scoped lang="postcss">
.right-side {
  position: fixed;
  bottom: 5vh;
  right: 0;
  width: 8vw;
  max-width: 108px;
  z-index: 2;
  transition: 0.4s ease-in-out;
  @media (--sp) {
    position: relative;
    width: 100%;
    padding: 5% 10% 10%;
    bottom: 0;
    max-width: inherit;
    background-color: #f4f4f4;
    background-image: url('/images/sp/cp_footer.png');
    background-size: 100%;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
}
a {
  display: block;
  margin-top: 10px;
  transition: opacity 0.4s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
}
.right-toggle {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  margin-top: -50px;
  border-radius: 5px 0 0 5px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  transition-delay: 0.6s;
  @media (--sp) {
    display: none;
  }
  &.show {
    opacity: 1;
  }
}
.right-toggle-button {
  width: 18px;
  height: 18px;
  position: relative;
}
.line {
  height: 2px;
  background-color: #fff;
  position: absolute;
  transform-origin: top left;
  transition: 0.4s ease-in-out;
  top: 2px;
  left: 2px;
  transform: rotate(45deg);
  width: 120%;
}
.line:nth-child(2) {
  top: 17px;
  transform: rotate(-45deg);
  transform-origin: bottom left;
}
.block1 {
  border-radius: 5px 0 0 5px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 10px;
  @media (--sp) {
    border-radius: 5px 5px 0 0;
    margin-bottom: 5%;
  }
}
.block1-text {
  text-align: center;
  color: #fff;
  font-size: 12px;
  background-color: #e6061f;
  padding: 10px 0;
}
.block1-content {
  padding: 0 10px 10px;
  @media (--sp) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
}
.block2 {
  border-radius: 5px 0 0 5px;
  width: 100%;
  max-width: 136px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  @media (--sp) {
    max-width: inherit;
    border-radius: 0 0 5px 5px;
    padding: 0;
  }
}
.block2-text {
  text-align: center;
  color: #fff;
  font-size: 12px;
  @media (--sp) {
    padding-top: 10px;
  }
}
.block2-content {
  @media (--sp) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 10px;
  }
}
.logo1 {
  width: 90%;
  margin: 15px auto 0;
  @media (--sp) {
    width: 28%;
    padding: 0;
    margin: 0;
  }
}
.logo2 {
  width: 70%;
  margin: 15px auto 0;
  @media (--sp) {
    width: 30%;
    padding: 0;
    margin: 0;
  }
}
.logo3 {
  margin: 15px auto 10px;
  @media (--sp) {
    width: 32%;
    padding: 0;
    margin: 0;
  }
}
.logo4 {
  @media (--sp) {
    width: 30%;
  }
}
.logo5 {
  @media (--sp) {
    width: 30%;
  }
}
.logo6 {
  @media (--sp) {
    width: 30%;
  }
}
.close .line {
  top: 4px;
  left: 0;
  width: 100%;
  transform: none;
}
.close .line:nth-child(2) {
  top: 14px;
  left: 0;
  width: 100%;
  transform: none;
}
.close .right-side-inside {
  transform: translateX(100%);
}
</style>
