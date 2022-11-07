<template lang="pug">
NuxtLayout
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
  WrapperBlock(:style="layout.shader")
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
  WrapperBlock(:style="layout.logo_line")
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
</template>
<script lang="ts" setup>
import { ref } from "vue";
const layout = ref({
  about_us: {
    gridArea: "2/1/3/2",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
  shader: {
    gridArea: "2/2/3/3",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
  logo_line: {
    gridArea: "3/1/4/3",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
});
</script>