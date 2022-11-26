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
    InputImageTag(
      label="Logo",
      placeholder="some logo url...",
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

const state = reactive<IBrandCreate>({
  title: "",
  baner: new Blob(),
});

const validate = useVuelidate(
  {
    title: { required },
    baner: { required },
  },
  state
);

const createBrand = async () => {
  const valid = await validate.value.$validate();
  if (valid) {
    create(state)
  }
};
</script>
