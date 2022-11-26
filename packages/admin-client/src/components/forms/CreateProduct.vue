<template lang="pug">
WrapperForm
  ButtonTag(@click="createProduct") Create
  template(v-slot:body)
    h4 COMMON
    SelectTag(
      label="Brand",
      v-model="state.brand_id",
      :error='validate.brand_id.$errors[0]?.$message'
    )
      option(
        v-for='brand in brandsState.brands'
        :key='brand._id' :value='brand._id'
      ) {{ brand.info.title }}
    .form_row
      InputImageTag(
        label="Photo 1",
        placeholder="url...",
        @add="state.images[0] = $event"
        :error='validate.images.$errors[0]?.$message'
      )
      InputImageTag(
        label="Photo 2",
        placeholder="url...",
        @add="state.images[1] = $event"
        :error='validate.images.$errors[0]?.$message'
      )
      InputImageTag(
        label="Photo 3",
        placeholder="url...",
        @add="state.images[2] = $event"
        :error='validate.images.$errors[0]?.$message'
      )
      InputImageTag(
        label="Photo 4",
        placeholder="url...",
        @add="state.images[3] = $event"
        :error='validate.images.$errors[0]?.$message'
      )
    h4 EN
    .form_row
      InputTag(
        label="Title",
        placeholder="some product totle...",
        v-model="state.title"
        :error='validate.title.$errors[0]?.$message'
      )
    TextareaTag(
      rows="4"
      label="Description",
      placeholder="some product description...",
      v-model="state.description"
      :error='validate.description.$errors[0]?.$message'
    )
    .form_row
      InputTag(
        label="Link name",
        placeholder="ozon...",
        v-model="state.link_name"
        :error='validate.link_name.$errors[0]?.$message'
      )
      InputTag(
        label="Link URL",
        placeholder="https://...",
        v-model="state.link_url"
        :error='validate.link_url.$errors[0]?.$message'
      )
    .form_row
      TextareaTag(
        rows="4"
        label="Characteristic #1",
        placeholder="some description...",
        v-model="state.characteristics_1"
        :error="validate.characteristics_1.$errors[0]?.$message"
      )
      TextareaTag(
        rows="4"
        label="Characteristic #2",
        placeholder="some description...",
        v-model="state.characteristics_2"
        :error="validate.characteristics_2.$errors[0]?.$message"
      )
      TextareaTag(
        rows="4"
        label="Characteristic #3",
        placeholder="some description...",
        v-model="state.characteristics_3"
        :error="validate.characteristics_3.$errors[0]?.$message"
      )
    h4 RU
    .form_row
      InputTag(
        label="Название",
        placeholder="название...",
        v-model="state.ru_title"
        :error='validate.ru_title.$errors[0]?.$message'
      )
    TextareaTag(
      rows="4"
      label="Описание",
      placeholder="описание...",
      v-model="state.ru_description"
      :error='validate.ru_description.$errors[0]?.$message'
    )
    .form_row
      InputTag(
        label="Имя ссылки",
        placeholder="ozon...",
        v-model="state.ru_link_name"
        :error='validate.ru_link_name.$errors[0]?.$message'
      )
      InputTag(
        label="URL ссылки",
        placeholder="https://...",
        v-model="state.ru_link_url"
        :error='validate.ru_link_url.$errors[0]?.$message'
      )
    .form_row
      TextareaTag(
        rows="4"
        label="Характеристика #1",
        placeholder="описание...",
        v-model="state.ru_characteristics_1"
        :error="validate.ru_characteristics_1.$errors[0]?.$message"
      )
      TextareaTag(
        rows="4"
        label="Характеристика #2",
        placeholder="описание...",
        v-model="state.ru_characteristics_2"
        :error="validate.ru_characteristics_2.$errors[0]?.$message"
      )
      TextareaTag(
        rows="4"
        label="Характеристика #3",
        placeholder="описание...",
        v-model="state.ru_characteristics_3"
        :error="validate.ru_characteristics_3.$errors[0]?.$message"
      )
</template>
<script lang="ts" setup>
import type { IProductCreateForm } from "@qtb_korea/types";
import { useProductsStore, useBrandsStore } from "@/stores";
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const { create } = useProductsStore();
const { state: brandsState } = useBrandsStore();

const state = reactive<IProductCreateForm>({
  brand_id: "",
  title: "",
  description: "",
  characteristics_1: "",
  characteristics_2: "",
  characteristics_3: "",
  link_name: "",
  link_url: "",
  ru_title: "",
  ru_description: "",
  ru_characteristics_1: "",
  ru_characteristics_2: "",
  ru_characteristics_3: "",
  ru_link_name: "",
  ru_link_url: "",
  images: [],
});

const validate = useVuelidate(
  {
    brand_id: { required },
    title: { required },
    description: { required },
    characteristics_1: { required },
    characteristics_2: { required },
    characteristics_3: { required },
    link_name: { required },
    link_url: { required },
    ru_title: { required },
    ru_description: { required },
    ru_characteristics_1: { required },
    ru_characteristics_2: { required },
    ru_characteristics_3: { required },
    ru_link_name: { required },
    ru_link_url: { required },
    images: { required },
  },
  state
);

const createProduct = async () => {
  const valid = await validate.value.$validate();
  if (valid) {
    create(state);
  }
};
</script>
