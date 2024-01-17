<template>
  <Transition name="page">
    <div v-if="modelValueInner" class="fixed top-0 left-0 w-full h-full">
      <div
        class="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
        @click="modelValueInner = false"
      ></div>

      <div
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[465px] w-[80%] max-h-[75vh] bg-black shadow-step border-blue border rounded-[5px] z-20 flex flex-col"
      >
        <div class="flex items-center justify-end">
          <div class="p-5 cursor-pointer" @click="modelValueInner = false">
            <div
              class="w-[18px] h-[18px] text-[18px] text-blue flex items-center justify-center"
            >
              ×
            </div>
          </div>
        </div>

        <div class="px-5 pt-3 pb-10 flex-grow overflow-y-auto">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const modelValueInner = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
