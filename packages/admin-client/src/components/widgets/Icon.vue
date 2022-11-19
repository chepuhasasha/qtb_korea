<template lang="pug">
svg.icon(
  :width="size",
  :height="size",
  viewBox="0 0 24 24",
  fill="none",
  xmlns="http://www.w3.org/2000/svg"
)
  path(
    v-for="d in paths",
    :d="d",
    :stroke-width="width",
    stroke-linecap="round",
    stroke-linejoin="round"
  )
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { IconName } from "./icons";
import { computed } from "vue";
import { icons } from "./icons";

const props = defineProps({
  icon: { type: String as PropType<IconName>, default: "error" },
  size: { type: Number as PropType<number>, default: 16 },
  width: { type: Number as PropType<number>, default: 2 },
});

const paths = computed(() => icons[props.icon]);
</script>

<style lang="sass">
.icon
  path
    stroke: var(--text-color-200)
</style>
  