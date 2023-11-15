<template>
  <div class="fixed top-0 left-0 w-full h-full">
    <div class="relative w-full h-full">
      <img
        src="/img/bg_1.png"
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <img
        src="/img/bg_2.png"
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style>
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
