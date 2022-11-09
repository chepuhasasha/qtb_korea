<template lang="pug">
NuxtLayout
  WrapperBlock(:style="layout.logo_line")
    img(src="@/assets/images/logoline.svg")
  WrapperBlock(:style="layout.main")
    img(src="@/assets/images/shape1.svg", width="60")
    h1 Blur Stick
    WidgetButton(mode='ghost' size='l') Vue De Pulang
    WrapperBlock(:style='{width: "100%", justifyContent: "space-between"}')
      WidgetButton(mode='ghost') ОПТОМ
      WidgetButton купить на OZON
  WrapperBlock(:style="layout.baner")
    BlockMask(url='/images/product.png')
  WrapperBlock(:style="layout.carousel")
  WrapperBlock(:style="layout.info")
    p 
      | Праймер-стик от VueDePulang контролирует себум, 
      | и в то же время, не сушит кожу, а наоборот, ее увлажняет.
      | За счет своей текстуры праймер хорошо ложится на лицо,
      | и сохраняет макияж в лучшем виде с утра до вечера.
      | Праймер делает кожу более мягкой,
      | избавит её от сухости и эффекта стянутости.
    WrapperBlock(:style='{width: "100%", justifyContent: "space-between"}')
      WidgetButton(mode='ghost') ОПТОМ
      WidgetButton купить на OZON
</template>
  <script lang="ts" setup>
import { ref } from "vue";
const layout = ref({
  logo_line: {
    gridArea: "1/1/2/7",
    flexDirection: "column",
    padding: "0",
    gap: "40px",
    overflowY: "scroll",
  },
  main: {
    gridArea: "2/1/3/3",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
  baner: {
    gridArea: "2/3/3/7",
    flexDirection: "column",
    padding: "0",
    gap: "0",
    overflow: 'hidden'
  },
  carousel: {
    gridArea: "3/1/4/5",
    flexDirection: "column",
    padding: "100px",
    gap: "40px",
  },
  info: {
    gridArea: "3/5/4/7",
    flexDirection: "column",
    justifyContent: 'space-between',
    padding: "100px",
    gap: "40px",
  },
});
</script>