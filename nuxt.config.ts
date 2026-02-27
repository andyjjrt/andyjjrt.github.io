export default defineNuxtConfig({
  compatibilityDate: "2026-02-14",
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Andy's website",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Andy Hung's website" },
        { name: "description", content: "洪晙宸的個人網站" },
        { name: "author", content: "洪晙宸" },
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { innerHTML: "Javascript is required" },
      ],
    },
  },

  routeRules: {
    "/links/**": { appLayout: false },
  },

  icon: {
    mode: "css",
    cssLayer: "base",
    provider: "iconify",
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/ui"
  ],

  devtools: {
    enabled: true,
  },
});
