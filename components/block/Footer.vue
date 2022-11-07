<template lang="pug">
footer.footer
  .footer_block
    img(src='@/assets/images/circle_light_shape.svg' width="50")
    img(src='@/assets/images/logo_min_light.svg' width="200")
    span © QTB Korea LLC  2018 Gangnam-gu 311, 1206 Seoul, Republic of Korea 
  .footer_block.footer_block__end
    NuxtLink(to='tel:+821080280599') +821080280599
    NuxtLink(to='mailto:info@qtbkorea.com') info@qtbkorea.com
    h3 CEO LAKIENKO MARIA
</template>
<style lang="sass">
.footer
  display: flex
  padding: 100px
  gap: 40px
  background: var(--contrast-500)
  height: max-content
  *
    color: var(--contrast-300)
  &_block
    display: flex
    flex-direction: column
    gap: 10px
    width: 100%
    &__end
      align-items: flex-end
      justify-content: flex-end
    a
      font: var(--font-200)
      text-decoration: none
      &:hover
        color: var(--contrast-100)

@media screen and (max-width: 900px)
  .footer
    flex-direction: column
    padding: 20px
</style>