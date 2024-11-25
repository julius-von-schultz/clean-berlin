// https://nuxt.com/docs/api/configuration/nuxt-config
import { availableLocales } from './i18n.config'

const baseURL = process.env.BASE_URL || 'http://localhost:3000'

const languageCodes = (process.env.LANGUAGE_CODES || 'en').split(',')

export const locales = availableLocales.filter((local: any) =>
  languageCodes.includes(local.code),
)

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  ssr: true,

  components: {
    global: true,
    // ignore: ['**/*.story.vue'],
    dirs: [{ path: '~/components', pathPrefix: false }],
  },
  devtools: { enabled: true },

  css: ['@/assets/scss/main.scss'],

  /*
   ** Runtime Configuration
   **
   ** you can access these properties with the $config plugin
   ** see: https://nuxt.com/docs/guide/going-further/runtime-config#runtime-config
   */
  runtimeConfig: {
    public: {
      baseURL,
    },
  },
  compatibilityDate: '2024-04-03',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  i18n: {
    baseUrl: baseURL,
    defaultLocale: process.env.DEFAULT_LANGUAGE_CODE,
    locales,
    strategy: 'no_prefix',
    langDir: 'i18n',
    detectBrowserLanguage: {
      cookieSecure: true,
      useCookie: true,
      cookieKey: 'i18nLanguage',
    },
  },
})
