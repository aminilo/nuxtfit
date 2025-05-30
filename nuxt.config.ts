export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode'],
  colorMode: { classSuffix: '' },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      title: 'NuxtFit',
      meta: [
        { name: 'description', content: 'Modern fashion store built with Nuxt 3.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f8f9fa' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  }
})
