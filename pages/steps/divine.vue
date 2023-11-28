<template>
  <div v-show="category" class="w-full max-w-screen-md">
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
          <CardTarot
            :active="isActive"
            class="bg-black mx-auto transition-opacity cursor-pointer"
            :class="{ 'opacity-0': selected && !isActive }"
            @click.native="clickCard"
          />
        </swiper-slide>
      </swiper>

      <div class="hidden md:block">
        <BtnTriangle
          :disabled="indexNow === 0"
          class="absolute left-0 top-1/2 z-10 transition-opacity"
          @click.native="slidePrev"
          :side-length="32"
          :class="{ 'opacity-0': selected }"
        />

        <BtnTriangle
          :disabled="indexNow === numberOfCards - 1"
          right
          class="absolute right-0 top-1/2 z-10 transition-opacity"
          @click.native="slideNext"
          :side-length="32"
          :class="{ 'opacity-0': selected }"
        />
      </div>
    </div>

    <CardHint @click="clickCard">{{
      selected ? "再次點擊確認" : "請選擇一張牌"
    }}</CardHint>
  </div>
</template>

<script>
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
    return {
      indexNow: initialSlide,
      numberOfCards,
      initialSlide: initialSlide,
      EffectCards,
      swiper: null,
      selectedIndex: -1,
      category: null,
    };
  },
  computed: {
    selected() {
      return this.selectedIndex >= 0;
    },
  },
  methods: {
    clickCard() {
      if (!this.selected) {
        this.selectedIndex = this.indexNow;
        this.swiper.disable();
      } else {
        const sn = Math.round(Math.random(0, 1) * 21);
        const position = Math.round(Math.random(0, 1));

        this.$router.replace(`/results/${this.category}_${sn}_${position}`);
      }
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
  created() {
    if (process.client) {
      const { category } = window.localStorage;
      if (category) this.category = category;
      else this.$router.replace("/");
    }
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
