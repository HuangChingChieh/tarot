<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-white text-2xl font-black text-center mb-9">
      {{ data.title }}
    </div>
    <div class="flex-grow-1 h-full">
      <CardTarot :sn="sn" class="h-full" active />
    </div>

    <CardHint>點圖看詳細說明</CardHint>
  </div>
</template>

<script setup>
const { sn } = useRoute().params;
const { data } = await useAsyncData("card-results", async () => {
  const path = `/card/results/${sn}.json`;
  return process.server ? require(`../../public${path}`) : $fetch(path);
});

const category = ref("");

onBeforeMount(() => {
  if (process.client) category.value = window.localStorage.category;
});

onBeforeMount(() => {
  if (process.client) window.localStorage.removeItem("category");
});

definePageMeta({
  middleware: ["check-category"],
});
</script>
