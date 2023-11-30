<template>
  <div
    class="w-36 h-36 rounded-full border-2 border-blue flex items-center justify-center bg-black shadow-category"
    @click="dsiabled ? () => {} : $emit('click')"
    :class="{
      grayscale: dsiabled,
      'cursor-not-allowed': dsiabled,
      'cursor-pointer': !dsiabled,
    }"
  >
    <div
      class="w-28 h-28 rounded-full border border-blue flex flex-col items-center justify-center"
    >
      <div class="text-lg text-white font-bold">{{ category }}</div>
      <small v-if="dsiabled" class="text-blue text-shadow">趕工中</small>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  category: {
    type: String,
    default: "",
  },
  dsiabled: {
    type: Boolean,
    default: false,
  },
});
</script>
