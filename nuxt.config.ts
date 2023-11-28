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

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  nitro: {
    prerender: {
      routes,
    },
  },
});
