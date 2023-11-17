<template>
  <CommonTriangle
    class="-rotate-90 cursor-pointer transition-all"
    :class="classObj"
    :side-length="sideLength"
    :fill="fill"
    :stroke="stroke"
    :strokeWidth="strokeWidth"
  />
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
  sideLength: {
    type: Number,
    default: 20,
  },
  fill: {
    type: Boolean,
    default: false,
  },
  stroke: {
    type: String,
    default: "",
  },
  strokeWidth: {
    type: Number,
    default: 1,
  },
});

const classObj = computed(() => {
  const { disabled, right } = props;
  return {
    "opacity-75": disabled,
    "drop-shadow-triangle": !disabled,
    "-rotate-90": !right,
    "rotate-90": right,
  };
});
</script>
