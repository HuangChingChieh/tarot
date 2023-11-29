<template>
  <CommonBody>
    <StepWrapper
      :paragraphs="[
        '雖然線上抽牌較難有客製化的解釋，但先想好問題仍然會影響你如何看待占算結果。',
        '試著問開放性問題、有條件性的假設或是請求建議，而非黑白分明的是非題。',
        '例如比起問「對方是否會答應我的告白」，你可以試著詢問「怎麼做才能讓他與我的關係加溫」。',
      ]"
      step="2"
      last="/steps/"
      next="/steps/3/"
    >
      <template #name>問問題</template>
    </StepWrapper>
  </CommonBody>
</template>
