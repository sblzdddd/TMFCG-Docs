export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  components: false,
  imports: {
    autoImport: true,
  },
  typescript: {
    shim: false,
  },
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
  },

  content: {
    build: {
      markdown: {
        remarkPlugins: {
          "remark-math": {},
        },
        rehypePlugins: {
          "rehype-mathjax": {},
        },
        toc: {
          depth: 3,
          searchDepth: 3,
        },
      },
    },
  },

  // global css
  css: ["~/styles/global.css"],

  // structure out the code
  srcDir: "src/",

  experimental: {
    asyncContext: true,
  },

  modules: ["@nuxt/icon", "@nuxtjs/tailwindcss", "vuetify-nuxt-module", "@nuxt/content"],

  vuetify: {
    moduleOptions: {},
    vuetifyOptions: "./vuetify.config.ts",
  },
});
