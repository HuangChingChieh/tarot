<template>
  <div
    class="w-36 h-36 rounded-full border-2 border-blue flex items-center justify-center bg-black shadow-category cursor-pointer"
    @click="$emit('click')"
  >
    <div
      class="w-28 h-28 rounded-full border border-blue flex items-center justify-center"
    >
      <div class="text-lg text-white font-bold">{{ category }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  category: {
    type: String,
    default: "",
  },
});
</script>
