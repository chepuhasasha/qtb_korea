<template lang="pug">
NuxtLayout
  WrapperBlock(:style="layout.logo_line")
    img(src="@/assets/images/logoline.svg" width="2390")
  WrapperBlock(:style="layout.about_us")
    img(src="@/assets/images/shape1.svg", width="60")
    img(src="@/assets/images/logo_min.svg", width="400")
    h2 ABOUT US
    p 
      | Dear clients,
      | QTB Korea LTD company was established in 2019 and locate in Seoul city Republic of Korea. We represent our clients’ business interests to strengthen relations between Korea and other countries.
      | We provide to our distributors different types of cosmetic products and OEM/ODM service for Global Brands. We search huge Korean cosmetic market for very new trends and suggest it to our customers. That's why our clients up to dates with all the latest cosmetic market news. Along with this we also provide manufacturing service of your private label and other aspects of the international health and beauty business.
      | Partnership with QTB Korea offers many opportunities to distinguish and grow your business!
      | Be strong and courageous!
      | CEO of QTB KOREA
      | Maria Lakienko
  WrapperBlock(:style="layout.shader1")
    BlockMask
  WrapperBlock(:style="layout.carousel")
    h1 carousel
  WrapperBlock(:style="layout.shop")
    h1 Supply of Korean cosmetics
    p
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      | sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      | Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      | nisi ut aliquip ex ea commodo consequat.
    WrapperBlock(:style='{gap: "20px"}')
      img(src="@/assets/images/eac.svg", alt="eac")
      p Все предлагаемые товары имеют сертификаты соответствия ЕАС. 
  WrapperBlock(:style="layout.eac")
    h1 EAC certification
    p 
      | Основное назначение этого документа — подтверждение соответствия
      | товаров требованиям технических регламентов ТС. Без этого невозможен импорт
      | товаров на территорию стран — участниц союза.
  WrapperBlock(:style="layout.line_up")
    h1 Line-up selection
    p 
      | Специально разработанные формулы косметических 
      | средств по уходу за лицом, волосами и телом
  WrapperBlock(:style="layout.shader2")
    BlockMask(:mode='1' :shader='1')
  WrapperBlock(:style="layout.oem")
    h1 Manufacture (own brand) OEM/ODM
    p 
      | OEM - производство под вашу торговую марку.
      | ODM-производство торговой марки с вашей формулой и дизайном.
      | Команда QTB - поможет подобрать формулу, дизайн(пусть слово дизайн 
      | и упаковка кликается и переводится на страницу блока “дизайн и брендирование”),
      | упаковку,  доставит вам образцы и займётся производством. 
      | Мы работаем вместе от начала процесса до отправки вам произведенного продукта.
  WrapperBlock(:style="layout.identity")
    h1 Identity
    p 
      | Разработка фирменного стиля компании: логотип компании, упаковка, 
      | 3D визуализация товара и бла бла бла.................если они пришли за помощью
      | создать бренд-делаем с нуля дезигн, если продвинуть красиво товар-надо модель и ролики???
      | для этого конечно нужно портфолио...
  WrapperBlock(:style="layout['2020']")
    h1 2020
    p 
      | Запустила в собственное производство карбоксидные наборы масок 
      | QTskin для продажи оптом и в розницу на маркетплейсах в РФ.
  WrapperBlock(:style="layout['2021']")
    h1 2021
    p 
      | Компания стала членом корейской торговой ассоциации KITTA и KOTRA.

</template>
<script lang="ts" setup>
import { ref } from "vue";
const layout = ref({
  logo_line: {
    gridArea: "1/1/2/7",
    flexDirection: "column",
    padding: "0",
    gap: "40px",
    overflowY: "scroll"
  },
  about_us: {
    gridArea: "2/1/3/4",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
  shader1: {
    gridArea: "2/4/3/7",
    flexDirection: "column",
    padding: "0",
    gap: "0",
  },
  carousel: {
    gridArea: "3/1/4/5",
    flexDirection: "column",
    padding: "0",
    gap: "0",
  },
  shop: {
    gridArea: "3/5/4/7",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
  eac: {
    gridArea: "4/3/5/5",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
  line_up: {
    gridArea: "4/5/5/7",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
  shader2: {
    gridArea: "4/1/6/3",
    flexDirection: "column",
    padding: "0",
    gap: "0",
  },
  oem: {
    gridArea: "5/3/6/5",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
  identity: {
    gridArea: "5/5/6/7",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
  "2020": {
    gridArea: "6/1/7/4",
    flexDirection: "row",
    padding: "40px 100px",
    gap: "40px",
  },
  "2021": {
    gridArea: "6/4/7/7",
    flexDirection: "row",
    padding: "40px 100px",
    gap: "40px",
  },
});
</script>