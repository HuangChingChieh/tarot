<template>
  <div class="relative z-1 flex w-full h-full flex-col">
    <CommonHeader v-if="$route.path !== '/'" />

    <div
      class="flex-grow flex items-center justify-center overflow-hidden px-9 py-9"
    >
      <slot></slot>
    </div>
  </div>
</template>
