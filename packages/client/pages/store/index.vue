<template lang="pug">
NuxtLayout.product
  WrapperBlock.product_main
    img(src="@/assets/images/shape1.svg", width="60")
    h1 Blur Stick
    WidgetButton(mode='ghost' size='l') Vue De Pulang
    WrapperBlock(:style='{width: "100%", justifyContent: "space-between"}')
      WidgetButton(mode='ghost') ОПТОМ
      WidgetButton купить на OZON

</template>
<script lang="ts" setup>

const images = ref([
  {title: null, url: '/images/product.png', link: null},
  {title: null, url: '/images/img.png', link: null},
])

</script>
<style lang="sass">
.product
  &_info, &_main
    flex-direction: column
    padding: 100px
    gap: 40px

  &_1, &_2, &_3
    padding: 40px 100px
    gap: 40px
  &_logo_line
    grid-area: 1/1/2/7
    flex-direction: column
    padding: 0
    gap: 40px
    overflow-y: scroll
  &_main
    grid-area: 2/1/3/3
  &_shader
    grid-area: 2/3/3/7
    flex-direction: column
    padding: 0
    gap: 0
    overflow: hidden
  &_carousel
    grid-area: 4/1/5/5
    flex-direction: column
    min-height: 500px
  &_info
    grid-area: 4/5/5/7
    justify-content: space-between
  &_1
    grid-area: 3/1/4/3
    justify-content: space-between
  &_2
    grid-area: 3/3/4/5
    justify-content: space-between
  &_3
    grid-area: 3/5/4/7
    justify-content: space-between

// MOBILE
@media screen and (max-width: 760px)
  .product
    &_shader
      display: none
    &_info, &_main
      padding: 40px
      gap: 20px

// TABLET
@media screen and (min-width: 760px) and (max-width: 1100px)
  .product
      &_shader
        display: none
      &_info, &_main
        padding: 40px
        gap: 20px
</style>