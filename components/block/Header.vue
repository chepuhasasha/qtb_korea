<template lang="pug">
WrapperBlock.header(
  tag="header",
)
  .header_imglink
    NuxtLink(to="/")
      img(src="@/assets/images/logo_min.svg")
  .header_links
    NuxtLink.header_link(v-for="link in links" :key="link.link" :to="link.link") {{link.name}}
</template>
<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  links: {type: Array as PropType<{name: string, link: string}[]>, default: () => [{name: "SHOP", link: '/shop'}]}
})
</script>
<style lang="sass">
.header
  flex-direction: row
  gap: 30px
  padding: 20px 100px
  height: max-content
  img
    width: 200px  
  &_links
    display: flex
    gap: 20px
    align-items: center
    border-left: 1px solid var(--contrast-300)
    padding: 0 30px
  &_imglink
    display: flex
    align-items: center
    a
      display: flex
      align-items: center
      height: 100%
  &_link
    display: flex
    height: 100%
    align-items: center
    font: var(--font-200)
    text-decoration: none
    border-bottom: 1px dashed var(--contrast-200)
    color: var(--contrast-400)
    &:hover
      border-bottom: 1px dashed var(--contrast-300)
      color: var(--contrast-500)
    
@media screen and (max-width: 900px)
  .header
    padding: 20px
    gap: 20px
    &_links
      padding: 0 20px
    img
      width: 130px
</style>