<template lang="pug">
.tournament(@click="open = true" v-if='product')
  h4 {{ product.info.title }}
  .tournament_description {{ product.info.description }}
  .tournament_head
    WidgetStatus
    .tournament_head_id
      span id: {{ product._id }}

  Teleport(to="body")
    Transition(name='modal')
      WrapperModal(v-if="open" @close="open = false", :title="product.info.title")
        template(v-slot:header)
          ButtonTag(v-if="isOwner" mode="icon", @click="activeTab = 'update'", :active="activeTab === 'update'")
            WidgetIcon(icon="edit")
          ButtonTag(mode="icon", @click="activeTab = 'json'", :active="activeTab === 'json'")
            WidgetIcon(icon="json")
          ButtonTag(v-if="isOwner" mode="icon", @click="deleteAlert = true" danger)
            WidgetIcon(icon="trash")
        highlightjs(
          v-show="activeTab === 'json'",
          language="json",
          :code="JSON.stringify(product, null, 4)"
        )
    Transition(name='modal' @ok='deleteProduct' @cancel='deleteAlert = false')
      WrapperAlert(v-if='deleteAlert')
        p 
        |Are you sure you wont to delete 
        | #[b "{{ product.info.title }}"] ?
    //- BlockTournamentForm(v-show="activeTab === 'update'", :tournament="tournament")
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useProductsStore } from "@/stores";
import type { IProductExtended } from "@qtb_korea/types";
import type { PropType } from "vue";
import { useUserStore } from "@/stores";

const deleteAlert = ref(false);
const open = ref<boolean>(false);
const activeTab = ref<string>("update");
const { remove } = useProductsStore();
const { state: userState } = useUserStore();

const props = defineProps({
  product: {
    type: Object as PropType<IProductExtended>,
    require: true,
  },
});

const deleteProduct = () => {
  if (props.product) remove(props.product?._id);
};

const isOwner = computed(() => {
  if (userState.user) {
    return userState.user.role === "root";
  }
  return false;
});
</script>
<style lang="sass">
.tournament
  cursor: pointer
  display: flex
  flex-direction: column
  padding: 40px
  gap: 10px
  background: var(--contrast-200)
  color: var(--text-color-100)
  justify-content: space-between
  &:hover
    background: var(--contrast-300)
  &_head
    display: flex
    justify-content: space-between
    align-items: center
    flex-wrap: wrap
    gap: 5px
    &_id
      padding: 4px 10px
      background: var(--contrast-300)
      border: var(--border-100)
      border-radius: 4px

  &_description
    font: var(--font-200)
    color: var(--text-color-200)
    height: 100%
    max-height: 100%
  &_modal
    display: flex
    flex-direction: column
    max-height: 100%
    height: 100%
    gap: 10px
    &_body
      height: 100%
      overflow-y: auto
</style>
