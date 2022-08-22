<template>
  <div id="model4" class="model">
    <div class="model_bg"></div>
    <div class="table-model-wrapper">
      <div class="table-model-head">
        重賞レース結果
        <div class="table-model-close"></div>
      </div>
      <div class="table-model-scroll">
        <div class="table-head">
          <div class="td th">レース開催日</div>
          <div class="td th">レース名</div>
          <div class="td th">勝利騎手</div>
          <div class="td th">所属</div>
        </div>
        <div class="table-model-inside">
          <div v-for="(item, k) in items" :key="k" class="table-row">
            <div class="td">{{ item.date }}</div>
            <div class="td">{{ item.race_name }}</div>
            <div class="td">{{ item.jockey_name }}</div>
            <div class="td">{{ item.place }}</div>
          </div>
        </div>
      </div>
      <a
        href="https://www.tokyocitykeiba.com/data/jockey/"
        target="_blank"
        class="table-model-button"
      >
        TCK所属ジョッキーのプロフィールを見る
      </a>
    </div>
  </div>
</template>
<script>
/* eslin-disable */
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    /* eslint-disable no-undef */
    const model = $('.model')
    const modelBg = $('.model_bg')
    const modelClose = $('.table-model-close')

    modelBg.on('click', () => {
      model.fadeOut()
      $('body').removeAttr('style')
    })
    modelClose.on('click', () => {
      model.fadeOut()
      $('body').removeAttr('style')
    })
  },
}
</script>

<style lang="postcss" scoped>
.model {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  display: none;
}
.model_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 0;
}
.td {
  &:nth-child(1) {
    width: 22%;
    @media (--sp) {
      width: 26%;
    }
  }
  &:nth-child(2) {
    width: 39%;
    @media (--sp) {
      width: 43%;
      white-space: nowrap;
    }
  }
  &:nth-child(3) {
    width: 21%;
  }
  &:nth-child(4) {
    width: 18%;
    @media (--sp) {
      width: 10%;
    }
  }
}
</style>
