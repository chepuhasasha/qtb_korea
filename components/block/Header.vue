<template lang="pug">
WrapperBlock.header(
  tag="header",
  :column="false",
  padding="20px 100px",
  gap="30px",
  alignItems="center"
)
  NuxtLink(to="/")
    img(src="@/assets/images/logo_min.svg", width="200")
  .header_links
    NuxtLink.header_link(to="/admin") SHOP
</template>
<style lang="sass">
.header
  &_links
    display: flex
    gap: 20px
    align-items: center
    border-left: 1px solid var(--contrast-300)
    padding: 0 30px
  &_link
    font: var(--font-200)
    text-decoration: none
    padding: 10px 0
    border-bottom: 1px dashed var(--contrast-200)
    color: var(--contrast-400)
    &:hover
      border-bottom: 1px dashed var(--contrast-300)
      color: var(--contrast-500)
</style>