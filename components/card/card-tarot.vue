<template>
  <img
    :src="imgSrc"
    :class="active ? 'shadow-card' : ''"
    class="rounded-[7px] max-h-[50vh] md:w-100 md:max-h-[50vh] transition-shadow cursor-pointer card"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  sn: {
    type: [String, Number],
    default: "default",
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const { basePath } = useRuntimeConfig().public;
const imgSrc = computed(() => `${basePath}img/card/${props.sn}.png`);
</script>

<style lang="scss">
.card {
  background-image: radial-gradient(black 75%, transparent 90%);
}
</style>
