<template lang="pug">
WrapperInput(@clickfocus='focus' :customFocus='isfocus')
  select(
    ref="input",
    @input="update",
    :value="modelValue",
    v-bind="$attrs",
    @blur="isfocus = false"
  )
    slot
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { ref } from "vue";

defineProps({
  modelValue: {
    type: [String || Number] as PropType<string | number | null>,
    default: "",
  },
});

const isfocus = ref<boolean>(false);
const input = ref<HTMLInputElement | null>(null);
const emit = defineEmits(["update:modelValue"]);
const update = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
const focus = () => {
  if (input.value) {
    input.value.focus();
    isfocus.value = true;
  }
};
</script>
<style lang="sass"></style>
