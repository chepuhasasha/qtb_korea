<template lang="pug">
component.block(:is="tag", :class="[`block__${mode}`]", :style="{flexDirection: direction}")
  h2.block_header(v-if='title') {{ title }}
  p.block_body
    | {{ content }}
    slot
  .block_footer(v-if='button')
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
    type: String as PropType<"light" | "dark">,
    default: "light",
  },
  direction: { type: String as PropType<string>, default: "column" },
  button: { type: Object as PropType<{link: string, text: string} | null>, default: null },
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