<template lang="pug">
WrapperForm
  ButtonTag(@click="createProduct") Create
  template(v-slot:body)
    .form_row
      InputTag(
        label="Title",
        placeholder="some product totle...",
        v-model="state.info.title"
        :error='validate.info.title.$errors[0]?.$message'
      )
      SelectTag(
        label="Brand",
        v-model="state.info.brand_id",
        :error='validate.info.brand_id.$errors[0]?.$message'
      )
        option(
          v-for='brand in brandsState.brands'
          :key='brand._id' :value='brand._id'
        ) {{ brand.title }}
    TextareaTag(
      rows="4"
      label="Description",
      placeholder="some product description...",
      v-model="state.info.description"
      :error='validate.info.description.$errors[0]?.$message'
    )
    .form_row
      InputTag(
        label="OZON link",
        placeholder="some link...",
        v-model="state.links.ozon"
        :error='validate.links.ozon.$errors[0]?.$message'
      )
      InputTag(
        label="Default link",
        placeholder="some link...",
        v-model="state.links.default"
        :error='validate.links.default.$errors[0]?.$message'
      )
    .form_row
      TextareaTag(
        rows="4"
        label="Characteristic #1",
        placeholder="some description...",
        v-model="state.info.characteristics['1']"
        :error="validate.info.characteristics['1'].$errors[0]?.$message"
      )
      TextareaTag(
        rows="4"
        label="Characteristic #2",
        placeholder="some description...",
        v-model="state.info.characteristics['2']"
        :error="validate.info.characteristics['2'].$errors[0]?.$message"
      )
      TextareaTag(
        rows="4"
        label="Characteristic #3",
        placeholder="some description...",
        v-model="state.info.characteristics['3']"
        :error="validate.info.characteristics['3'].$errors[0]?.$message"
      )
</template>
<script lang="ts" setup>
import type { IProduct } from "@qtb_korea/types";
import { useProductsStore, useBrandsStore } from "@/stores";
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const { create } = useProductsStore();
const { state: brandsState } = useBrandsStore();

const state = reactive<IProduct>({
  info: {
    title: "",
    description: "",
    brand_id: "",
    characteristics: { 1: "", 2: "", 3: "" },
  },
  links: {
    ozon: "",
    default: "",
  },
  assets: {
    baner: "",
    images: [],
  },
  localization: {
    ru: "",
    en: "",
  },
});

const validate = useVuelidate(
  {
    info: {
      title: { required },
      description: { required },
      brand_id: { required },
      characteristics: {
        "1": { required },
        "2": { required },
        "3": { required },
      },
    },
    links: {
      ozon: { required },
      default: { required },
    },
    assets: {
      baner: { required },
      images: { required },
    },
    localization: {
      ru: { required },
      en: { required },
    },
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
