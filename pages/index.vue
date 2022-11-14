<template lang="pug">
NuxtLayout.about
  WrapperBlock.about_logo_line
    img(src="@/assets/images/logoline.svg")
  BlockInfo(:area="{mobile: '4/1/5/7', tablet: '4/1/5/7', desktop: '3/1/4/4'}")
    template(v-slot:header)
      img(src="@/assets/images/shape1.svg", width="60")
      //- img(src="@/assets/images/logo_min.svg", width="400")
      | ABOUT US
    | Dear clients,
    | QTB Korea LTD company was established in 2019 and locate in Seoul city Republic of Korea. We represent our clients’ business interests to strengthen relations between Korea and other countries.
    | We provide to our distributors different types of cosmetic products and OEM/ODM service for Global Brands. We search huge Korean cosmetic market for very new trends and suggest it to our customers. That's why our clients up to dates with all the latest cosmetic market news. Along with this we also provide manufacturing service of your private label and other aspects of the international health and beauty business.
    | Partnership with QTB Korea offers many opportunities to distinguish and grow your business!
    | Be strong and courageous!
    | CEO of QTB KOREA
    | Maria Lakienko
    template(v-slot:footer)
      WidgetButton connect with us

  BlockMask.about_shader1

  BlockCarousel.about_carousel(:images='images')
  BlockInfo(:area="{mobile: '3/1/4/7', tablet: '3/1/4/5', desktop: '2/5/3/7'}")
    template(v-slot:header) Supply of Korean cosmetics
    | Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    | Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    | nisi ut aliquip ex ea commodo consequat.
    template(v-slot:footer)
      NuxtLink(to="/store")
        WidgetButton STORE

  BlockInfo(mode='dark' :area="{mobile: '5/1/6/7', tablet: '3/5/4/7', desktop: '4/3/5/5'}")
    template(v-slot:header) Certification
    | Certification of cosmetic products for import
    | and legalization of sales in your country.
    template(v-slot:footer)
      NuxtLink(to="/certification")
        WidgetButton MORE

  BlockInfo(:area="{mobile: '6/1/7/7', tablet: '5/1/6/3', desktop: '4/5/5/7'}")
    template(v-slot:header) Marketing
    | Develop strategies to promote your brand.
    | Integrated marketing from analysis to project management.
    template(v-slot:footer)
      NuxtLink(to="/marketing")
        WidgetButton MORE

  WrapperBlock.about_shader2
    BlockMask(:mode="1", :shader="1")

  BlockInfo(:area="{mobile: '7/1/8/7', tablet: '5/3/6/7', desktop: '5/3/6/5'}")
    template(v-slot:header) OEM/ODM
    | Manufacture of your own brand at well-known
    | factories in South Korea with the provision
    | of formulas and textures, packaging design and branding of your product.
    template(v-slot:footer)
      NuxtLink(to="/manufacture")
        WidgetButton MORE

  BlockInfo(mode='dark' :area="{mobile: '8/1/9/7', tablet: '6/5/8/7', desktop: '5/5/6/7'}")
    template(v-slot:header) Design 
    | Design is an essential part of a brand,
    | because correctly created style determines
    | the success of the brand. We can help you develop
    | a unique corporate identity, logo, packaging design,
    | web design, branding or if you already have an established style,
    | but want to make it better, we offer you rebranding.
    template(v-slot:footer)
      NuxtLink(to="/design")
        WidgetButton MORE

  BlockInfo(direction='row'  :area="{mobile: '9/1/10/7', tablet: '6/1/7/5', desktop: '6/1/7/4'}")
    template(v-slot:header) 2020
    | Запустила в собственное производство карбоксидные наборы масок
    | QTskin для продажи оптом и в розницу на маркетплейсах в РФ.

  BlockInfo(direction='row' :area="{mobile: '10/1/11/7', tablet: '7/1/8/5', desktop: '6/4/7/7'}")
    template(v-slot:header) 2021
    | Компания стала членом корейской торговой ассоциации KITTA и KOTRA.
</template>
<script lang="ts" setup>

const images = ref([
  {title: 'test', url: '/images/product.png', link: {text: 'SEE IN STORE', url: '/store'}},
  {title: 'test2', url: '/images/img.png', link: {text: 'SEE IN STORE', url: '/store'}}
])

const screen = useScreen()
</script>
<style lang="sass" scoped>
.about
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
  &_carousel
    grid-area: 2/1/3/5
  &_shader2
    grid-area: 4/1/6/3
    flex-direction: column
    padding: 0
    gap: 0


// MOBILE
@media screen and (max-width: 760px)
  .about
    &_shader1, &_shader2
      display: none
    &_carousel
      grid-area: 2/1/3/7
      height: 100vw

// TABLET
@media screen and (min-width: 760px) and (max-width: 1100px)
  .about
    &_shader1, &_shader2
      display: none
    &_logo_line
      grid-area: 1/1/2/7
    &_carousel
      grid-area: 2/1/3/7
      height: 600px

</style>