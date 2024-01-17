<template>
  <VitePwaManifest />

  <div class="fixed top-0 left-0 w-full h-full">
    <div class="relative w-full h-full">
      <div
        class="absolute top-0 left-0 w-full h-full bg-[url('/img/bg_1.jpg')] bg-center bg-repeat bg-cover"
      >
        <div
          class="absolute top-0 left-0 w-full h-full z-0 bg-[url('/img/bg_2.png')] bg-center bg-repeat bg-cover"
        ></div>
      </div>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.4s, filter 0.4s;
}
.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
