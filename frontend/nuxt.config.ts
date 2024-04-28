// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]
  ],
  imports: {
    dirs: ['stores']
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  },
  server: true,
  router: {
    middleware: ['auth']
  },
  css: ['@/assets/scss/global.scss']
})
