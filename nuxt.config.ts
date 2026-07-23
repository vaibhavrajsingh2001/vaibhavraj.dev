export default defineNuxtConfig({
  compatibilityDate: '2026-07-23',
  ssr: true,

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-seo-utils',
    '@nuxt/eslint',
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    fonts: false,
  },

  site: {
    url: 'https://vaibhavraj.dev',
    name: 'Vaibhav Raj Singh',
    description:
      'Personal portfolio of Vaibhav Raj Singh, a full stack developer building thoughtful web experiences.',
    defaultLocale: 'en',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'preload', href: '/developer.svg', as: 'image', type: 'image/svg+xml' },
      ],
      meta: [
        { name: 'author', content: 'Vaibhav Raj Singh' },
        { name: 'color-scheme', content: 'dark light' },
      ],
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },

  routeRules: {
    '/': {
      prerender: true,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    },
    '/resume': {
      redirect: {
        to: '/vaibhav-raj-singh-resume.pdf',
        statusCode: 301,
      },
    },
    '/**': {
      headers: {
        'x-content-type-options': 'nosniff',
        'referrer-policy': 'strict-origin-when-cross-origin',
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt'],
    },
  },

  sitemap: {
    zeroRuntime: true,
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  devtools: {
    enabled: false,
  },
})
