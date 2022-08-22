<template>
  <div class="main">
    <Kv />
    <Campaign3 />
    <KvBottom :rate="rate" :items="table1 || rateHolder" />
    <Campaign1 />
    <Campaign2 />
    <Links />
    <Footer />
    <Model />
    <Model1 />
    <ModelTable1 :items="table1 || []" />
    <ModelTable2 :items="table2 || []" />
    <Menu />
  </div>
</template>

<script>
// import { SwiperSlide } from 'vue-awesome-swiper'
import Kv from '~/components/Home/Kv.vue'
import KvBottom from '~/components/Home/KvBottom.vue'
import Campaign1 from '~/components/Home/Campaign1.vue'
import Campaign2 from '~/components/Home/Campaign2.vue'
import Campaign3 from '~/components/Home/Campaign3.vue'
import Footer from '~/components/Home/Footer.vue'
import Model from '~/components/Model'
import Model1 from '~/components/Model1'
import ModelTable1 from '~/components/ModelTable1'
import ModelTable2 from '~/components/ModelTable2'
import Menu from '~/components/Home/Menu'
import Links from '~/components/Home/Links'
import AnimeTrigger from '~/components/tools/animeTrigger.js'
import { pageLoadedAnchor } from '~/components/tools/window.js'

export default {
  components: {
    // SwiperSlide,
    Kv,
    KvBottom,
    Campaign1,
    Campaign2,
    Campaign3,
    Footer,
    Menu,
    Links,
    Model,
    Model1,
    ModelTable1,
    ModelTable2,
  },
  async asyncData({ $microcms }) {
    const data1 = await $microcms.get({
      endpoint: 'final',
      queries: { limit: 40 },
    })
    const data2 = await $microcms.get({
      endpoint: 'group',
      queries: { limit: 40 },
    })
    const data3 = await $microcms.get({
      endpoint: 'rate',
      queries: { limit: 40 },
    })
    return {
      table1: data1.contents,
      table2: data2.contents,
      rate: data3.contents,
    }
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
      rateHolder: [{ recent_date: '' }, { recent_date: '0' }],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  created() {
    /*
    this.$microcms
      .get({
        endpoint: 'final',
        queries: { limit: 40 },
        // queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      */
  },
  mounted() {
    /* eslint-disable no-undef */
    $('.goto').on('click', (e) => {
      const current = $(e.currentTarget)
      const id = current.data().to
      $('html, body').animate({ scrollTop: $(`#${id}`).offset().top - 50 }, 600)
    })
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
