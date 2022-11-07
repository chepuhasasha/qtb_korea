<template lang="pug">
component.block(:is="tag")
  slot
</template>
<script lang="ts" setup>
import type { PropType } from "vue";

const props = defineProps({
  tag: { type: String as PropType<string>, default: "div" },
});
</script>
<style lang="sass">
.block
  display: flex
  width: 100%
  height: 100%
  background: var(--contrast-200)
</style>