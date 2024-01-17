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
        :sn="theSn"
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

<script setup lang="ts">
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

const { sn, category, position } = useRoute().params;

const theCategory = typeof category === "string" ? category : category[0];
const thePosition = typeof position === "string" ? position : position[0];
const theSn = typeof sn === "string" ? sn : sn[0];

const { data } = await useAsyncData(`card_result_${sn}`, () =>
  queryContent("card", "results")
    .only(["title", theCategory])
    .where({ _path: `/card/results/${sn}` })
    .find()
);

const theCard = computed(() => data?.value?.[0]);

const title = computed(() => {
  let title = theCard?.value?.title || "";
  if (thePosition === "0" && title) title += "逆位";
  return title;
});

const description = computed(
  () => theCard?.value?.[theCategory]?.[thePosition] || ""
);

const modalOpen = ref(false);

function showDetail() {
  modalOpen.value = true;
}
</script>
