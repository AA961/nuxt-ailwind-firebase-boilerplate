// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-vuefire', '@pinia/nuxt' , '@nuxtjs/tailwindcss', 'nuxt-icon' , '@nuxtjs/eslint-module' ],
  vuefire: {
    auth: {
      enabled: true
    },
    // please here your firebbase config 
    config: {


    },
  },
})
