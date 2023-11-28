<template>
  <div
    v-show="categoryClient"
    class="flex flex-col items-center justify-center"
  >
    <div class="text-white text-2xl font-black text-center mb-9">
      {{ title }}
    </div>
    <div class="flex-grow-1 h-full">
      <CardTarot
        :sn="sn"
        class="h-full"
        :class="{ 'rotate-180': position === '0' }"
        active
      />
    </div>

    <CardHint>點圖看詳細說明</CardHint>

    {{ description }}
  </div>
</template>

<script setup>
const { sn, category, position } = useRoute().params;

const { data } = await useAsyncData("card-results", () =>
  queryContent("card", "results")
    .only(["title", category])
    .where({ _path: `/card/results/${sn}` })
    .find()
);

const title = computed(() => {
  let title = data?.value?.[0]?.title || "";
  if (position === "0" && title) title += "逆位";
  return title;
});

const description = computed(
  () => data?.value?.[0]?.[category]?.[position] || ""
);

const categoryClient = ref("");
// 檢查是否有選類別
if (process.client) {
  categoryClient.value = window.localStorage.category;
  window.localStorage.removeItem("category");

  if (!categoryClient.value) {
    const router = useRouter();
    router.replace("/");
  }
}
</script>
