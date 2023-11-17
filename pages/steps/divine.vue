<template>
  <div class="w-full max-w-screen-md">
    <div class="relative md:px-8">
      <swiper
        v-model="indexNow"
        ref="swiper"
        effect="cards"
        :modules="[EffectCards]"
        space-between="50"
        :cards-effect="{
          slideShadows: false,
          perSlideOffset: 12,
          perSlideRotate: 2,
        }"
        :initial-slide="initialSlide"
        @slideChange="
          (swiper) => {
            indexNow = swiper.realIndex;
          }
        "
        @swiper="
          (swiperInstance) => {
            swiper = swiperInstance;
          }
        "
      >
        <swiper-slide
          v-for="slide in numberOfCards"
          :key="slide"
          v-slot="{ isActive }"
          class="py-6 px-4"
        >
          <CardTarot :active="isActive" class="bg-black mx-auto"
        /></swiper-slide>
      </swiper>

      <div class="hidden md:block">
        <BtnTriangle
          :disabled="indexNow === 0"
          class="absolute left-0 top-1/2 z-10"
          @click.native="slidePrev"
          :side-length="32"
        />

        <BtnTriangle
          :disabled="indexNow === numberOfCards - 1"
          right
          class="absolute right-0 top-1/2 z-10"
          @click.native="slideNext"
          :side-length="32"
        />
      </div>
    </div>

    <NuxtLink
      class="text-white flex items-center justify-center flex-col"
      to="/steps"
    >
      <div class="pt-8 pb-2.5">
        <CommonTriangle fill />
      </div>

      <span class="block">請選擇一張牌</span>
    </NuxtLink>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

export default defineComponent({
  name: "Basic",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    const numberOfCards = 10;
    const initialSlide = Math.ceil(numberOfCards / 2);
    return {
      indexNow: initialSlide,
      numberOfCards,
      initialSlide: initialSlide,
      EffectCards,
      swiper: null,
    };
  },
  methods: {
    isCardHide(index) {
      return index < 2 || index >= this.numberOfCards - 2;
    },
    cardClass(index) {
      const isCardHide = this.isCardHide(index);
      const { indexNow } = this;

      return {
        // "opacity-0": isCardHide,
        // "scale-90": Math.abs(indexNow - index) === 2,
        // "scale-95": Math.abs(indexNow - index) === 1,
      };
    },
    slidePrev() {
      const { swiper } = this;
      if (swiper) swiper.slidePrev();
    },
    slideNext() {
      const { swiper } = this;
      if (swiper) swiper.slideNext();
    },
  },
});
</script>

<style lang="scss">
.swiper {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 30% 70%,
    transparent
  );
  mask-image: linear-gradient(to right, transparent, black, transparent);
}
</style>
