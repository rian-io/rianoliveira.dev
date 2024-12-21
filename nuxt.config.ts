import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'mask-icon', href: 'assets/favicon_package/safari-pinned-tab.svg', color: '#5bbad5' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'assets/favicon_package/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'assets/favicon_package/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'assets/favicon_package/favicon-16x16.png' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap' }
      ]
    }
  },

  css: [
    'assets/css/global.css'
  ],

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
  },

  content: {
    navigation: {
      fields: ['date']
    }
  },

  compatibilityDate: '2024-12-21'
})