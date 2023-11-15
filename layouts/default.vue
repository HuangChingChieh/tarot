<template>
  <div class="relative z-1 flex w-full h-full flex-col">
    <CommonHeader />

    <div
      class="flex-grow flex items-center justify-center overflow-hidden px-9 pb-9"
    >
      <slot />
    </div>
  </div>
</template>
