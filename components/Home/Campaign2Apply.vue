<template>
  <div class="big-wrapper">
    <div class="apply-header">
      <div class="wrapper">
        <div id="cp2-section4" class="apply-header-inner">
          <SubTitle :text="'応募方法'" :is-white="true" />
        </div>
        <div class="apply-items">
          <div class="apply-item anime trigger hide-fade hide-down">
            <div class="apply-item-number font-en">STEP 1</div>
            <div class="twitter-text-head">
              東京シティ競馬（TCK）<br />
              公式Twitterアカウントをフォロー
            </div>
            <div class="apply-item-body twitter-text">
              公式Twitterアカウント「@tck_keiba」をフォロー
            </div>
            <a
              href="https://twitter.com/tck_keiba"
              target="_blank"
              class="twitter-button"
              >@tck_keiba をフォロー</a
            >
            <div class="apply-item-body twitter-text">
              Twitterアカウントをお持ちでない方
            </div>
            <a href="https://twitter.com" target="_blank" class="twitter-button"
              >Twitterアカウントを取得</a
            >
            <div class="twitter-text-bottom"></div>
          </div>
          <div
            class="
              apply-item
              no-bottom
              anime
              trigger
              hide-fade hide-down
              delay2
            "
          >
            <div class="apply-item-number font-en">STEP 2</div>
            <div class="apply-item-body">
              <div class="apply-text">
                対象レースの前日に投稿される<br />
                キャンペーンツイートを引用RTし<br />
                <span class="is-green">#TCK重賞勝利ジョッキーを当てろ</span
                >と<br />
                <span class="is-blue">#対象レース名</span>と<span class="is-red"
                  >＃「勝利騎手の名前」</span
                >を付けて、<br />
                Twitterに投稿しよう！
              </div>
              <div class="cp2-howto">
                <img src="/images/pc/cp2_howto_img.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="cp2-spacer"></div>
        <div class="anime trigger hide-fade hide-down">
          <div class="campaign-button is-plus show-model" data-id="#model1">
            応募要項を見る
          </div>
          <div class="comment">
            本キャンペーンはTwitter及びTwitter社とは関係ありません。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SubTitle from './SubTitle.vue'

export default {
  components: {
    SubTitle,
  },
}
</script>
<style scoped lang="postcss">
.cp2-howto {
  padding: 2% 5% 0;
}
.cp2-spacer {
  padding-top: 8.5%;
}
</style>
