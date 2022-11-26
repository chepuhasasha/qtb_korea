<template lang="pug">
.page
  TransitionGroup.page_list(name="list-absolute" tag="div")
    slot
  .page_bar
    slot(name='bar')
</template>
<style lang="sass">
.page
  display: grid
  grid-template-rows: max-content 1fr
  gap: 2px
  font: var(--tont-100)
  color: var(--text-color-100)
  height: 100%
  &_list
    display: flex
    flex-direction: column
    gap: 2px
    overflow-y: auto
    height: 100%
  &_bar
    display: flex
    align-items: center
    gap: 10px
    grid-area: 1/1/2/2
    background: var(--contrast-200)
    padding: 10px
    height: max-content
    .input
      width: 100%
</style>
