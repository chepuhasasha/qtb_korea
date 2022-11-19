<template lang="pug">
main.main
  BlockUser.main_user
  .main_bar
    RouterLink.main_bar_item(to="/" active-class="main_bar_item_active")
      WidgetIcon(icon="folder") 
      | PRODUCTS
    slot(name="bar")
  .main_body
    slot
</template>
<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>
<style lang="sass">
.main
  display: grid
  grid-template-rows: max-content 1fr
  grid-template-columns: 300px 1fr
  gap: 2px
  width: 100vw
  height: 100vh
  background: var(--contrast-100)
  &_user
    grid-area: 1/1/2/2
    width: 100%
  &_bar, &_body
    width: 100%
    height: 100%
    overflow-y: auto
  &_bar
    padding: 20px
    background: var(--contrast-200)
    grid-area: 2/1/3/2
    &_item
      display: flex
      align-items: center
      gap: 10px
      font: var(--font-100)
      color: var(--text-color-100)
      background: var(--contrast-200)
      padding: 10px
      margin-bottom: 10px
      border-radius: 6px
      path
        stroke: var(--text-color-100)
      &_active
        background: var(--contrast-300)
      &:hover
        background: var(--primary-100)

  &_body
    grid-area: 1/2/3/3
</style>