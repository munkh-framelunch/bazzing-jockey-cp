<template>
  <div class="main">
    <Kv />
    <Campaign1 />
    <Campaign2 />
    <Links />
    <Footer />
    <Model />
    <Model1 />
    <Menu />
  </div>
</template>

<script>
// import { SwiperSlide } from 'vue-awesome-swiper'
import Kv from '~/components/Home/Kv.vue'
import Campaign1 from '~/components/Home/Campaign1.vue'
import Campaign2 from '~/components/Home/Campaign2.vue'
import Footer from '~/components/Home/Footer.vue'
import Model from '~/components/Model'
import Model1 from '~/components/Model1'
import Menu from '~/components/Home/Menu'
import Links from '~/components/Home/Links'
import AnimeTrigger from '~/components/tools/animeTrigger.js'
import { pageLoadedAnchor } from '~/components/tools/window.js'

export default {
  components: {
    // SwiperSlide,
    Kv,
    Campaign1,
    Campaign2,
    Footer,
    Menu,
    Links,
    Model,
    Model1,
  },
  data() {
    return {
      swiperOptions: {
        speed: 1200,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // Some Swiper option/callback..
        // slidesPerView: 'auto',.
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  mounted() {
    /* eslint-disable no-undef */
    $('.goto').on('click', (e) => {
      const current = $(e.currentTarget)
      const id = current.data().to
      console.log(id)
      $('html, body').animate({ scrollTop: $(`#${id}`).offset().top - 50 }, 600)
    })
    console.log('shaa')
    $('.show-model').on('click', (e) => {
      const current = $(e.currentTarget)
      const id = current.data().id
      const model = $(id)
      model.fadeIn()
    })
    $('.goto-top').on('click', () => {
      $('html, body').animate({ scrollTop: 0 }, 600)
    })
    const model1 = $('#musicModel')
    $('#musicTrigger').on('click', () => {
      model1.fadeIn()
      $('body').css({
        overflow: 'hidden',
      })
    })
    const model2 = $('#profileModel')
    $('.profile-trigger').on('click', () => {
      model2.fadeIn()
      $('body').css({
        overflow: 'hidden',
      })
    })
    AnimeTrigger()
    console.log('working')

    this.$nextTick(() => {
      if (this.$route.hash) {
        pageLoadedAnchor(this.$route.hash)
      }
    })
  },
  head() {
    return {
      title: 'TCK勝利ジョッキー予想キャンペーン',
    }
  },
}
</script>
