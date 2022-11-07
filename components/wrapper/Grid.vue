<template lang="pug">
component.grid(
  :is="tag",
  :style="{ gridTemplateColumns: cols, gridTemplateRows: rows, gap: gap }"
)
  slot
</template>
<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  tag: { type: String as PropType<string>, default: "div" },
  cols: { type: String as PropType<string>, default: "auto" },
  rows: { type: String as PropType<string>, default: "auto" },
  gap: { type: String as PropType<string>, default: "1px" },
});
</script>
<style lang="sass">
.grid
  display: grid
  background: var(--contrast-300)
</style>