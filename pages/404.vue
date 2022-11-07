<template lang="pug">
NuxtLayout
  WrapperBlock
    .page_not_found
      WidgetWdthText(
        text="404",
        :size="150",
        :interactive="true",
        :duration="2"
      )
      WidgetButton(size="l", @click="$router.push('/')", text="GO HOME")
</template>
<script lang="ts" setup></script>
<style lang="sass">
.page_not_found
  display: flex
  gap: 40px
  flex-direction: column
  height: 100%
  background: var(--contrast_200)
  align-items: center
  justify-content: center
</style>
x