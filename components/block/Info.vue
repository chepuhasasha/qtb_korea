<template lang="pug">
component.block(
  :is="tag",
  :class="[`block__${mode}`]",
  :style="{ flexDirection: direction }"
)
  h2.block_header(v-if="title") {{ title }}
  p.block_body
    | {{ content }}
    slot
  .block_footer(v-if="button")
    NuxtLink(:to="button.link")
      WidgetButton {{ button.text }}
</template>
<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  tag: { type: String as PropType<string>, default: "section" },
  title: { type: String as PropType<string | null>, default: null },
  content: { type: String as PropType<string | null>, default: null },
  mode: {
    type: String as PropType<"light" | "dark" | "grad">,
    default: "light",
  },
  direction: { type: String as PropType<string>, default: "column" },
  button: {
    type: Object as PropType<{ link: string; text: string } | null>,
    default: null,
  },
});
</script>
<style lang="sass">
.block
  display: flex
  width: 100%
  height: 100%
  transition: padding 0.3s
  padding: 100px
  gap: 40px
  &_header
    display: flex
    flex-direction: column
    gap: 20px
  &_body
    height: 100%
  &_footer
    display: flex
    justify-content: flex-end

  // MODES
  &__light
    background: var(--contrast-200)
    .block_header, .block_body, .block_footer
      color: var(--contrast-400)
  &__dark
    background: var(--contrast-500)
    .block_header, .block_body, .block_footer
      color: var(--contrast-200)
  &__grad
    background: linear-gradient(90deg, red 0% 16.67%, yellow 16.67% 33.33%, lime 33.33% 50%, cyan 50% 66.67%, blue 66.67% 83.33%, magenta 83.33% 100%), conic-gradient(from 180deg, red 0%, yellow 0 16.67%, lime 0 33.33%, cyan 0 50%, blue 0 66.67%, magenta 0 83.33%, red 0 100%)
    background-blend-mode: screen, normal
    // background: radial-gradient(50% 123.47% at 50% 50%, #00FF94 0%, #FF00C7 100%), linear-gradient(121.28deg, #213100 0%, #FF0000 100%), linear-gradient(360deg, #0029FF 0%, #8FFF00 100%), linear-gradient(114.9deg, #00C6A2 0%, #6A45A8 100%), radial-gradient(100% 148.07% at 0% 0%, #FFFFFF 0%, #1DCD00 100%)
    // background-blend-mode: screen, color-dodge, overlay, difference, normal

    // background: linear-gradient(115.58deg, #00FC19 0%, #1700A4 100.22%), radial-gradient(92.72% 100% at 50% 0%, #EBFFCB 0%, #651200 100%), radial-gradient(92.72% 100% at 50% 0%, #FAFF00 0%, #820000 100%), radial-gradient(109.21% 213.32% at 100% 0%, #FF4D00 0%, #00C2FF 100%), linear-gradient(127.43deg, #D50000 0%, #7856FF 100%)
    // background-blend-mode: lighten, overlay, lighten, screen, normal

    // background: conic-gradient(from 180deg at 50% 50%, rgba(0, 0, 0, 1) 0deg, rgba(255, 255, 255, 0.7) 17deg, rgba(0, 0, 0, 1) 88deg, rgba(255, 255, 255, 0.7) 152deg, rgba(0, 0, 0, 1) 225deg, rgba(255, 255, 255, 0.7) 289deg, rgba(0, 0, 0, 1) 360deg), conic-gradient(from 180deg at 50% 50%, rgba(0, 0, 0, 1) 0deg, rgba(255, 255, 255, 1) 30deg, rgba(0, 0, 0, 1) 96deg, rgba(255, 255, 255, 1) 169deg, rgba(0, 0, 0, 1) 229deg, rgba(255, 255, 255, 1) 285deg, rgba(0, 0, 0, 1) 360deg), radial-gradient(88% 127% at 13% 13%, rgba(248, 110, 251, 1) 8%, rgba(115, 66, 255, 1) 35%, rgba(66, 232, 255, 1) 63%, rgba(66, 255, 107, 1) 100%)
    // background-blend-mode: screen, difference, normal

// MOBILE
@media screen and (max-width: 760px)
  .block
    padding: 20px
    gap: 20px
    .block_header
      gap: 10px

// TABLET
@media screen and (min-width: 760px) and (max-width: 1100px)
  .block
    padding: 40px
    gap: 20px
    .block_header
      gap: 20px
</style>