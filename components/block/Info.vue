<template lang="pug">
component.block(:is="tag", :class="classes", :style="style")
  h2.block_header
    slot(name="header")
  p.block_body
    slot
  .block_footer
    slot(name="footer")
</template>
<script lang="ts" setup>
import type { PropType } from "vue";

const screen = useScreen();

const props = defineProps({
  tag: { type: String as PropType<string>, default: "section" },
  mode: {
    type: String as PropType<"light" | "dark">,
    default: "light",
  },
  direction: { type: String as PropType<string>, default: "column" },
  area: {
    type: Object as PropType<{
      mobile: string;
      tablet: string;
      desktop: string;
    }>,
    default: () => ({
      mobile: "1/1/2/2",
      tablet: "1/1/2/2",
      desktop: "1/1/2/2",
    }),
  },
});

const classes = computed(() => ({
  [`block__${screen.value}`]: true,
  [`block__${props.mode}`]: true,
}));

const style = computed(() => ({
  gridArea: props.area[screen.value],
  flexDirection: props.direction
}));
</script>
<style lang="sass">
.block
  display: flex
  width: 100%
  height: 100%
  transition: padding 0.3s
  &_header
    display: flex
    flex-direction: column
  &_body
    height: 100%
  &_footer
    display: flex
    justify-content: flex-end

  // modes
  &__light
    background: var(--contrast-200)
    .block_header, .block_body, .block_footer
      color: var(--contrast-400)
  &__dark
    background: var(--contrast-500)
    .block_header, .block_body, .block_footer
      color: var(--contrast-200)

  // adaptability
  &__mobile
    padding: 20px
    gap: 20px
    .block_header
      gap: 10px
  &__tablet
    padding: 40px
    gap: 20px
    .block_header
      gap: 20px
  &__desktop
    padding: 100px
    gap: 40px
    .block_header
      gap: 20px
</style>