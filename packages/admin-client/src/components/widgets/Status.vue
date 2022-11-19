<template lang="pug">
.status
  .status_text(:style="{ color: `var(--ui-${status})` }") {{ text }}
  .status_circle(:style="{ background: `var(--ui-${status})` }")
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  status: { type: String as PropType<"ok" | "warn" | "error">, default: "ok" },
  text: { type: String as PropType<string>, default: "active" },
});
</script>

<style lang="sass">
.status
  display: flex
  align-items: center
  gap: 5px
  &_circle
    width: 6px
    height: 6px
    border-radius: 10px
</style>