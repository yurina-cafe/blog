// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      DEV_URL: process.env.NUXT_ENV_DEV_URL,
      PROD_URL: process.env.NUXT_ENV_PROD_URL
    }
  }
})
