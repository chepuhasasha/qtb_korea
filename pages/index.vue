<template lang="pug">
NuxtLayout.about
  WrapperBlock.about_logo_line
    img(src="@/assets/images/logoline.svg")
  WrapperBlock.about_about_us
    img(src="@/assets/images/shape1.svg", width="60")
    img(src="@/assets/images/logo_min.svg", width="400")
    h3 ABOUT US
    p
      | Dear clients,
      | QTB Korea LTD company was established in 2019 and locate in Seoul city Republic of Korea. We represent our clients’ business interests to strengthen relations between Korea and other countries.
      | We provide to our distributors different types of cosmetic products and OEM/ODM service for Global Brands. We search huge Korean cosmetic market for very new trends and suggest it to our customers. That's why our clients up to dates with all the latest cosmetic market news. Along with this we also provide manufacturing service of your private label and other aspects of the international health and beauty business.
      | Partnership with QTB Korea offers many opportunities to distinguish and grow your business!
      | Be strong and courageous!
      | CEO of QTB KOREA
      | Maria Lakienko
    WidgetButton connect with us
  //- WrapperBlock(:style="layout.shader1")
  BlockMask.about_shader1
  BlockCarousel.about_carousel(:images='images')
  WrapperBlock.about_shop
    h2 Supply of Korean cosmetics
    p
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      | Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      | nisi ut aliquip ex ea commodo consequat.
    WrapperBlock(:style="{ gap: '20px' }")
      img(src="@/assets/images/eac.svg", alt="eac")
      p Все предлагаемые товары имеют сертификаты соответствия ЕАС.
    NuxtLink(to="/shop")
      WidgetButton SHOP
  WrapperBlock.about_eac
    h2 Certification
    p 
      | Certification of cosmetic products for import
      | and legalization of sales in your country.
  WrapperBlock.about_line_up
    h2 Marketing
    p 
      | Develop strategies to promote your brand.
      | Integrated marketing from analysis to project management.
  WrapperBlock.about_shader2
    BlockMask(:mode="1", :shader="1")
  WrapperBlock.about_oem
    h2 Manufacture (own brand) OEM/ODM
    p 
      | Manufacture of your own brand at well-known
      | factories in South Korea with the provision
      | of formulas and textures, packaging design and branding of your product.
  WrapperBlock.about_identity
    h2 Design 
    p 
      | Design is an essential part of a brand,
      | because correctly created style determines
      | the success of the brand. We can help you develop
      | a unique corporate identity, logo, packaging design,
      | web design, branding or if you already have an established style,
      | but want to make it better, we offer you rebranding.
  WrapperBlock.about_2020
    h2 2020
    p 
      | Запустила в собственное производство карбоксидные наборы масок
      | QTskin для продажи оптом и в розницу на маркетплейсах в РФ.
  WrapperBlock.about_2021
    h2 2021
    p 
      | Компания стала членом корейской торговой ассоциации KITTA и KOTRA.
</template>
<script lang="ts" setup>

const images = ref([
  {title: 'test', url: '/images/product.png', link: {text: 'google', url: 'google.com'}},
  {title: 'test2', url: '/images/img.png', link: {text: 'google', url: 'google.com'}}
])

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
  &_about_us
    grid-area: 3/1/4/4
    flex-direction: column
    padding: 100px
    gap: 40px
  &_shader1
    grid-area: 3/4/4/7
    flex-direction: column
    padding: 0
    gap: 0
  &_carousel
    grid-area: 2/1/3/5
  &_shop
    grid-area: 2/5/3/7
    flex-direction: column
    padding: 100px
    gap: 40px
  &_eac
    grid-area: 4/3/5/5
    flex-direction: column
    padding: 100px
    gap: 40px
    background: var(--contrast-500)
    *
      color:  var(--contrast-200)
  &_line_up
    grid-area: 4/5/5/7
    flex-direction: column
    padding: 100px
    gap: 40px
  &_shader2
    grid-area: 4/1/6/3
    flex-direction: column
    padding: 0
    gap: 0
  &_oem
    grid-area: 5/3/6/5
    flex-direction: column
    padding: 100px
    gap: 40px
  &_identity
    grid-area: 5/5/6/7
    flex-direction: column
    padding: 100px
    gap: 40px
    background: var(--contrast-500)
    *
      color:  var(--contrast-200)
  &_2020
    grid-area: 6/1/7/4
    flex-direction: row
    padding: 40px 100px
    gap: 40px
  &_2021
    grid-area: 6/4/7/7
    flex-direction: row
    padding: 40px 100px
    gap: 40px

// MOBILE
@media screen and (max-width: 760px)
  .about
    &_shader1, &_shader2
      display: none
    &_about_us, &_shop, &_eac, &_line_up, &_carousel, &_oem, &_identity, &_2020, &_2021
      padding: 40px
      gap: 20px
    &_line_up, &_identity
      align-items: flex-end
      background: var(--contrast-500)
      *
        color:  var(--contrast-200)
    &_logo_line
      grid-area: 1/1/2/7
      img
        width: 1200px
    &_about_us
      grid-area: 4/1/5/7
      img:nth-child(2n)
        width: 100%
    &_carousel
      grid-area: 2/1/3/7
      height: 100vw
    &_shop
      grid-area: 3/1/4/7
    &_eac
      grid-area: 5/1/6/7
    &_line_up
      grid-area: 6/1/7/7
    &_oem
      grid-area: 7/1/8/7
    &_identity
      grid-area: 8/1/9/7
    &_2020
      grid-area: 9/1/10/7
      align-items: center
    &_2021
      grid-area: 10/1/11/7
      align-items: center
      flex-direction: row-reverse

// TABLET
@media screen and (min-width: 760px) and (max-width: 1100px)
  .about
    &_shader1, &_shader2
      display: none
    &_about_us, &_shop, &_eac, &_line_up, &_carousel, &_oem, &_identity, &_2020, &_2021
      padding: 40px
      gap: 20px
    &_line_up, &_identity, &_eac
      background: var(--contrast-500)
      *
        color:  var(--contrast-200)
    &_logo_line
      grid-area: 1/1/2/7
    &_about_us
      grid-area: 4/1/5/7
    &_carousel
      grid-area: 2/1/3/7
      height: 600px
    &_shop
      grid-area: 3/1/4/5
    &_eac
      grid-area: 3/5/4/7
    &_line_up
      grid-area: 5/1/6/3
    &_oem
      grid-area: 5/3/6/7
    &_identity
      grid-area: 6/5/8/7
    &_2020
      grid-area: 6/1/7/5
      align-items: center
    &_2021
      grid-area: 7/1/8/5
      align-items: center

</style>