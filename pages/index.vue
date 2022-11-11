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
  WrapperBlock.about_carousel
    h1 Vue De
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
    h2 EAC
    p 
      | Основное назначение этого документа — подтверждение соответствия
      | товаров требованиям технических регламентов ТС. Без этого невозможен импорт
      | товаров на территорию стран — участниц союза.
  WrapperBlock.about_line_up
    h2 Line-up selection
    p 
      | Специально разработанные формулы косметических
      | средств по уходу за лицом, волосами и телом
  WrapperBlock.about_shader2
    BlockMask(:mode="1", :shader="1")
  WrapperBlock.about_oem
    h2 Manufacture (own brand) OEM/ODM
    p 
      | OEM - производство под вашу торговую марку.
      | ODM-производство торговой марки с вашей формулой и дизайном.
      | Команда QTB - поможет подобрать формулу, дизайн(пусть слово дизайн
      | и упаковка кликается и переводится на страницу блока “дизайн и брендирование”),
      | упаковку, доставит вам образцы и займётся производством.
      | Мы работаем вместе от начала процесса до отправки вам произведенного продукта.
  WrapperBlock.about_identity
    h2 Identity
    p 
      | Разработка фирменного стиля компании: логотип компании, упаковка,
      | 3D визуализация товара и бла бла бла.................если они пришли за помощью
      | создать бренд-делаем с нуля дезигн, если продвинуть красиво товар-надо модель и ролики???
      | для этого конечно нужно портфолио...
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
    grid-area: 2/1/3/4
    flex-direction: column
    padding: 100px
    gap: 40px
  &_shader1
    grid-area: 2/4/3/7
    flex-direction: column
    padding: 0
    gap: 0
  &_carousel
    grid-area: 3/1/4/5
    flex-direction: column
    padding: 0
    gap: 0
  &_shop
    grid-area: 3/5/4/7
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
    &_about_us, &_shop, &_eac, &_line_up, &_oem, &_identity, &_2020, &_2021
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
      grid-area: 2/1/3/7
      img:nth-child(2n)
        width: 100%
    &_carousel
      grid-area: 3/1/4/7
    &_shop
      grid-area: 4/1/5/7
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
    &_about_us, &_shop, &_eac, &_line_up, &_oem, &_identity, &_2020, &_2021
      padding: 40px
      gap: 20px
    &_line_up, &_identity, &_eac
      background: var(--contrast-500)
      *
        color:  var(--contrast-200)
    &_logo_line
      grid-area: 1/1/2/7
    &_about_us
      grid-area: 2/1/3/7
    &_carousel
      grid-area: 3/1/4/7
    &_shop
      grid-area: 4/1/5/5
    &_eac
      grid-area: 4/5/5/7
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