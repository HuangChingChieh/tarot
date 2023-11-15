<template>
  <div class="flex items-center justify-center flex-col">
    <NuxtLink to="/steps">
      <CardTarot active />
    </NuxtLink>

    <NuxtLink
      class="text-white flex items-center justify-center flex-col"
      to="/steps"
    >
      <div class="pt-8 pb-2.5">
        <CommonTriangle fill />
      </div>

      <span class="block">點我開始</span>
    </NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "no-header",
});
</script>
