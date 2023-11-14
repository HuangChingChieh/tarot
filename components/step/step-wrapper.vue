<template>
  <div
    class="w-[360px] h-[360px] border-blue border bg-black rounded-md px-5 pt-6 pb-4 text-white flex flex-col shadow-step"
  >
    <div class="text-center">第{{ stepText }}步驟</div>

    <div class="text-xl font-black text-center mt-2 mb-6">
      <slot name="name" />
    </div>

    <div class="flex-grow overflow-x-hidden overflow-y-auto">
      <p
        v-for="(p, i) in paragraphs"
        :key="i"
        :class="i > 0 ? 'mt-6' : ''"
        class="text-justify"
      >
        {{ p }}
      </p>
    </div>
    <div class="mt-3 flex flex-row justify-end">
      <NuxtLink class="">
        <img src="/img/triangle-step.svg" />
      </NuxtLink>

      <NuxtLink class="ml-3">
        <img src="/img/triangle-step-next.svg" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  step: {
    type: [String, Number],
    default: 1,
  },
  paragraphs: {
    type: Array,
    default: () => [],
  },
});

const stepText = computed(() => ["一", "二", "三"][props.step - 1]);
</script>
