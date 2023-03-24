<template>
  <div class="kv">
    <img src="/images/pc/kv_old.jpg" class="is-pc" />
    <img src="/images/sp/kv_old.jpg" class="is-sp" />
    <div class="gold-banner goto" data-to="table-section">
      <img src="/images/pc/kv_bnr.png" />
    </div>
  </div>
</template>
<style scoped lang="postcss">
.test {
  color: #fff;
}
.kv {
  position: relative;
  @media (--sp) {
    padding-top: 50px;
  }
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
