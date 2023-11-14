<template>
  <img
    :src="imgSrc"
    :class="active ? 'shadow-card' : ''"
    class="rounded-[7px] max-h-[500px]"
  />
</template>

<script setup>
import { computed } from "vue";

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

const imgSrc = computed(() => `/img/card/${props.sn}.png`);
</script>
