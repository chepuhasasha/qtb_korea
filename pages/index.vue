<template lang="pug">
NuxtLayout.about
  //- LOGOLINE 
  BlockLogoline
  //- ABOUT US
  BlockInfo.about_about(
    :title="content.about.title",
    :content="content.about.content",
    :button="{ text: content.about.button, link: '/' }"
  )
  //- SHADER 1
  BlockMask.about_shader1
  //- Carousel 
  BlockCarousel.about_carousel(:images="images")
  //- Cosmetic wholesale
  BlockInfo.about_wholesale(
    :title="content.wholesale.title",
    :content="content.wholesale.content",
    :button="{ text: content.wholesale.button, link: '/store' }"
  )
  //- Certification
  BlockInfo.about_certification(
    :title="content.certification.title",
    :content="content.certification.content",
    :button="{ text: content.certification.button, link: '/certification' }"
  )
  //- Marketing
  BlockInfo.about_marketing(
    :title="content.marketing.title",
    :content="content.marketing.content",
    :button="{ text: content.marketing.button, link: '/marketing' }"
  )
  //- SHADER 2
  BlockMask.about_shader2(:mode="1", :shader="1")
  //- OEM/ODM
  BlockInfo.about_oem(
    :title="content.oem.title",
    :content="content.oem.content",
    :button="{ text: content.oem.button, link: '/manufacture' }"
  )
  //- Design
  BlockInfo.about_design(
    :title="content.design.title",
    :content="content.design.content",
    :button="{ text: content.design.button, link: '/design' }"
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
const content = ref({
  about: {
    title: "ABOUT US",
    content:
      "Dear clients, QTB Korea LTD company was established in 2019 and locate in Seoul city Republic of Korea. We represent our clients’ business interests to strengthen relations between Korea and other countries. We provide to our distributors different types of cosmetic products and OEM/ODM service for Global Brands. We search huge Korean cosmetic market for very new trends and suggest it to our customers. That's why our clients up to dates with all the latest cosmetic market news. Along with this we also provide manufacturing service of your private label and other aspects of the international health and beauty business. Partnership with QTB Korea offers many opportunities to distinguish and grow your business! Be strong and courageous! CEO of QTB KOREA Maria Lakienko",
    button: 'connect with us'
  },
  wholesale: {
    title: "Cosmetic wholesale",
    content: "QTB Korea cooperates with various brands. We choose the best products, focusing on the trends popular in Korea and introduce its to our customers. Selling worldwide. We guarantee compliance with price and quality! We invite entrepreneurs and companies to cooperation. Wholesale conditions - one cartoon box of any product. The quantity of goods can be found on the page of each product in the MOQ column. For large wholesale has an additional discounts, provision of samples and marketing support from brands. All products have declarations of conformity to the quality of the goods, which legalizes import and sale on the territory of the EAC countries. Sales to European countries are carried out under CPNP certificates. We help brands with regulations, so almost all our Korean products for the European market are certified. Certified products on the product page of our website are marked with the EAC or CPNP logo.",
    button: "STORE"
  },
  certification: {
    title: "Certification",
    content: 'Certification of cosmetic products for import and legalization of sales in your country.',
    button: 'MORE'
  },
  marketing: {
    title: "Marketing",
    content: 'Develop strategies to promote your brand. Integrated marketing from analysis to project management.',
    button: 'MORE'
  },
  oem: {
    title: "OEM/ODM",
    content: "Manufacture of your own brand at well-known factories in South Korea with the provision of formulas and textures, packaging design and branding of your product.",
    button: "MORE"
  },  
  design: {
    title: "Design",
    content: "Design is an essential part of a brand, because correctly created style determines the success of the brand. We can help you develop a unique corporate identity, logo, packaging design, web design, branding or if you already have an established style, but want to make it better, we offer you rebranding.",
    button: "MORE"
  }
});
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