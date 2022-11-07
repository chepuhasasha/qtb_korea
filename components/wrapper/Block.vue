<template lang="pug">
component.block(:is="tag", :style="style")
  slot
</template>
<script lang="ts" setup>
import type { PropType } from "vue";

const props = defineProps({
  tag: { type: String as PropType<string>, default: "div" },
  column: { type: Boolean as PropType<boolean>, default: true },
  gap: { type: String as PropType<string>, default: "20px" },
  padding: { type: String as PropType<string>, default: "20px" },
  alignItems: { type: String as PropType<string>, default: "flex-start" },
  justifyContent: { type: String as PropType<string>, default: "flex-start" },
});
const style = computed<{
  [k in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[k];
}>(() => ({
  flexDirection: props.column ? "column" : "row",
  gap: props.gap,
  padding: props.padding,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent
}));
</script>
<style lang="sass">
.block
  display: flex
  width: 100%
  height: 100%

  background: var(--contrast-200)
</style>