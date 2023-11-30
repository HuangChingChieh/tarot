// https://nuxt.com/docs/api/configuration/nuxt-config
import categoryMap from "./utils/category-map";
const routes = new Array();

const categories = categoryMap();
Object.keys(categories).forEach((category) => {
  for (let i = 0; i <= 21; i++) {
    routes.push(`/results/${category}_${i}_0`);
    routes.push(`/results/${category}_${i}_1`);
  }
});

const baseURL = "/tarot/";
const basePath = `https://huangchingchieh.github.io${baseURL}`;

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      basePath,
    },
  },
  app: {
    baseURL,
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      title: "免費線上塔羅抽牌占卜｜流浪占所",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0, user-scalable=no",
      meta: [
        {
          "http-equiv": "X-UA-Compatible",
          content: "ie=edge",
        },
        {
          "http-equiv": "Cache-control",
          content: "NO-CACHE",
        },
        {
          property: "og:title",
          content: "免費線上塔羅抽牌占卜｜流浪占所",
        },
        {
          property: "og:url",
          content: basePath,
        },
        {
          property: "og:image",
          content: `${basePath}img/og-image.png`,
        },
        {
          property: "og:description",
          content:
            "嗨！歡迎來到流浪占所！在你開始占算之前，想先跟你說明一些事情。算命什麼的絕對是僅供參考，命運是掌握在自己手中，請勿太看重這裡的占算結果。若你想占算的問題與困難，已經使你的身心狀況超出控制，請尋求專業資源協助。",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: basePath,
        },
        {
          rel: "shortcut icon",
          href: `/favicon.ico`,
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes,
    },
  },
});
