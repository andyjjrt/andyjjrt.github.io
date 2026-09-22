export default defineNuxtConfig({
  compatibilityDate: "2026-02-14",
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "andyjjrt's website",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "andyjjrt's website" },
        { name: "author", content: "andyjjrt" },
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
