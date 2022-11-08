<template lang="pug">
.mask_wrapper
  .mask(ref='mask')
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { onMounted, ref } from "vue";
import { Mask } from "@/assets/pixi/mask";

const props = defineProps({
  mode: { type: Number as PropType<number>, default: 0 },
  url: { type: String as PropType<string | null>, default: null },
});

const mask = ref<HTMLDivElement | null>();

onMounted(() => {
  if (mask.value) new Mask(mask.value, props.mode, props.url);
});
</script>
<style lang="sass">
.mask
  width: 100%
  height: 100%
  &_wrapper
    display: flex
    min-width: 100%
    min-height: 100%
    width: 100%
    height: 100%
</style>
