<template>
  <div class="w-full max-w-screen-md">
    <div class="relative md:px-8">
      <swiper
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
          (swiper:SwiperType) => {
            indexNow = swiper.realIndex;
          }
        "
        @swiper="
          (swiperInstance:SwiperType) => {
            swiper = swiperInstance;
          }
        "
        class="md:mask-image mask-image-sm"
      >
        <swiper-slide
          v-for="slide in numberOfCards"
          :key="slide"
          v-slot="{ isActive }"
          class="py-6"
        >
          <CardTarot
            :active="isActive"
            class="bg-black mx-auto transition-opacity cursor-pointer"
            :class="{ 'opacity-0': selected && !isActive }"
            @click.native="clickCard"
          />
        </swiper-slide>
      </swiper>

      <div class="hidden md:block">
        <Transition name="page">
          <BtnTriangle
            v-if="!selected"
            :disabled="indexNow === 0"
            class="absolute left-0 top-1/2 z-10 transition-opacity"
            @click.native="slidePrev"
            :side-length="32"
          />
        </Transition>

        <Transition name="page">
          <BtnTriangle
            v-if="!selected"
            :disabled="indexNow === numberOfCards - 1"
            right
            class="absolute right-0 top-1/2 z-10 transition-opacity"
            @click.native="slideNext"
            :side-length="32"
          />
        </Transition>
      </div>
    </div>

    <div v-show="category" class="text-center relative">
      <CardHint class="-mt-6"
        >{{ selected ? "再次點擊確認" : "請選擇一張牌" }}
      </CardHint>

      <Transition name="page">
        <button
          v-if="selected"
          type="button"
          class="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 text-white border border-blue shadow-step text-sm rounded-[5px] bg-black"
          @click="cancelSelect"
        >
          重新選擇
        </button>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import type { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

export default defineNuxtComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    const numberOfCards = 10;
    const initialSlide = Math.ceil(numberOfCards / 2);
    const swiper: SwiperType | undefined = undefined;

    return {
      indexNow: initialSlide,
      numberOfCards,
      initialSlide,
      EffectCards,
      swiper,
      selectedIndex: -1,
      category: process.client ? window.localStorage.category || "" : "",
    };
  },
  computed: {
    selected() {
      return this.selectedIndex >= 0;
    },
  },
  methods: {
    clickCard() {
      if (!this.category) return;

      if (!this.selected) {
        this.selectedIndex = this.indexNow;

        const { swiper } = this;
        if (swiper) (swiper as SwiperType).disable();
      } else {
        const sn = Math.round(Math.random() * 21);
        const position = Math.round(Math.random());

        this.$router.replace(`/results/${this.category}_${sn}_${position}`);
      }
    },
    slidePrev() {
      const { swiper } = this;
      if (swiper) (swiper as SwiperType).slidePrev();
    },
    slideNext() {
      const { swiper } = this;
      if (swiper) (swiper as SwiperType).slideNext();
    },
    cancelSelect() {
      this.selectedIndex = -1;

      const { swiper } = this;
      if (swiper) (swiper as SwiperType).enable();
    },
  },
  created() {
    if (process.client && !window.localStorage.category) {
      this.$router.replace("/");
    }
  },
});
</script>
