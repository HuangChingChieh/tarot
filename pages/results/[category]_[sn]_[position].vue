<template>
  <CommonBody
    v-show="categoryClient"
    class="flex flex-col items-center justify-center"
  >
    <div class="text-white text-2xl font-black text-center mb-9">
      {{ title }}
    </div>
    <div class="flex-grow-1">
      <CardTarot
        :sn="sn"
        :class="{ 'rotate-180': position === '0' }"
        active
        @click.native="showDetail"
      />
    </div>

    <CardHint>點圖看詳細說明</CardHint>

    <ModalCommon v-model="modalOpen">
      <div class="text-white">{{ description }}</div>
    </ModalCommon>
  </CommonBody>
</template>

<script setup>
const { sn, category, position } = useRoute().params;

const { data } = await useAsyncData(
  "card-results",
  () =>
    queryContent("card", "results")
      .only(["title", category])
      .where({ _path: `/card/results/${sn}` })
      .find(),
  { watch: [sn, category, position] }
);

const modalOpen = ref(false);

const theCard = computed(() => data?.value?.[0]);

const title = computed(() => {
  let title = theCard?.value?.title || "";
  if (position === "0" && title) title += "逆位";
  return title;
});

const description = computed(
  () => theCard?.value?.[category]?.[position] || ""
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

function showDetail() {
  modalOpen.value = true;
}
</script>
