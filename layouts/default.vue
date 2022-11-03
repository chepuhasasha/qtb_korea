<template lang="pug">
main.main
  WrapperGrid(rows='max-content 1fr max-content')
    BlockHeader
    slot
    BlockFooter
</template>
<style lang="sass">
.main
  width: 100vw
  height: 100vh
</style>