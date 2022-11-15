<template lang="pug">
NuxtLayout.marketing
  WrapperBlock.marketing_h1 
    h1 WE OFFER A WIDE RANGE OF SERVICES

  BlockMask.marketing_shader2

  BlockInfo(
    :area="{ mobile: '5/1/6/7', tablet: '3/5/4/7', desktop: '4/3/5/5' }"
  )
    template(v-slot:header) Research and Project managment
    li audience analysis
    li analysis of competitors
    li forecast and solutions

  BlockInfo(
    :area="{ mobile: '6/1/7/7', tablet: '5/1/6/3', desktop: '4/5/5/7' }"
  )
    template(v-slot:header) Advertising
    li targeted advertising
    li contextual advertising
    li traffic analysis

  BlockMask.marketing_shader1(:mode="1", :shader="1")

  BlockInfo(
    :area="{ mobile: '7/1/8/7', tablet: '5/3/6/7', desktop: '5/3/6/5' }"
  )
    template(v-slot:header) Content creation and management
    li concept/scenario development
    li casting
    li photo/video shooting
    li edition and postproduction

  BlockInfo(
    :area="{ mobile: '8/1/9/7', tablet: '6/5/8/7', desktop: '5/5/6/7' }"
  )
    template(v-slot:header) Web development (Websites & Apps)
    li website creation and support
    li maintaining a catalog of goods
    li creation of e-mail newsletters

  BlockInfo(
    :area="{ mobile: '8/1/9/7', tablet: '6/5/8/7', desktop: '6/3/7/5' }"
  )
    template(v-slot:header) Social Network Service
    li target audience analysis
    li development of a promotion strategy
    li conducting advertising campaigns

  BlockInfo(
    :area="{ mobile: '8/1/9/7', tablet: '6/5/8/7', desktop: '6/5/7/7' }"
  )
    template(v-slot:header) Public Relations
    li brand positioning in the market
    li media and influencers marketing
    li analysis and moderating of brand image

</template>
<script lang="ts" setup>
</script>

<style lang="sass">
.marketing
  &_h1
    grid-area: 3/1/4/4
    h1
      // font-family: 'Montserrat'
      font-weight: 900
      background: -webkit-linear-gradient(315deg,#d342ca 25%,#647eff)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      padding: 100px
  &_logo_line
    grid-area: 1/1/2/7
    flex-direction: column
    padding: 0
    gap: 40px
    overflow-y: scroll
    img
      width: 2390px
  &_shader1
    grid-area: 3/4/4/7
    flex-direction: column
    padding: 0
    gap: 0
  &_shader2
    grid-area: 4/1/7/3
    flex-direction: column
    padding: 0
    gap: 0

// MOBILE
@media screen and (max-width: 760px)
  .marketing
    &_shader1, &_shader2
      display: none
// TABLET
@media screen and (min-width: 760px) and (max-width: 1100px)
  .marketing
    &_shader1, &_shader2
      display: none
    &_logo_line
      grid-area: 1/1/2/7
</style>