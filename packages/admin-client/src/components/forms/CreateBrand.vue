<template lang="pug">
.brand_form
  .brand_form_body
    InputTag(
      label="Title",
      placeholder="some brand title...",
      v-model="state.title"
      :error='validate.title.$errors[0]?.$message'
    )
    InputTag(
      label="Logo",
      placeholder="some logo url...",
      v-model="state.logo"
      :error='validate.logo.$errors[0]?.$message'
    )
  ButtonTag(@click="createBrand") Create
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
<style lang="sass">
.brand_form
  padding: 20px
  display: flex
  flex-direction: column
  gap: 20px
  height: 100%
  .button
    align-self: end
    justify-self: end
  &_body
    display: flex
    flex-direction: column
    gap: 10px
  &_row
    display: flex
    gap: 10px
    .input
      width: 100%
</style>
