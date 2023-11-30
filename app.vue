<template>
  <div class="fixed top-0 left-0 w-full h-full">
    <div class="relative w-full h-full">
      <div
        class="absolute top-0 left-0 w-full h-full bg-[url('/img/bg_1.jpg')] bg-center bg-repeat bg-cover"
      >
        <div class="glitch absolute top-0 left-0 w-full h-full">
          <div
            class="absolute top-0 left-0 w-full h-full z-0 bg-[url('/img/bg_2.png')] bg-center bg-repeat bg-cover"
          ></div>
          <div
            class="absolute top-0 left-0 w-full h-full z-0 bg-[url('/img/bg_2.png')] bg-center bg-repeat bg-cover"
          ></div>
          <div
            class="absolute top-0 left-0 w-full h-full z-0 bg-[url('/img/bg_2.png')] bg-center bg-repeat bg-cover"
          ></div>
        </div>
      </div>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.4s, filter 0.4s;
}
.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

$duration-whole: 1.1s;
$duration-top: 1.3s;
$duration-bottom: 1.7s;

$keyframe-scale: 4;
$keyframe-percentage-start: calc(60 / $keyframe-scale) + 0%;
$keyframe-percentage-end: calc(64 / $keyframe-scale) + 0%;
$keyframe-percentage-gutter: calc((64 - 60) / (2 * $keyframe-scale)) + 0%;

.glitch {
  animation: glitch $duration-whole * $keyframe-scale linear infinite;

  :first-child {
    animation: glitchTop $duration-top * $keyframe-scale linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  :last-child {
    animation: glitchBotom $duration-bottom * $keyframe-scale linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }
}

@keyframes glitchTop {
  #{$keyframe-percentage-gutter},
  #{$keyframe-percentage-end} {
    transform: translate(2px, -2px);
  }
  #{$keyframe-percentage-end - $keyframe-percentage-start},
  #{$keyframe-percentage-start} {
    transform: translate(-2px, 2px);
  }
  #{$keyframe-percentage-end - $keyframe-percentage-gutter} {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

@keyframes glitchBotom {
  #{$keyframe-percentage-gutter},
  #{$keyframe-percentage-end} {
    transform: translate(-2px, 0);
  }
  #{$keyframe-percentage-end - $keyframe-percentage-start},
  #{$keyframe-percentage-start} {
    transform: translate(-2px, 0);
  }
  #{$keyframe-percentage-end - $keyframe-percentage-gutter} {
    transform: translate(-22px, 5px) skew(21deg);
  }
}

@keyframes glitch {
  #{$keyframe-percentage-gutter},
  #{$keyframe-percentage-end} {
    transform: translate(2px, 0) skew(0deg);
  }
  #{$keyframe-percentage-end - $keyframe-percentage-start},
  #{$keyframe-percentage-start} {
    transform: translate(-2px, 0) skew(0deg);
  }
  #{$keyframe-percentage-end - $keyframe-percentage-gutter} {
    transform: translate(0, 0) skew(5deg);
  }
}
</style>
