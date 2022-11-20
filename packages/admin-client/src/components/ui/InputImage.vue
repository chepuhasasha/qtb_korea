<template lang="pug">
WrapperInput(@click='_focus' :customFocus='isfocus')
  .inputimg
    input(
      ref="input",
      type='file'
      @input="handleFileInput",
      :value="modelValue",
      v-bind="$attrs",
      @blur="isfocus = false"
      accept="image/*"
    )
    img(:src='src')
    ButtonTag(@click='input?.click()' mode='icon')
      WidgetIcon(icon='plus')
  template(v-slot:body)
    slot
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { ref, computed } from "vue";

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

const src = ref('')

const handleFileInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target && target.files && target.files.length > 0) {
    const file = target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (r) => {
      src.value = r.currentTarget?.result
    }
  }
};

const _focus = () => {
  if (input.value) {
    input.value.focus();
    isfocus.value = true;
  }
};
</script>
<style lang="sass">
.inputimg
  display: flex
  flex-direction: column
  gap: 10px
  padding: 10px
  input
    display: none
  .button
    align-self: end
</style>
