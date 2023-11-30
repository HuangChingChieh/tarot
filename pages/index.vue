<template>
  <CommonBody class="flex items-center justify-center flex-col">
    <NuxtLink to="/steps">
      <CardTarot active />
    </NuxtLink>

    <NuxtLink to="/steps">
      <CardHint>點我開始</CardHint>
    </NuxtLink>

    <div>
      <ModalCommon v-model="welcomeModal">
        <div class="text-white">
          <p class="mb-3">
            嗨！歡迎來到流浪占所！在你開始占算之前，想先跟你說明一些事情。
          </p>
          <p>
            算命什麼的絕對是僅供參考，命運是掌握在自己手中，請勿太看重這裡的占算結果。若你想占算的問題與困難，已經使你的身心狀況超出控制，請尋求<a
              href="https://www.mohw.gov.tw/cp-88-212-1-22.html"
              target="_blank"
              rel="noopener noreferrer"
              >專業資源協助</a
            >。
          </p>
        </div>
      </ModalCommon>
    </div>
  </CommonBody>
</template>

<script setup>
const welcomeModal = ref(true);
</script>
