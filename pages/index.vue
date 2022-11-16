<template lang="pug">
NuxtLayout.about
  //- LOGOLINE 
  BlockLogoline
  //- ABOUT US
  BlockInfo.about_about(
    :title="$t('aboutPage.about.title')",
    :content="$t('aboutPage.about.content')",
    :button="{ text: $t('aboutPage.about.button'), link: '/' }"
  )
  //- SHADER 1
  BlockMask.about_shader1
  //- Carousel 
  BlockCarousel.about_carousel(:images="images")
  //- Cosmetic wholesale
  BlockInfo.about_wholesale(
    :title="$t('aboutPage.wholesale.title')",
    :content="$t('aboutPage.wholesale.content')",
    :button="{ text: $t('aboutPage.wholesale.button'), link: '/store' }"
  )
  //- Certification
  BlockInfo.about_certification(
    :title="$t('aboutPage.certification.title')",
    :content="$t('aboutPage.certification.content')",
    :button="{ text: $t('aboutPage.certification.button'), link: '/certification' }"
  )
  //- Marketing
  BlockInfo.about_marketing(
    :title="$t('aboutPage.marketing.title')",
    :content="$t('aboutPage.marketing.content')",
    :button="{ text: $t('aboutPage.marketing.button'), link: '/marketing' }"
  )
  //- SHADER 2
  BlockMask.about_shader2(:mode="1", :shader="1")
  //- OEM/ODM
  BlockInfo.about_oem(
    :title="$t('aboutPage.oem.title')",
    :content="$t('aboutPage.oem.content')",
    :button="{ text: $t('aboutPage.oem.button'), link: '/manufacture' }"
  )
  //- Design
  BlockInfo.about_design(
    mode='grad'
    :title="$t('aboutPage.design.title')",
    :content="$t('aboutPage.design.content')",
    :button="{ text: $t('aboutPage.design.button'), link: '/design' }"
  )
  //- //- 2020
  //- BlockInfo.about_2020(direction="row")
  //-   template(v-slot:header) 2020
  //-   | Запустила в собственное производство карбоксидные наборы масок
  //-   | QTskin для продажи оптом и в розницу на маркетплейсах в РФ.
  //- //- 2021
  //- BlockInfo.about_2021(direction="row")
  //-   template(v-slot:header) 2021
  //-   | Компания стала членом корейской торговой ассоциации KITTA и KOTRA.
</template>

<script lang="ts" setup>
const images = ref([
  {
    title: "test",
    url: "/images/product.png",
    link: { text: "SEE IN STORE", url: "/store" },
  },
  {
    title: "test2",
    url: "/images/img.png",
    link: { text: "SEE IN STORE", url: "/store" },
  },
]);
</script>

<style lang="sass" scoped>
.about
  .logoline
    grid-area: 1/1/2/7
  &_shader1
    grid-area: 2/4/3/7
  &_shader2
    grid-area: 4/1/6/3
  &_about
    grid-area: 2/1/3/4
  &_carousel
    grid-area: 3/1/4/5
  &_wholesale
    grid-area: 3/5/4/7
  &_certification
    grid-area: 4/3/5/5
  &_marketing
    grid-area: 4/5/5/7
  &_oem
    grid-area: 5/3/6/5
  &_design
    grid-area: 5/5/6/7
  &_2020
    grid-area: 6/1/7/4
    padding-top: 40px
    padding-bottom: 40px
  &_2021
    grid-area: 6/4/7/7
    padding-top: 40px
    padding-bottom: 40px

// MOBILE
@media screen and (max-width: 760px)
  .about
    &_shader1, &_shader2
      display: none
    &_about
      grid-area: 4/1/5/7
    &_carousel
      grid-area: 2/1/3/7
      height: 100vw
    &_wholesale
      grid-area: 3/1/4/7
    &_certification
      grid-area: 5/1/6/7
    &_marketing
      grid-area: 6/1/7/7
    &_oem
      grid-area: 7/1/8/7
    &_design
      grid-area: 8/1/9/7
    &_2020
      grid-area: 9/1/10/7
    &_2021
      grid-area: 10/1/11/7

// TABLET
@media screen and (min-width: 760px) and (max-width: 1100px)
  .about
    &_shader1, &_shader2
      display: none
    &_logo_line
      grid-area: 1/1/2/7
    &_about
      grid-area: 4/1/5/7
    &_carousel
      grid-area: 2/1/3/7
      height: 600px
    &_wholesale
      grid-area: 3/1/4/5
    &_certification
      grid-area: 3/5/4/7
    &_marketing
      grid-area: 5/1/6/3
    &_oem
      grid-area: 5/3/6/7
    &_design
      grid-area: 6/5/8/7
    &_2020
      grid-area: 6/1/7/5
    &_2021
      grid-area: 7/1/8/5
</style>