<template lang="pug">
.message(v-if='message' :class='[`message__${message.type}`]')
  .message_header
    .message_code {{ message.code }}
    .message_type {{ message.type.toUpperCase() }}
  .message_body {{ message.message }}
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { IMessage } from "@/stores";
defineProps({
  message: { type: Object as PropType<IMessage>, require: true },
});
</script>

<style lang="sass" scoped>
.message
  font: var(--font-200)
  padding: 10px
  background: var(--contrast-100)
  border-left: 6px solid var(--contrast-100)
  display: flex
  flex-direction: column
  gap: 10px
  width: 300px
  max-width: 300px
  &_header
    display: flex
    align-items: center
    width: 100%
    justify-content: space-between
    font: var(--font-100)
  &_code
    padding: 6px 10px
    border-radius: 4px
    background: var(--contrast-300)
    font: var(--font-200)
  &_body
    font: var(--font-200)
  &__ok
    border-color: var(--ui-ok)
  &__error
    border-color: var(--ui-error)
  &__warn
    border-color: var(--ui-warn)
</style>