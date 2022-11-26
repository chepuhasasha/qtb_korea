<template lang="pug">
button.button(:class="classes")
  slot
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  text: { type: String as PropType<string>, default: "" },
  state: {
    type: String as PropType<"active" | "disable" | null>,
    default: null,
  },
  mode: {
    type: String as PropType<"default" | "ghost" | "icon">,
    default: "default",
  },
  active: { type: Boolean as PropType<boolean>, default: false },
  danger: { type: Boolean as PropType<boolean>, default: false },
});

const classes = computed(() => ({
  [`button_${props.mode}`]: true,
  [`button_${props.mode}_active`]: props.active,
  [`button_${props.mode}_danger`]: props.danger,
}));
</script>
<style lang="sass">
.button
  outline: none
  border: none
  cursor: pointer
  display: inline-flex
  align-items: center
  gap: 10px
  width: max-content
  height: max-content
  font: var(--font-ui)
  &_default
    background: var(--primary-100)
    color: var(--text-color-100)
    white-space: nowrap
    padding: 10px
    border-radius: 4px
    &:hover, &_active
      background: var(--primary-200)
  &_icon
    background: var(--contrast-300)
    padding: 10px
    border-radius: 4px
    border: var(--border-100)
    path
      stroke: var(--text-color-100) !important
    &:hover, &_active
      background: var(--primary-200)
      path
        stroke: white
    &_danger:hover
      background: var(--ui-error)
  &_ghost
    background: none
    color: var(--primary-100)
    border-bottom: 1px solid var(--contrast-200)
    padding: 10px 0px
    &:hover, &_active
      border-bottom: 1px solid var(--primary-200)
      color: var(--primary-200)
    &_danger:hover
      border-bottom: 1px solid var(--primary-200)
      color: var(--ui-error)
</style>
