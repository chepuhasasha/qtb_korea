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
      p Что-то пошло не так! Возможна страница которую вы запрашиваете, устарела или удалена. Проверте правильность URL
      WidgetButton(size="l", @click="$router.push('/')", text="HOME")
</template>
<script lang="ts" setup></script>
<style lang="sass">
.page_not_found
  display: flex
  gap: 40px
  flex-direction: column
  height: 100vh
  width: 100vw
  background: var(--contrast_200)
  align-items: center
  justify-content: center
</style>
