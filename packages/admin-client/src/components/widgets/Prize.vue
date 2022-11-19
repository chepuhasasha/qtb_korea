<template lang="pug">
.prize(v-if='prize')
  .prize_header
    .prize_type {{ prize.type.toUpperCase() }}
    .prize_code {{ prize.value }}
  .prize_body {{ prize.position }}
</template>
  
<script lang="ts" setup>
import type { PropType } from "vue";
import type { ITournamentPrize } from '@tournaments/types';
defineProps({
  prize: { type: Object as PropType<ITournamentPrize>, require: true },
});
</script>
  
<style lang="sass" scoped>
.prize
  font: var(--font-200)
  padding: 10px
  background: var(--contrast-100)
  // border-left: 6px solid var(--contrast-100)
  border-radius: 4px
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
      color: var(--ui-ok)
    &__error
      border-color: var(--ui-error)
      color: var(--ui-error)
    &__warn
      border-color: var(--ui-warn)
      color: var(--ui-warn)
</style>