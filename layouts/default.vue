<template lang="pug">
main.main
  BlockHeader
  .main_body
    WrapperGrid
      slot
    BlockFooter
</template>
<style lang="sass">
.main
  display: flex
  flex-direction: column
  width: 100vw
  height: 100vh
  &_body
    width: 100%
    height: 100%
    max-width: 100%
    max-height: 100%
    overflow-y: auto
</style>