<template>
  <div class="kv-bottom">
    <div class="wrapper">
      <div class="kv-bottom-inner">
        <div class="gold-banner-sp goto" data-to="table-section">
          <img src="/images/sp/kv_bnr.png" />
        </div>

        <div class="kv-items">
          <div class="kv-column">
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
              id="table-section"
              class="model-button show-model"
              data-id="#model3"
            >
              今までの結果を見る
            </div>
            <div class="lined-title">
              <div class="lined-title-line"></div>
              <div class="lined-title-text">ファイナルレース勝率</div>
              <div class="lined-title-line"></div>
            </div>
            <div class="info-date">
              {{ items[0].recent_date }}
            </div>
            <div class="section anime trigger hide-fade hide-down">
              <div class="diagram">
                <div class="diagram-over">
                  <svg viewBox="0 0 50 50" class="svg">
                    <path
                      fill="none"
                      stroke="#0551fd"
                      stroke-width="8"
                      d="M25 9.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      fill="none"
                      stroke="#f00"
                      stroke-width="8"
                      :stroke-dasharray="`${items[1].recent_date}, 100`"
                      d="M25 9.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div class="diagram-text">
                    <div class="diagram-text-name">
                      <div class="mini-circle"></div>
                      大井
                    </div>
                    <div class="diagram-text-number font-en">
                      {{ items[1].recent_date }}<span>%</span>
                    </div>
                    <div class="diagram-text-name">
                      <div class="mini-circle is-blue"></div>
                      大井以外
                    </div>
                    <div class="diagram-text-number font-en">
                      {{ 100 - parseInt(items[1].recent_date) }}<span>%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="kv-column">
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
            <div class="model-button show-model" data-id="#model4">
              今までの結果を見る
            </div>
            <div class="lined-title">
              <div class="lined-title-line"></div>
              <div class="lined-title-text">TCKジョッキー勝率</div>
              <div class="lined-title-line"></div>
            </div>
            <div class="info-date">
              {{ rate[0].recent_date }}
            </div>
            <div class="section anime trigger hide-fade hide-down">
              <div class="table-container">
                <div class="table-header">
                  <div class="table-header-item">騎手名</div>
                  <div class="table-header-item">勝利数</div>
                  <div class="table-header-item">勝率</div>
                </div>
                <div class="table-scroll">
                  <div class="table-scroll-inside">
                    <div v-for="(item, k) in rate" :key="k" class="table-row">
                      <div class="table-row-index font-en">
                        {{ item.rank }}<span>位</span>
                      </div>
                      <div class="table-row-name">{{ item.name }}</div>
                      <div class="table-row-won">{{ item.count }}</div>
                      <div class="table-row-percent">
                        {{ item.percent }}
                      </div>
                    </div>
                  </div>
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
  props: {
    items: {
      type: Array,
      default: () => [{ recent_date: '' }, { recent_date: '0' }],
    },
    rate: {
      type: Array,
      default: () => [{ recent_date: '' }, { recent_date: '0' }],
    },
  },
  data() {
    return {
      data: '65',
      date: '2022/06/03 12:00集計',
    }
  },
}
</script>

<style scoped lang="postcss">
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
.kv-column {
  width: 48.5%;
  @media (--sp) {
    width: 90%;
  }
}
.kv-column + .kv-column {
  @media (--sp) {
    margin-top: 15%;
  }
}
.kv-item {
  width: 100%;
  background-image: url('/images/pc/anchor_slash.png');
  background-size: 84% 100%;
  background-position: 60% 0;
  background-repeat: no-repeat;
  cursor: pointer;
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
.diagram {
  position: relative;
  height: 480px;
  @media (--sp) {
    height: 66vw;
  }
}
.diagram-over {
  position: absolute;
  top: -8%;
  left: 0;
  width: 100%;
  @media (--sp) {
    top: -4%;
  }
}
.svg {
  transform: scale(0.9);
  @media (--sp) {
    transform: scale(1);
  }
}
.diagram-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.diagram-text-name {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  @media (--wide) {
    font-size: 1.3vw;
  }
  @media (--sp) {
    font-size: 2.6vw;
  }
}
.mini-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f00;
  margin-right: 10px;
  &.is-blue {
    background-color: #0551fd;
  }
  @media (--wide) {
    width: 0.8vw;
    height: 0.8vw;
    margin-right: 0.8vw;
  }
  @media (--sp) {
    width: 1.6vw;
    height: 1.6vw;
    margin-right: 1.6vw;
  }
}
.diagram-text-number {
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 5px;
  @media (--wide) {
    font-size: 3.6vw;
    letter-spacing: 0.3vw;
  }
  @media (--sp) {
    font-size: 7.4vw;
    letter-spacing: 0.6vw;
  }
}
.diagram-text-number span {
  font-weight: bold;
  zoom: 0.6;
}
.diagram-text-number + .diagram-text-name {
  margin-top: 20px;
  @media (--sp) {
    margin-top: 1vw;
  }
}
.model-button {
  width: 340px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  font-size: 22px;
  background-color: #d70c19;
  margin: 3% auto 0;
  line-height: 1;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  @media (--wide) {
    width: 26vw;
    height: 4.4vw;
    font-size: 1.6vw;
  }
  @media (--sp) {
    width: 58vw;
    height: 10vw;
    font-size: 3.7vw;
    line-height: 10vw;
  }
  &:hover {
    opacity: 0.7;
  }
}
.lined-title {
  display: flex;
  align-items: center;
  margin-top: 10%;
  @media (--sp) {
    margin-top: 8%;
  }
}
.lined-title-line {
  flex-grow: 1;
  height: 2px;
  background-color: #8a8a8a;
}
.lined-title-text {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 0 20px;
  @media (--wide) {
    font-size: 1.7vw;
  }
  @media (--sp) {
    font-size: 3.2vw;
  }
}
.info-date {
  width: 100%;
  text-align: center;
  font-size: 14px;
  padding-top: 5%;
  @media (--wide) {
    font-size: 1vw;
  }
  @media (--sp) {
    font-size: 2.4vw;
    position: relative;
    margin-top: 0;
  }
}
.table-header {
  height: 65px;
  position: relative;
  @media (--wide) {
    height: 4.5vw;
  }
  @media (--sp) {
    height: 8vw;
  }
}
.table-header-item {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  @media (--wide) {
    font-size: 0.8vw;
  }
  @media (--sp) {
    font-size: 1.6vw;
  }
  &:nth-child(1) {
    left: 16.5%;
  }
  &:nth-child(2) {
    left: 52%;
  }
  &:nth-child(3) {
    left: 75%;
  }
}
.table-scroll {
  height: 360px;
  overflow-y: auto;
  margin-top: 10px;
  margin-bottom: 25px;
  @media (--wide) {
    height: 26.5vw;
    margin-top: 0.8vw;
  }
  @media (--sp) {
    height: 46vw;
    margin-bottom: 6vw;
  }
  &::-webkit-scrollbar {
    width: 6px;
    @media (--sp) {
      width: 3px;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
  }
}
.table-scroll-inside {
  padding-right: 10px;
  @media (--sp) {
    padding-right: 5px;
  }
}
.table-row {
  height: 60px;
  background-color: #2e2e2e;
  display: flex;
  align-items: center;
  font-size: 18px;
  @media (--wide) {
    height: 4.5vw;
    font-size: 1.3vw;
  }
  @media (--sp) {
    height: 8vw;
    font-size: 2.8vw;
  }
}
.table-row + .table-row {
  margin-top: 15px;
  @media (--wide) {
    margin-top: 1vw;
  }
  @media (--sp) {
    margin-top: 1.5vw;
  }
}
.table-row-index {
  width: 12.5%;
  height: 100%;
  text-align: center;
  font-size: 32px;
  line-height: 60px;
  margin-right: 4%;
  background-color: #252525;
  @media (--wide) {
    line-height: 4.5vw;
    font-size: 2.3vw;
  }
  @media (--sp) {
    line-height: 8vw;
    font-size: 4.2vw;
  }
}
.table-row-index span {
  zoom: 0.5;
  line-height: 16px;
  font-weight: bold;
  margin-left: 4px;
  padding-bottom: 2px;
  transform: translateY(-8%);
  display: inline-block;
}
.table-row-name {
  font-size: 20px;
  font-weight: bold;
  width: 50%;
  white-space: nowrap;
  @media (--wide) {
    font-size: 1.4vw;
  }
  @media (--sp) {
    font-size: 3vw;
    line-height: 1;
  }
}
.table-row-won {
  font-weight: bold;
  width: 30%;
}
.table-row-percent {
  font-weight: bold;
  width: 30%;
}
.section {
  height: 480px;
  position: relative;
  @media (--wide) {
    height: 35vw;
  }
  @media (--sp) {
    height: auto;
  }
}
.table-row:nth-child(1) .table-row-index {
  background-color: #8d7e35;
}
.table-row:nth-child(2) .table-row-index {
  background-color: #777;
}
.table-row:nth-child(3) .table-row-index {
  background-color: #a0745e;
}
.gold-banner {
  position: absolute;
  top: 0;
  right: 1%;
  width: 18%;
  margin-top: 6.25%;
  cursor: pointer;
  @media (--sp) {
    display: none;
  }
}
.gold-banner-sp {
  display: none;
  @media (--sp) {
    display: block;
    width: 116%;
    margin-left: -8%;
    transform: translateY(-50%);
  }
}
</style>
