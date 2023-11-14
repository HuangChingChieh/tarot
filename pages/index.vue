<template>
  <div class="flex items-center justify-center flex-col h-full">
    <NuxtLink class="h-2/3" to="/steps">
      <CardTarot active class="h-full" />
    </NuxtLink>

    <NuxtLink
      class="text-white flex items-center justify-center flex-col"
      to="/steps"
    >
      <img
        src="/img/triangle.svg"
        alt="點我開始"
        width="20"
        class="pt-8 pb-2.5"
      />
      <span class="block">點我開始</span>
    </NuxtLink>
  </div>
</template>
