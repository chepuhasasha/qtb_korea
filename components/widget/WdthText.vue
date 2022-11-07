<template lang="pug">
.variable_text
  span(
    v-for="(letter, i) in text",
    :key="i",
    :style="{ ...style, animationDelay: `${i * (duration / text.length)}s` }"
  ) {{ letter }}
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { computed } from "vue";

const props = defineProps({
  text: { type: String as PropType<string>, default: "variable text" },
  size: { type: Number as PropType<number>, default: 14 },
  duration: { type: Number as PropType<number>, default: 0.8 },
  interactive: { type: Boolean as PropType<boolean>, default: true },
});
const style = computed(() => ({
  fontSize: `${props.size}px`,
  animation: !props.interactive
    ? `${props.duration}s infinite alternate fontwdth`
    : "none",
  width: `${props.size}px`,
}));
</script>
<style lang="sass">
.variable_text
  span
    display: inline-block
    transition: all 0.3s ease
    font-family: Montserrat
    font-weight: 300
    text-align: center
    &:hover
      font-weight: 600

@keyframes fontwdth
  from
    font-weight: 100
  to
    font-weight: 600
</style>
