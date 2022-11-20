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
      v-model="state.logo"
      :error='validate.logo.$errors[0]?.$message'
    )
</template>
<script lang="ts" setup>
import type { IBrand } from "@qtb_korea/types";
import { useBrandsStore } from "@/stores";
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const { create } = useBrandsStore();

const state = reactive<IBrand>({
  title: "",
  logo: "",
});

const validate = useVuelidate(
  {
    title: { required },
    logo: { required },
  },
  state
);

const createBrand = async () => {
  const valid = await validate.value.$validate();
  if (valid) {
    create(state);
  }
};
</script>