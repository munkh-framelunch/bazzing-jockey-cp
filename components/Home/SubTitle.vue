<template>
  <div class="title" :class="{ isWhite }">
    <div class="title-line"></div>
    <div class="title-center">
      <img src="/images/pc/subttl_bg.png" />
      <div class="title-center-text">
        {{ text }}
      </div>
    </div>
    <div class="title-line"></div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'text',
    },
    isWhite: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped lang="postcss">
.title {
  display: flex;
  align-items: center;
}
.title-line {
  flex-grow: 1;
  height: 1px;
  background-color: #000;
  opacity: 0.5;
}
.title-center {
  position: relative;
  width: 300px;
  margin: 0 10px;
  @media (--wide) {
    width: 22vw;
  }
  @media (--sp) {
    width: 48vw;
  }
}
.title-center-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  letter-spacing: 4px;
  font-weight: bold;
  @media (--wide) {
    font-size: 1.7vw;
    letter-spacing: 0.2vw;
  }
  @media (--sp) {
    font-size: 4.2vw;
    letter-spacing: 0.5vw;
  }
}
.isWhite .title-line {
  background-color: #fff;
}
</style>
