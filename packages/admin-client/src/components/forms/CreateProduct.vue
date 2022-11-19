<template lang="pug">
.product_form
  .product_form_body
    .product_form_row
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
        option test
        option test2
        option test3
    TextareaTag(
      rows="4"
      label="Description",
      placeholder="some product description...",
      v-model="state.info.description"
      :error='validate.info.description.$errors[0]?.$message'
    )
  ButtonTag(@click="createProduct") Create
  //- pre {{ data }}
</template>
<script lang="ts" setup>
import type { IProduct } from "@qtb_korea/types";
import { useProductsStore } from "@/stores";
import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const { create } = useProductsStore();

const state = reactive<IProduct>({
  info: {
    title: "",
    description: "",
    brand_id: "",
    characteristics: { test: "123" },
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
      characteristics: { required },
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
<style lang="sass">
.product_form
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
