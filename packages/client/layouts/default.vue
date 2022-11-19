<template lang="pug">
main.main
  BlockHeader(
    :links="[ { name: $t('header.store'), link: '/store' }, { name: $t('header.marketing'), link: '/marketing' }, { name: $t('header.certification'), link: '/certification' }, ]"
  )
  .main_body
    WrapperGrid(cols="repeat(6, 1fr)")
      slot
    BlockFooter
</template>
<script lang="ts" setup>
</script>
<style lang="sass">
.main
  display: flex
  flex-direction: column
  background: var(--contrast-300)
  gap: 1px
  width: 100vw
  height: 100vh
  &_body
    width: 100%
    height: 100%
    max-width: 100%
    max-height: 100%
    overflow-y: auto
</style>