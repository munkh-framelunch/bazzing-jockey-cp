<template>
  <div class="big-wrapper">
    <div id="cp1-section4" class="apply-header">
      <div class="wrapper">
        <div class="apply-header-inner">
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
          <div class="apply-item anime trigger hide-fade hide-down delay2">
            <div class="apply-item-number font-en">STEP 2</div>
            <div class="apply-item-body">
              <div class="apply-text">
                大井競馬開催日に投稿されるキャンペーンツイートで<br />
                勝利ジョッキーを予想！<br />
                大井所属騎手が勝つと思ったら<span class="is-blue"
                  >｢リツイート」</span
                ><br />
                大井以外の騎手が勝つと思ったら<span class="is-red"
                  >「いいね」</span
                ><br />
                を押して応募
              </div>
              <div class="cp1-howto">
                <img src="/images/pc/cp1_howto_img.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="cp1-step anime trigger hide-fade hide-down">
          <img src="/images/pc/camp1_step.png" />
        </div>
        <div class="anime trigger hide-fade hide-down">
          <div class="campaign-button is-plus show-model" data-id="#model">
            応募要項を見る
          </div>
          <div class="comment">
            ファイナルレース勝利ジョッキー２択予想キャンペーンは<br
              class="is-sp"
            />【勝利ジョッキー予想キャンペーン事務局】により実施されています。<br />
            ファイナルレース勝利ジョッキー２択予想キャンペーンについてのお問い合わせは<br
              class="is-sp"
            />株式会社クオカードではお受け出来ません。<br />
            「QUO カード Pay」もしくは「クオ・カード
            ペイ」およびそれらのロゴは<br
              class="is-sp"
            />株式会社クオカードの登録商標です。<br />
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
.cp1-howto {
  padding: 0 5% 6%;
  @media (--sp) {
    padding-bottom: 0;
  }
}
.cp1-step {
  margin: 8.5% 0;
}
</style>
