<template>
  <div>
    <StepCategory
      category="整體運勢"
      class="-rotate-[20.151deg] -translate-x-1/3 md:-translate-x-3/4"
      @click="setCategory('整體運勢')"
    />
    <StepCategory
      category="工作學業"
      class="rotate-[35.024deg] translate-x-full md:translate-x-[125%] translate-y-1/3"
      @click="setCategory('工作學業')"
    />
    <StepCategory
      category="感情發展"
      class="-rotate-[19.224deg] -translate-x-full md:-translate-x-[125%]"
      @click="setCategory('感情發展')"
    />
  </div>
</template>

<script setup>
const router = useRouter();

const setCategory = async (category = "") => {
  if (window && category) {
    window.localStorage.setItem("category", category);
    await router.push(`/steps/divine/`);
  }
};
</script>
