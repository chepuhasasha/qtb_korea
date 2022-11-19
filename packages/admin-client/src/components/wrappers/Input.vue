<template lang="pug">
.input(:class="classes", @click="focus")
  .input_icon(v-if="icon")
    WidgetIcon(:icon="icon")
  .input_wrap
    label(v-if="label || error") {{ label }} {{ error }}
    slot
  slot(name='body')
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import type { IconName } from "../widgets/icons";
import { computed } from "vue";

const emit = defineEmits(["clickfocus"]);
const props = defineProps({
  label: { type: String as PropType<string | null>, default: null },
  error: { type: String as PropType<string | null>, default: null },
  icon: { type: String as PropType<IconName | null>, default: null },
  active: { type: Boolean as PropType<boolean>, default: false },
  disable: { type: Boolean as PropType<boolean>, default: false },
  customFocus: { type: Boolean as PropType<boolean>, default: false },
});

const focus = () => {
  emit("clickfocus");
};

const classes = computed(() => ({
  input__focus: props.customFocus,
  input__error: props.error,
  input__disable: props.disable,
  input__active: props.active,
}));
</script>
<style lang="sass">
.input
  display: flex
  align-items: center
  background: var(--contrast-100)
  border: var(--border-100)
  border-radius: 4px
  transition: all 0.3s ease
  textarea
    resize: vertical
  input, textarea, select
    padding: 10px
    outline: none
    border: none
    background: none
    color: var(--text-color-200)
  label
    font: var(--font-200)
    color: var(--text-color-200)
    margin: 10px 10px 0 10px
  input::-webkit-calendar-picker-indicator
    filter: invert(1)
    opacity: 0.5
    cursor: pointer

  &_wrap
    display: flex
    flex-direction: column
    width: 100%
  &_icon
    display: flex
    align-items: center
    padding: 10px 0px 10px 10px
    path
      stroke: var(--text-color-200)
  &__focus, &__active
    background: var(--contrast-200)
    border-color: var(--primary-100)
  &__disable
    opacity: 0.5
  &__error
    label
      color: var(--ui-error)
      border-color: var(--ui-error-t)
  &:hover
    background: var(--contrast-300)
</style>
