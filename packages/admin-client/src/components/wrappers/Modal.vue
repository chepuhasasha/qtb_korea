<template lang="pug">
.modal_wrap(@click="$emit('close')")
  .modal(@click.stop, :style="{ width, height }")
    .modal_header
      .modal_header_title {{ title }}
      slot(name="header")
      ButtonTag(mode="icon", @click="$emit('close')")
        WidgetIcon(icon="cross")
    .modal_body
      slot
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  title: { type: String as PropType<string>, default: "info" },
  width: { type: String as PropType<string>, default: "auto" },
  height: { type: String as PropType<string>, default: "auto" },
});
</script>

<style lang="sass">
.modal
  display: flex
  flex-direction: column
  max-width: 80vw
  max-height: 80vh
  background: var(--contrast-200)
  border: var(--border-100)
  border-radius: 4px
  &_wrap
    display: flex
    align-items: center
    justify-content: center
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background: rgba(0,0,0,0.5)
    backdrop-filter: blur(2px)
  &_header
    display: flex
    justify-content: space-between
    align-items: center
    gap: 10px
    padding: 10px
    background: var(--contrast-100)
    border-bottom: var(--border-100)
    &_title
      width: 100%
  &_body
    overflow-y: auto
    overflow-x: hidden
</style>