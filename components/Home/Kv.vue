<template>
  <div class="kv">
    <img src="/images/pc/kv.jpg" class="is-pc" />
    <img src="/images/sp/kv.jpg" class="is-sp" />
    <div class="kv-bottom">
      <div class="wrapper">
        <div class="kv-bottom-inner">
          <div class="kv-items">
            <div
              class="kv-item anime trigger hide-fade hide-down goto"
              data-to="cp1-section1"
            >
              <div class="kv-item-head">
                <div class="text font-en">CAMPAIGN</div>
                <div class="number font-en">01</div>
              </div>
              <div class="kv-item-image">
                <img src="/images/pc/cp1_mv.jpg" />
              </div>
              <div class="kv-item-desc">
                ファイナルレース 勝利ジョッキー 2択予想キャンペーン
              </div>
              <div class="kv-item-title">大井か、大井以外か。</div>
            </div>
            <div
              class="kv-item anime trigger hide-fade hide-down delay2 goto"
              data-to="cp2-section1"
            >
              <div class="kv-item-head">
                <div class="text font-en">CAMPAIGN</div>
                <div class="number font-en">02</div>
              </div>
              <div class="kv-item-image">
                <img src="/images/pc/cp2_mv.jpg" />
              </div>
              <div class="kv-item-desc">
                TCK重賞勝利ジョッキーを当てろ！キャンペーン
              </div>
              <div class="kv-item-title">勝つのは、誰だ？</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.test {
  color: #fff;
}
.kv {
  @media (--sp) {
    padding-top: 50px;
  }
}
.kv-bottom {
  background-image: url('/images/pc/anchor_bg.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (--sp) {
    background-image: url('/images/sp/anchor_bg.jpg');
  }
}
.kv-bottom-inner {
  padding: 7.5% 0;
  @media (--sp) {
    padding: 14% 10%;
  }
}
.kv-items {
  display: flex;
  color: #fff;
  margin-left: -2%;
  width: 104%;
  justify-content: space-between;
  @media (--sp) {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.kv-item {
  width: 48.5%;
  background-image: url('/images/pc/anchor_slash.png');
  background-size: 84% 100%;
  background-position: 60% 0;
  background-repeat: no-repeat;
  cursor: pointer;
  @media (--sp) {
    width: 90%;
  }
}
.kv-item + .kv-item {
  @media (--sp) {
    margin-top: 10%;
  }
}
.kv-item-head {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
}
.text {
  line-height: 1;
  font-size: 20px;
  letter-spacing: 10px;
  font-weight: bold;
  @media (--wide) {
    font-size: 1.4vw;
    letter-spacing: 0.7vw;
  }
  @media (--sp) {
    font-size: 2.8vw;
    letter-spacing: 1.4vw;
  }
}
.number {
  line-height: 1;
  font-size: 50px;
  letter-spacing: 10px;
  font-weight: bold;
  margin-left: 3%;
  @media (--wide) {
    font-size: 3.6vw;
    letter-spacing: 0.7vw;
  }
  @media (--sp) {
    font-size: 7.2vw;
    letter-spacing: 1.4vw;
  }
}
.kv-item-desc {
  font-size: 18px;
  text-align: center;
  line-height: 1;
  padding: 3% 0;
  font-weight: bold;
  letter-spacing: 1px;
  @media (--wide) {
    font-size: 1.3vw;
  }
  @media (--sp) {
    font-size: 3vw;
    white-space: nowrap;
    padding: 4% 0;
  }
}
.kv-item-title {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  padding-bottom: 4%;
  @media (--wide) {
    font-size: 3vw;
  }
  @media (--sp) {
    font-size: 6vw;
  }
}
</style>
