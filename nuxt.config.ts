// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style/global.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  runtimeConfig: {
    public: {
      baseApi: process.env.BASE_API,
    },
  },
})
