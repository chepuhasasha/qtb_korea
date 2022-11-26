<template lang="pug">
WrapperInput(@click='_focus' :customFocus='isfocus')
  .inputimg
    input(
      ref="input",
      type='file'
      @input="handleFileInput",
      v-bind="$attrs",
      @blur="isfocus = false"
      accept="image/*"
    )
    .inputimg_img(:style='{backgroundImage: `url(${src})`}')
    ButtonTag(@click='input?.click()' mode='icon')
      WidgetIcon(icon='plus')
  template(v-slot:body)
    slot
</template>
<script lang="ts" setup>
import { ref } from "vue";

const isfocus = ref<boolean>(false);
const input = ref<HTMLInputElement | null>(null);
const emit = defineEmits(["add"]);
const src = ref("");

const handleFileInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target && target.files && target.files.length > 0) {
    const file = target.files[0];
    emit("add", file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (r) => {
      src.value = r.currentTarget?.result;
    };
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
  &_img
    width: 60px
    height: 60px
    border-radius: 10px
    background-repeat: no-repeat
    background-position: center
    background-size: cover
</style>
