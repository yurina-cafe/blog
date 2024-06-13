// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/style/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt'],
  runtimeConfig: {
    public: {
      baseApi: process.env.BASE_API,
    }
  },
})