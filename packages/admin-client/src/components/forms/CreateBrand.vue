<template lang="pug">
WrapperForm
  ButtonTag(@click="createBrand") Create
  template(v-slot:body)
    h4 COMMON
    .form_row
      InputImageTag(
        label="Baner",
        placeholder="some baner url...",
        @add="state.images[0] = $event"
        :error='validate.images.$errors[0]?.$message'
      )
      InputImageTag(
        label="Logo",
        placeholder="some logo url...",
        @add="state.images[1] = $event"
        :error='validate.images.$errors[0]?.$message'
      )
    h4 EN
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
    h4 RU
    InputTag(
      label="Название",
      placeholder="название бренда...",
      v-model="state.ru_title"
      :error='validate.ru_title.$errors[0]?.$message'
    )
    TextareaTag(
      rows="4"
      label="Описание",
      placeholder="описание бренда...",
      v-model="state.ru_description"
      :error='validate.ru_description.$errors[0]?.$message'
    )
</template>
<script lang="ts" setup>
import type { IBrandCreateForm } from "@qtb_korea/types";
import { useBrandsStore } from "@/stores";
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const { create } = useBrandsStore();

const state = reactive<IBrandCreateForm>({
  title: "",
  ru_title: "",
  description: "",
  ru_description: "",
  images: [],
});

const validate = useVuelidate(
  {
    title: { required },
    ru_title: { required },
    description: { required },
    ru_description: { required },
    images: { required },
  },
  state
);

const createBrand = async () => {
  const valid = await validate.value.$validate();
  if (valid) {
    create(state as IBrandCreateForm);
  }
};
</script>
