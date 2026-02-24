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
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&display=swap",
        },
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { innerHTML: "Javascript is required" },
      ],
    },
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
        dir: "./assets/icons",
      },
    ],
  },
  modules: ["@vueuse/nuxt", "@nuxt/ui", "@nuxt/icon", "@nuxt/image"],
});