<template lang="pug">
main.main
  BlockUser.main_user
  .main_bar
    RouterLink.main_bar_item(to="/" active-class="main_bar_item_active")
      WidgetIcon(icon="folder") 
      | HOME
    RouterLink.main_bar_item(to="/products" active-class="main_bar_item_active")
      WidgetIcon(icon="folder") 
      | PRODUCTS
    RouterLink.main_bar_item(to="/brands" active-class="main_bar_item_active")
      WidgetIcon(icon="folder") 
      | BRANDS
    RouterLink.main_bar_item(v-if="state.user?.role === 'root'" to="/users" active-class="main_bar_item_active")
      WidgetIcon(icon="folder") 
      | USERS
  .main_body
    slot
</template>
<script lang="ts" setup>
import { useUserStore } from "@/stores";
import { RouterLink } from "vue-router";
const { state } = useUserStore();

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
        path
          stroke: white
      &:hover
        background: var(--primary-100)
        path
          stroke: white

  &_body
    grid-area: 1/2/3/3
    position: relative
    width: 100%
    height: 100%
    max-width: 100%
    max-height: 100%
</style>
