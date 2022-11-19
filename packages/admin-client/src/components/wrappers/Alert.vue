<template lang="pug">
.alert_wrap
  .alert(@click.stop, :style="{ width, height }")
    .alert_head
      h3 {{ title }}
      WidgetIcon(icon='help' :size='20')
    .alert_body
      slot
    .alert_buttons
      ButtonTag(mode='ghost' @click='$emit("cancel")') CANCEL
      ButtonTag(@click='$emit("ok")') OK

</template>

<script lang="ts" setup>
import type { PropType } from "vue-demi";

defineProps({
  title: { type: String as PropType<string>, default: "Alert!" },
  width: { type: String as PropType<string>, default: "auto" },
  height: { type: String as PropType<string>, default: "auto" },
});
</script>

<style lang="sass">
.alert
  display: flex
  flex-direction: column
  min-width: 400px
  max-width: 80vw
  max-height: 80vh
  background: var(--contrast-100)
  border: var(--border-100)
  border-radius: 4px
  padding: 20px
  gap: 20px
  &_wrap
    display: flex
    align-items: center
    justify-content: center
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
  &_head
    display: flex
    align-items: center
    justify-content: space-between
  &_buttons
    display: flex
    justify-content: space-between
    gap: 20px
</style>