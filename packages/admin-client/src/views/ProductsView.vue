<template lang="pug">
WrapperPage
  BlockListItem(
    v-for="product in filtred",
    :key="product._id",
    :obj="product"
    type='product'
    :title='product.info.title'
    :id='product._id'
  )
  template(v-slot:bar)
    ButtonTag(mode="icon", @click="get")
      WidgetIcon(icon="spin")
    InputTag(placeholder="search by title..." v-model='search')
    ButtonTag(mode="icon", @click="open = true" active)
      WidgetIcon(icon="plus")

Teleport(to="body")
  Transition(name='modal')
    WrapperModal(v-if="open" @close="open = false", title="Create new product" width='80vw')
      FormCreateProduct
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useProductsStore } from "@/stores"

const { state, get } = useProductsStore();
const open = ref<boolean>(false);
const search = ref<string | null>(null);

const filtred = computed(() => {
  return state.products.filter((t) => {
    if (search.value) {
      return t.info.title.toLowerCase().includes(search.value.toLowerCase());
    }
    return true;
  });
});

onMounted(() => {
  get();
});
</script>
