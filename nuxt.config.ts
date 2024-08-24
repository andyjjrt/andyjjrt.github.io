import fs from "fs";
import path from "path";
import axios from "axios";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],

  buildModules: ["@nuxtjs/svg"],
  target: "static",

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
          crossorigin: true,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap",
        },
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: "Javascript is required" },
      ],
    },
  },

  colorMode: {
    dataValue: "theme",
  },

  image: {
    providers: {
      GithubStatus: {
        name: "GithubStatus",
        provider: "~/providers/GithubStatus.ts",
      },
    },
  },

  compatibilityDate: "2024-08-24",
};