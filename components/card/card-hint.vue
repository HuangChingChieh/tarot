<template>
  <div
    class="text-white flex items-center justify-center flex-col cursor-pointer"
    @click="$emit('click')"
  >
    <div class="pt-8 pb-2.5">
      <CommonTriangle fill />
    </div>

    <span class="block">
      <slot></slot>
    </span>
  </div>
</template>
