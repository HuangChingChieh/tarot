<template>
  <div class="fixed top-0 left-0 w-full h-full">
    <div class="relative w-full h-full">
      <img
        src="/img/bg_1.png"
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <img
        src="/img/bg_2.png"
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div class="relative z-1 flex w-full h-full flex-col">
        <CommonHeader />

        <div class="flex-grow flex items-center justify-center overflow-hidden">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
