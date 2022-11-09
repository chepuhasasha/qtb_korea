<template lang="pug">
button.button(:class="classes")
  WidgetWdthText(
    v-if="text",
    :text="text",
    :size="16",
    :interactive="interactive"
  )
  slot
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { computed, watch } from "vue";

const props = defineProps({
  text: { type: String as PropType<string>, default: "" },
  size: { type: String as PropType<"s" | "m" | "l">, default: "m" },
  interactive: { type: Boolean as PropType<boolean>, default: false },
  state: {
    type: String as PropType<"active" | "disable" | null>,
    default: null,
  },
  mode: {
    type: String as PropType<"default" | "ghost">,
    default: "default",
  },
});

const classes = computed(() => [
  `button_${props.mode}`,
  `button_${props.mode}_${props.size}`,
  `button_${props.mode}_${props.state}`,
]);
</script>
<style lang="sass">
.button
  outline: none
  border: none
  cursor: pointer
  display: inline-flex
  width: max-content
  &_default
    background: var(--contrast-400)
    color: var(--contrast-200)
    &:hover, &_active
      background: var(--contrast-500)
    &_s
      padding: 20px
    &_m
      padding: 20px
    &_l
      padding: 20px 30px
      gap: 10px
      font: var(--font-100)
      border-radius: 4px
  &_ghost
    background: none
    color: var(--contrast-400)
    border-bottom: 1px solid var(--contrast-200)
    &:hover, &_active
      border-bottom: 1px solid var(--contrast-300)
      color: var(--contrast-500)
    &_s
      padding: 20px 0
    &_m
      padding: 20px 0
    &_l
      padding: 10px 0
      gap: 10px
      font: var(--font-200)
</style>
