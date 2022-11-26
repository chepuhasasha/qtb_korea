<template lang="pug">
WrapperForm
  ButtonTag(@click="createBrand") Create
  template(v-slot:body)
    InputTag(
      label="Title",
      placeholder="some brand title...",
      v-model="state.title"
      :error='validate.title.$errors[0]?.$message'
    )
    TextareaTag(
      rows="4"
      label="Description",
      placeholder="some brand description...",
      v-model="state.description"
      :error='validate.description.$errors[0]?.$message'
    )
    InputImageTag(
      label="Baner",
      placeholder="some baner url...",
      @add="state.baner = $event"
      :error='validate.baner.$errors[0]?.$message'
    )
</template>
<script lang="ts" setup>
import type { IBrandCreate } from "@qtb_korea/types";
import { useBrandsStore } from "@/stores";
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const { create } = useBrandsStore();

const state = reactive<{ [K in keyof IBrandCreate]: null | IBrandCreate[K] }>({
  title: null,
  baner: null,
  description: null,
});

const validate = useVuelidate(
  {
    title: { required },
    baner: { required },
    description: { required },
  },
  state
);

const createBrand = async () => {
  const valid = await validate.value.$validate();
  if (valid) {
    create(state as IBrandCreate);
  }
};
</script>
