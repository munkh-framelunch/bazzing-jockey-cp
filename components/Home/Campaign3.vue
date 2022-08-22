<template>
  <div class="campaign3">
    <div class="wrapper">
      <div class="inner">
        <div class="title">
          <img src="/images/pc/campaign3/cp_ttl.png" class="is-pc" />
          <img src="/images/sp/campaign3/cp_ttl.png" class="is-sp" />
        </div>
        <div class="present">
          <img src="/images/pc/campaign3/cp_present.png" class="is-pc" />
          <img src="/images/sp/campaign3/cp_present.png" class="is-sp" />
        </div>
        <div class="schedule">
          <div class="inside">
            <div class="date-row">
              <div class="date-head">応募期間：</div>
              <div class="date-body">
                8/14（日）～8/19（金）
                <div class="small">
                  ※応募締め切りは各開催日の最終レース発走5分前までとなります。
                </div>
              </div>
            </div>
            <div class="date-row">
              <div class="date-head">応募方法：</div>
              <div class="date-body">
                ファイナルレース勝利ジョッキー2択予想キャンペーンに応募いただくと、<br
                  class="is-pc"
                />
                自動的に本キャンペーンの応募完了となります。
              </div>
            </div>
          </div>
          <div class="button-container">
            <div class="button goto" data-to="cp1-section4">
              詳しい応募方法はこちら
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.inner {
  padding-bottom: 9%;
  @media (--sp) {
    padding: 0 4% 5%;
  }
}
.campaign3 {
  background-color: #000;
  background-image: url('/images/pc/campaign3/cp_bg.jpg');
  background-size: 100%;
  background-position: top;
  @media (--sp) {
    background-image: url('/images/sp/campaign3/cp_bg.jpg');
  }
}
.title {
  padding: 8% 0 5.5%;
  @media (--sp) {
    padding: 9% 0 10%;
  }
}
.schedule {
  background-color: #1a1a1a;
  padding: 4% 0 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 4.3%;
}
.inside {
  @media (--sp) {
    width: 100%;
    padding: 0 5%;
  }
}
.date-row {
  display: flex;
  font-size: 20px;
  line-height: 2;
  @media (--wide) {
    font-size: 1.5vw;
  }
  @media (--sp) {
    width: 100%;
    flex-wrap: wrap;
    font-size: 3.7vw;
  }
}
.date-row + .date-row {
  @media (--sp) {
    margin-top: 6%;
  }
}
.date-head {
  color: #bfa15b;
  font-weight: bold;
  @media (--sp) {
    width: 100%;
  }
}
.date-body {
  font-weight: bold;
  color: #fff;
  padding-left: 20px;
  @media (--sp) {
    padding-left: 0;
  }
}
.small {
  font-size: 14px;
  @media (--wide) {
    font-size: 1vw;
  }
  @media (--sp) {
    font-size: 2.4vw;
  }
}
.button-container {
  width: 100%;
}
.button {
  margin: 3% auto 0;
  width: 50%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  background-color: #d70c19;
  text-decoration: none;
  font-weight: bold;
  transition: 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media (--wide) {
    font-size: 1.8vw;
    height: 6vw;
  }
  @media (--sp) {
    width: 90%;
    height: 16vw;
    font-size: 4.2vw;
    margin-top: 6%;
  }
}
</style>
