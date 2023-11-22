export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    return window.localStorage.category ? undefined : navigateTo("/");
  }
});
