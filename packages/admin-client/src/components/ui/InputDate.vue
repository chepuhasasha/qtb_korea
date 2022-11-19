<template lang="pug">
WrapperInput(@clickfocus='focus' :customFocus='isfocus')
  input(
    ref="input",
    v-bind="$attrs",
    type="datetime-local",
    :value="datetime",
    @input="update",
    @blur="isfocus = false"
  )
  template(v-slot:body)
    slot
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { ref, computed } from "vue";
import moment from "moment";

const props = defineProps({
  modelValue: {
    type: Number as PropType<string | number | null>,
    default: 0,
  },
});

const isfocus = ref<boolean>(false);
const input = ref<HTMLInputElement | null>(null);

const focus = () => {
  if (input.value) {
    input.value.focus();
    isfocus.value = true;
  }
};

const emit = defineEmits(["update:modelValue"]);
const update = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", moment(value).utc().unix());
};
const datetime = computed(() => {
  if (props.modelValue) {
    return moment.utc(props.modelValue).local().format("YYYY-MM-DDTHH:mm");
  }
  return null;
});
</script>
