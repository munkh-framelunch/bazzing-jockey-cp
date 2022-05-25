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
            <img src="/images/pc/cp2_ttl.png" />
          </div>
          <div class="wrapper">
            <div id="cp2-section1" class="campaign-inner">
              <div class="campaign-mv anime trigger hide-fade hide-down">
                <img src="/images/pc/cp2_mv.jpg" />
                <div class="campaign-mv-text">
                  大井競馬開催の重賞レースで<br
                    class="is-sp"
                  />の勝利ジョッキーを予想して<br />
                  キャンペーンに応募しよう！
                </div>
              </div>
              <div class="cp2-spacer1">
                <div class="anime trigger hide-fade hide-down">
                  <a
                    href="https://www.tokyocitykeiba.com/race/grade_race/"
                    target="_blank"
                    class="campaign-button is-arrow"
                    >詳しいレース情報はこちら</a
                  >
                </div>
              </div>

              <div
                id="cp2-section2"
                class="cp2-content anime trigger hide-fade hide-down"
              >
                <div class="big-title font-en">SCHEDULE</div>
                <SubTitle :text="'応募期間'" />
                <div class="cp2-schedule-text">
                  下記、対象レースのキャンペーンツイート投稿後〜<br
                    class="is-sp"
                  />レース発走5分前まで
                </div>
                <div class="items">
                  <div v-for="(item, k) in items" :key="k" class="item">
                    <div class="item-head">
                      <div class="item-head-year">{{ item.y }}</div>
                      <div class="item-head-date">{{ item.d }}</div>
                    </div>
                    <div class="item-number">{{ item.n }}</div>
                    <div class="item-text" v-html="item.t"></div>
                    <div class="item-b">{{ item.b }}</div>
                  </div>
                </div>
                <div class="items-comment">
                  ※羽田盃、東京ダービー、JDD、マイルグランプリ、黒潮盃、東京記念は対象外となります。
                </div>
              </div>
              <div class="cp2-spacer"></div>
              <div id="cp2-section3" class="anime trigger hide-fade hide-down">
                <div class="big-title font-en">PRESENT</div>
                <SubTitle :text="'賞品'" />
              </div>
              <div class="present-items">
                <div class="present-item anime trigger hide-fade hide-down">
                  <div class="present-item-image1">
                    <img src="/images/pc/cp2_present1.png" />
                  </div>
                  <div class="present-item-text">
                    勝利ジョッキーサイン入りゴーグル
                  </div>
                  <div class="present-bottom">
                    <span>5</span>名様 / 各レース
                  </div>
                </div>
                <div
                  class="present-item anime trigger hide-fade hide-down delay2"
                >
                  <div class="present-item-image2">
                    <img src="/images/pc/cp2_present2.png" />
                  </div>
                  <div class="present-item-text">クオ・カード 500円分</div>
                  <div class="present-bottom">
                    <span>50</span>名様 / 各レース
                  </div>
                </div>
              </div>
              <div class="campaign-bottom-spacer"></div>
              <div class="cp2-comment">
                ※賞品は選べません。<br />
                ※当選者にはTwitterのダイレクトメッセージでご連絡いたします。<br />
                ※なりすましアカウント等からのダイレクトメッセージにご注意ください。
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
      <Contact :last="true" />
    </div>
  </div>
</template>
<script>
import SubTitle from './SubTitle.vue'
import Bottom from './Campaign2Apply.vue'
import Contact from './Contact.vue'

export default {
  components: {
    SubTitle,
    Bottom,
    Contact,
  },
  data() {
    return {
      items: [
        { y: '2022', d: '4.20', n: '第33回', t: '東京スプリント', b: 'JpnIII' },
        {
          y: '2022',
          d: '4.21',
          n: '第5回',
          t: 'ブリリアントカップ',
          b: 'SIII',
        },
        { y: '2022', d: '5.11', n: '第36回', t: '東京プリンセス賞', b: 'SI' },
        { y: '2022', d: '5.25', n: '第67回', t: '大井記念', b: 'SI' },
        { y: '2022', d: '6.28', n: '第12回', t: '優駿スプリント', b: 'SII' },
        { y: '2022', d: '6.29', n: '第45回', t: '帝王賞', b: 'JpnI' },
        {
          y: '2022',
          d: '9.8',
          n: '第29回',
          t: 'アフター５スター賞',
          b: 'SIII',
        },
        { y: '2022', d: '9.22', n: '第3回', t: 'ゴールドジュニア', b: 'SIII' },
        { y: '2022', d: '10.5', n: '第56回', t: ' 東京盃 ', b: 'JpnII' },
        {
          y: '2022',
          d: '10.6',
          n: '第19回',
          t: 'レディス<br>プレリュード',
          b: 'JpnII',
        },
        {
          y: '2022',
          d: '11.2',
          n: '第43回',
          t: 'サンタアニタ<br>トロフィー',
          b: 'SIII',
        },
        { y: '2022', d: '11.16', n: '第55回', t: 'ハイセイコー記念', b: 'SI' },
        { y: '2022', d: '12.8', n: '第14回', t: '勝島王冠', b: 'SII' },
        { y: '2022', d: '12.29', n: '第68回', t: '東京大賞典', b: 'GI' },
        {
          y: '2022',
          d: '12.30',
          n: '第16回',
          t: '東京シンデレラ<br>マイル',
          b: 'SIII',
        },
        {
          y: '2022',
          d: '12.31',
          n: '第46回',
          t: '東京２歳<br>優駿牝馬',
          b: 'SI',
        },
        { y: '2023', d: '1.25', n: '第26回', t: 'ＴＣＫ女王盃', b: 'JpnIII' },
        { y: '2023', d: '2.22', n: '第67回', t: '金盃', b: 'SII' },
        { y: '2023', d: '2.23', n: '第5回', t: '雲取賞', b: 'SIII' },
        {
          y: '2023',
          d: '3.9',
          n: '第14回',
          t: 'フジノウェーブ記念',
          b: 'SIII',
        },
        { y: '2023', d: '3.29', n: '第46回', t: '京浜盃', b: 'SII' },
      ],
    }
  },
}
</script>
<style scoped lang="postcss">
.cp2-content {
  margin: 5% 0 0;
}
.cp2-schedule-text {
  text-align: center;
  padding: 3% 0;
  font-size: 22px;
  font-weight: bold;
  @media (--wide) {
    font-size: 1.6vw;
  }
  @media (--wide) {
    font-size: 3.2vw;
    line-height: 1.5;
    padding: 5% 0;
  }
}
.items {
  display: flex;
  margin: -1%;
  width: 102%;
  flex-wrap: wrap;
  @media (--sp) {
    width: 95%;
    margin: 0 auto;
  }
}
.item {
  width: 15%;
  margin: 0 0.8% 2.4%;
  background-color: #fff;
  height: 170px;
  position: relative;
  text-align: center;
  font-family: var(--fontFamily-mincho);
  @media (--wide) {
    height: 12.5vw;
  }
  @media (--sp) {
    height: 30vw;
    width: 31%;
    margin: 0 1% 3%;
  }
  &::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 20px 0 0;
    border-color: #d70c19 transparent transparent transparent;
    @media (--sp) {
      border-width: 15px 15px 0 0;
    }
  }
}
.item-head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11% 0;
}
.item-head-year {
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  @media (--wide) {
    font-size: 0.8vw;
  }
  @media (--sp) {
    margin-top: 2px;
    font-size: 2vw;
  }
}
.item-head-date {
  font-size: 18px;
  font-weight: bold;
  margin-left: 5%;
  line-height: 1;
  @media (--wide) {
    font-size: 1.3vw;
  }
  @media (--sp) {
    font-size: 3vw;
  }
}
.item-number {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 3%;
  @media (--wide) {
    font-size: 1vw;
  }
  @media (--sp) {
    font-size: 2.8vw;
  }
}
.item-text {
  font-size: 21px;
  font-weight: bold;
  line-height: 1.2;
  white-space: nowrap;
  @media (--wide) {
    font-size: 1.5vw;
  }
  @media (--sp) {
    font-size: 3.7vw;
  }
}
.item-b {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: 9%;
  font-size: 14px;
  font-weight: bold;
  @media (--wide) {
    font-size: 1vw;
  }
  @media (--sp) {
    font-size: 3vw;
  }
}
.items-comment {
  font-size: 16px;
  padding: 2% 0 0;
  @media (--wide) {
    font-size: 1.1vw;
  }
  @media (--sp) {
    font-size: 2.5vw;
    padding: 4% 2.5% 6%;
  }
}
.cp2-spacer {
  padding-top: 11%;
}
.cp2-spacer1 {
  padding: 5% 0 2%;
  @media (--sp) {
    padding: 5% 0 10%;
  }
}
.present-items {
  display: flex;
  justify-content: space-between;
  padding: 3% 5% 0;
  @media (--sp) {
    flex-wrap: wrap;
    padding-bottom: 10%;
  }
}
.present-item {
  width: 48%;
  @media (--sp) {
    width: 100%;
  }
}
.present-item-text {
  font-size: 32px;
  text-align: center;
  margin-bottom: 2%;
  margin-top: -10%;
  white-space: nowrap;
  @media (--wide) {
    font-size: 2.3vw;
  }
  @media (--sp) {
    margin-top: -10%;
    font-size: 4vw;
  }
}
.present-item-image1 {
  width: 110%;
  padding: 5% 0 10%;
  @media (--sp) {
    width: 100%;
    padding-left: 5%;
    padding-bottom: 5%;
  }
}
.present-item-image2 {
  width: 110%;
  @media (--sp) {
    width: 100%;
    padding-left: 6%;
  }
}
.cp2-comment {
  text-align: center;
  padding-top: 5%;
  font-size: 12px;
  line-height: 2;
  @media (--sp) {
    padding-top: 0;
    padding-bottom: 10%;
  }
}
</style>
