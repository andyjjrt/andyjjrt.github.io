// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/color-mode'],
  buildModules: ["@nuxtjs/svg"],
  target: 'static',
  app: {
    head: {
      title: 'Andy\'s website',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Andy Hung\'s website' },
        { name: 'description', content: '洪晙宸的個人網站' },
        { name: 'author', content: '洪晙宸' },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>Javascript is required</noscript>
        { children: 'Javascript is required' }
      ]
    }
  }
}

