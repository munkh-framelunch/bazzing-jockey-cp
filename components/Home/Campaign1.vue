<template>
  <div class="campaign">
    <div class="campaign-bg">
      <div class="campaign-bg1"></div>
      <div class="campaign-bg2"></div>
    </div>
    <div class="campaign-body">
      <div class="big-wrapper">
        <div class="campaign-inside">
          <div class="campaign-title">
            <img src="/images/pc/cp1_ttl.png" />
          </div>
          <div class="wrapper">
            <div id="cp1-section1" class="campaign-inner">
              <div class="campaign-mv anime trigger hide-fade hide-down">
                <img src="/images/pc/cp1_mv.jpg" />
                <div class="campaign-mv-text">
                  大井競馬開催日の最終レースで<br
                    class="is-sp"
                  />「大井の騎手or大井以外の騎手」のどちらが<br
                    class="is-sp"
                  />１着になるか<br
                    class="is-pc"
                  />予想してキャンペーンに応募しよう！
                </div>
              </div>
              <div class="cp1-items">
                <div
                  id="cp1-section2"
                  class="cp1-item anime trigger hide-fade hide-down"
                >
                  <div class="cp1-item-title font-en">SCHEDULE</div>
                  <SubTitle :text="'応募期間'" />
                  <div class="cp1-item-body">
                    <!--
                    <div class="cp1-item-date">
                      <img src="/images/pc/cp1_date.png" />
                    </div>
                    -->
                    <div class="present-bottom is-red">2022年4月18日(月)</div>
                    <div class="present-bottom-line"></div>
                    <div class="present-bottom is-red">2023年3月31日(金)</div>
                    <div class="cp1-item-comment">
                      大井競馬各開催日となります。<br />
                      ※応募締め切りは各開催日の<br />
                      最終レース発走5分前までとなります。
                    </div>
                    <div class="is-sp">
                      <a
                        href="https://www.tokyocitykeiba.com/race/schedule/"
                        target="_blank"
                        class="campaign-button is-arrow"
                        >開催スケジュールはこちら</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  id="cp1-section3"
                  class="cp1-item anime trigger hide-fade hide-down delay2"
                >
                  <div class="cp1-item-title font-en">PRESENT</div>
                  <SubTitle :text="'賞  品'" />
                  <div class="cp1-item-body">
                    <div class="cp1-item-pay">
                      <img src="/images/pc/cp1_pay.png" />
                    </div>
                    <div class="present-bottom"><span>500</span>円分</div>
                    <div class="present-bottom">
                      <span>50</span>名様 / <span>1</span>開催<br />
                    </div>
                    <div class="cp1-item-comment is-right">
                      ※当選者にはTwitterのダイレクトメッセージで<br
                        class="is-sp"
                      />QUOカードPayをプレゼントいたします。<br />
                      ※なりすましアカウント等からの<br
                        class="is-sp"
                      />ダイレクトメッセージにご注意ください。
                    </div>
                  </div>
                </div>
              </div>
              <div class="is-pc anime trigger hide-fade hide-down">
                <a
                  href="https://www.tokyocitykeiba.com/race/schedule/"
                  target="_blank"
                  class="campaign-button is-arrow"
                  >開催スケジュールはこちら</a
                >
              </div>
              <div class="campaign-bottom-spacer"></div>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  </div>
</template>
<script>
import SubTitle from './SubTitle.vue'
import Bottom from './Campaign1Apply.vue'
// import Contact from './Contact.vue'

export default {
  components: {
    SubTitle,
    Bottom,
    // Contact,
  },
}
</script>
<style scoped lang="postcss">
.cp1-items {
  margin-top: 2.5%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8%;
  @media (--sp) {
    flex-wrap: wrap;
  }
}
.cp1-item {
  width: 46.5%;
  @media (--sp) {
    width: 100%;
    margin-bottom: 5%;
  }
}
.cp1-item-title {
  text-align: center;
  opacity: 0.1;
  font-size: 80px;
  font-weight: bold;
  line-height: 1.2;
  @media (--wide) {
    font-size: 5.8vw;
  }
  @media (--sp) {
    font-size: 13.3vw;
  }
}
.cp1-item-body {
  padding: 9% 0 0;
}
.cp1-item-date {
  width: 64%;
  margin: 2% auto 7%;
  @media (--sp) {
    width: 48%;
    margin: 0 auto 5%;
  }
}
.cp1-item-comment {
  text-align: center;
  font-size: 12px;
  line-height: 1.6;
  margin-top: 5%;
  @media (--sp) {
    font-size: 3vw;
    margin-bottom: 7%;
  }
}
.cp1-item-comment.is-right {
  margin-top: 4%;
  font-size: 12px;
}
.cp1-item-pay {
  width: 48%;
  margin: 0 auto 7%;
  @media (--sp) {
    width: 55%;
    margin: 2% auto 7%;
  }
}
.present-bottom {
  font-size: 30px;
  @media (--wide) {
    font-size: 2.2vw;
  }
  @media (--sp) {
    font-size: 5vw;
  }
}
.is-special {
  zoom: 0.8;
}
</style>
