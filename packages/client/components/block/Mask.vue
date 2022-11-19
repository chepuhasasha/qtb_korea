<template lang="pug">
.mask(ref='mask')
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { onMounted, ref } from "vue";
import { Mask } from "@/assets/pixi/mask";

const props = defineProps({
  mode: { type: Number as PropType<number>, default: 0 },
  shader: { type: Number as PropType<number>, default: 0 },
  url: { type: String as PropType<string | null>, default: null },
});

const mask = ref<HTMLDivElement | null>();

onMounted(() => {
  if (mask.value) new Mask(mask.value, props.mode, props.url, props.shader);
});
</script>
<style lang="sass">
.mask
  position: relative
  width: 100%
  height: 100%
  overflow: hidden
  max-width: 100%
  max-height: 100%
  canvas
    position: absolute
</style>
