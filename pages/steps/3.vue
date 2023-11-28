<template>
  <div>
    <StepCategory
      :category="categories.whole"
      class="-rotate-[20.151deg] -translate-x-1/3 md:-translate-x-3/4"
      @click="setCategory('whole')"
    />
    <StepCategory
      :category="categories.work"
      class="rotate-[35.024deg] translate-x-full md:translate-x-[125%] translate-y-1/3"
      @click="setCategory('work')"
    />
    <StepCategory
      :category="categories.love"
      class="-rotate-[19.224deg] -translate-x-full md:-translate-x-[125%]"
      @click="setCategory('love')"
    />
  </div>
</template>

<script setup>
const router = useRouter();
const categories = categoryMap();

const setCategory = async (category = "") => {
  if (window && category) {
    window.localStorage.setItem("category", category);
    await router.replace(`/steps/divine/`);
  }
};
</script>
