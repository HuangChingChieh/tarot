<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    :height="height"
    :width="sideLength"
  >
    <polygon :points="points" :style="polygonStyle" />
  </svg>
</template>

<script setup>
import { colors } from "~/tailwind.config";
const { blue } = colors;

const props = defineProps({
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

const shortSide = computed(() => props.sideLength / 2);
const height = computed(() => Math.sqrt(3) * shortSide.value);
const points = computed(
  () =>
    `0 ${height.value}, ${shortSide.value} 0 , ${props.sideLength} ${height.value}`
);
const polygonStyle = computed(() => {
  const { fill, stroke, strokeWidth } = props;
  return {
    fill: fill ? blue : "transparent",
    stroke: stroke || blue,
    strokeWidth,
  };
});
</script>
