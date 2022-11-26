<template lang="pug">
WrapperPage
  BlockListItem(
    v-for="brand in filtred",
      :key="brand._id",
      :obj="brand"
      type='brand'
      :title='brand.info.title'
      :id='brand._id'
  )
  template(v-slot:bar)
    ButtonTag(mode="icon", @click="get")
      WidgetIcon(icon="spin")
    InputTag(placeholder="search by title..." v-model='search')
    ButtonTag(mode="icon", @click="open = true" active)
      WidgetIcon(icon="plus")

Teleport(to="body")
  Transition(name='modal')
    WrapperModal(v-if="open" @close="open = false", title="Create new brend" width='80vw')
      FormCreateBrand
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useBrandsStore } from "@/stores"

const { state, get } = useBrandsStore();
const open = ref<boolean>(false);
const search = ref<string | null>(null);

const filtred = computed(() => {
  return state.brands.filter((t) => {
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
