<template>
  <div class="contact" :class="{ last }">
    <div class="wrapper">
      <div class="contact-inner">
        <div class="anime trigger hide-fade hide-down">
          <div class="big-title font-en">CONTACT</div>
          <div class="contact-desc">お問い合わせはこちら</div>
          <div class="contact-text">
            【勝利ジョッキー予想キャンペーン事務局】
          </div>
          <div class="contact-center">
            <a href="mailto:info@tck2022-jockey-cp.com" class="contact-email"
              >info@tck2022-jockey-cp.com</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    last: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped lang="postcss">
.contact {
  background-image: url('/images/pc/cp_footer.png');
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  @media (--sp) {
    background-image: url('/images/sp/cp_footer.png');
  }
}
.contact.last {
  background-image: none !important;
}
.contact-inner {
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  padding: 8% 0 13%;
  font-size: 16px;
  text-align: center;
  @media (--wide) {
    font-size: 1.1vw;
  }
  @media (--sp) {
    font-size: 3.2vw;
  }
}
.contact-desc {
  line-height: 2;
}
.contact-text {
  margin-bottom: 1%;
  font-size: 22px;
  @media (--wide) {
    font-size: 1.6vw;
  }
  @media (--sp) {
    font-size: 3.2vw;
    line-height: 2;
  }
}
.contact-email {
  color: #d70c19;
}
</style>
