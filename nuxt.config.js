const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#09ff00" },

  /*
  ** Global CSS
  */
  css: [
    { src: "~/assets/styles/main.scss", lang: "scss" }
    /*   { src: "font-awesome/scss/font-awesome.scss", lang: "scss" } */
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~plugins/vue-slideout.js", ssr: false },
    { src: '~plugins/social.js', ssr: true },
    {src: '~/plugins/Vuelidate', ssr: false }
  /*   { src: "~/plugins/font-awesome" } */
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    "@nuxtjs/font-awesome",
    ['@nuxtjs/google-analytics', {
      id: 'UA-122855676-1'
    }]

    //"@nuxtjs/bulma",
    //['nuxt-sass-resources-loader', './assets/styles/main.sass']
  ],
  /*
  ** Axios module configuration
  */
  
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },
  proxy: {
    '/api/': 'http://localhost:8080'
  },

  /*
  ** Build configuration
  */

  build: {
    vendor: [
      'vuelidate'
    ],
    postcss: {
      plugins: {
        "postcss-cssnext": {
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
