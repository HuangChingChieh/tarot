// https://nuxt.com/docs/api/configuration/nuxt-config
import { VitePWA } from "vite-plugin-pwa";
import categoryMap from "./utils/category-map";
const routes = new Array();

Object.keys(categoryMap).forEach((category) => {
  for (let i = 0; i <= 21; i++) {
    routes.push(`/results/${category}_${i}_0`);
    routes.push(`/results/${category}_${i}_1`);
  }
});

const themeColor = "#000000";
const appName = "流浪占所";
const title = `免費線上塔羅抽牌占卜｜${appName}`;
const description =
  "嗨！歡迎來到流浪占所！在你開始占算之前，想先跟你說明一些事情。算命什麼的絕對是僅供參考，命運是掌握在自己手中，請勿太看重這裡的占算結果。若你想占算的問題與困難，已經使你的身心狀況超出控制，請尋求專業資源協助。";

const baseURL = "/tarot/";
const basePath = `https://huangchingchieh.github.io${baseURL}`;

export default defineNuxtConfig({
  pwa: {
    registerType: "autoUpdate",
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: appName,
      short_name: appName,
      description: description,
      theme_color: themeColor,
      icons: [
        {
          src: "pwa-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@vite-pwa/nuxt"],
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
      title,
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        { name: "description", content: description },
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
          content: title,
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
          content: description,
        },
        {
          name: "theme-color",
          content: themeColor,
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
        {
          rel: "apple-touch-icon",
          href: `/pwa-192x192.png`,
        },
        {
          rel: "mask-icon",
          href: `/maskable-icon-512x512.png`,
          color: themeColor,
        },
      ],
    },
  },
  generate: {
    routes,
  },
});
