<template>
  <header
    class="py-4 md:py-7 px-4 md:px-8 md:absolute md:top-0 md:left-0 flex flex-row items-center"
  >
    <NuxtLink
      to="/"
      class="w-10 h-10 flex items-center justify-center border border-blue rounded-full shadow-category"
      ><img src="/img/home.png" width="40"
    /></NuxtLink>
    <button
      type="button"
      class="w-10 h-10 flex items-center justify-center text-blue border border-blue rounded-full shadow-category text-shadow ml-4"
      @click="$router.go(-1)"
    >
      ←
    </button>
  </header>
</template>
