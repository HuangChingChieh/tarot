<template>
  <CommonBody>
    <div>
      <StepCategory
        :category="categoryMap.whole"
        class="-rotate-[20.151deg] -translate-x-1/3 md:-translate-x-3/4"
        @click="setCategory('whole')"
      />
      <StepCategory
        :category="categoryMap.work"
        class="rotate-[35.024deg] translate-x-full md:translate-x-[125%] translate-y-1/3"
        dsiabled
      />
      <StepCategory
        :category="categoryMap.love"
        class="-rotate-[19.224deg] -translate-x-full md:-translate-x-[125%]"
        dsiabled
      />
    </div>
  </CommonBody>
</template>

<script setup lang="ts">
import categoryMap from "~/utils/category-map";

const router = useRouter();

const setCategory = (category = "") => {
  if (window && category) {
    window.localStorage.setItem("category", category);
    router.replace(`/steps/divine/`);
  }
};
</script>
