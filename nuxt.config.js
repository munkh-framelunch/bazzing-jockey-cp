import path from 'path'
/* env 読み込み */
require('dotenv').config({ path: path.join(__dirname, '../.env') })
const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = process.env

export default {
  ssr: false,
  env: {
    /* API */
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID,
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'ja',
    },
    title: 'TCK勝利ジョッキー予想キャンペーン',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        'http-equiv': 'Pragma',
        content: 'no-cache',
      },
      {
        'http-equiv': 'Cache-Control',
        content: 'no-cache',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'TCK勝利ジョッキー予想キャンペーン',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://twinkle35th.com/',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://www.tokyocitykeiba.com/wp-content/themes/tck/resources/images/base/icon_logo.png',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'TCK勝利ジョッキー予想キャンペーン',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '開催日に毎日実施する「ファイナルレース勝利ジョッキー２択予想キャンペーン」では1開催単位での予想的中数が多いほど当選確率がアップ！重賞レースが対象の「TCK重賞勝利ジョッキーを当てろ！キャンペーン」では勝利ジョッキーサイン入りゴーグルが当たります！',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '開催日に毎日実施する「ファイナルレース勝利ジョッキー２択予想キャンペーン」では1開催単位での予想的中数が多いほど当選確率がアップ！重賞レースが対象の「TCK重賞勝利ジョッキーを当てろ！キャンペーン」では勝利ジョッキーサイン入りゴーグルが当たります！',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '【TCK、東京シティ競馬、ファイナルレース、重賞、勝馬予想、ジョッキー、大井競馬場、クオカード、Twitterキャンペーン】',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://www.tokyocitykeiba.com/wp-content/themes/tck/resources/images/base/icon_logo.png',
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'robots', content: 'noindex' },
    ],
    script: [
      { src: '//polyfill.io/v3/polyfill.min.js' },
      {
        src: 'https://code.jquery.com/jquery-3.5.1.min.js',
        type: 'text/javascript',
      },
      {
        src: '//a.o2u.jp?id=l01Udl4Vl+7MPWTZ1IESXOM39ToAhft5',
        async: 'true',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://www.tokyocitykeiba.com/wp-content/themes/tck/favicon.ico',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
      },
    ],
  },

  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/app.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/swiper.js', ssr: true },
    { src: '~/plugins/polyfill.js', mode: 'client' },
    { src: '~/plugins/vue-youtube.js' },
    { src: '~/plugins/vue-gtag.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-microcms-module',
    [
      '@nuxtjs/google-gtag',
      {
        id: 'G-RPC0FBM72V',
        debug: true,
      },
    ],
  ],
  microcms: {
    options: {
      serviceDomain: 'swe5pp46ro', // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
      apiKey: 'f5171897bbb3402aa93fc225bdc0994630a5',
    },
    mode: 'all',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // filenames: {
    //   app: () => '[name].js',
    //   chunk: () => '[name].js',
    //   css: () => '[name].js',
    //   img: () => '[path][name].[ext]',
    //   font: () => '[path][name].[ext]',
    //   video: () => '[path][name].[ext]',
    // },
    postcss: {
      plugins: {
        'postcss-custom-properties': {},
        'postcss-url': false,
        'postcss-preset-env': {
          stage: 0,
          importFrom: 'assets/css/_settings.css',
        },
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
        features: {
          'nesting-rules': true,
        },
      },
    },
  },
}
