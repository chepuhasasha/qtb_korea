<template lang="pug">
.listitem(v-if='obj')
  .listitem_id
    span id: {{ id }}
  h4(v-if="!tabs.json") {{ title }}
  highlightjs(
    v-if="tabs.json"
    language="json",
    :code="JSON.stringify(obj, null, 4)"
  )
  .listitem_bar(v-if='isAdmin')
    ButtonTag(mode="icon", @click="tabs.edit = !tabs.edit", :active="tabs.edit")
      WidgetIcon(icon="edit")
    ButtonTag(mode="icon", @click="tabs.json = !tabs.json", :active="tabs.json")
      WidgetIcon(icon="json")
    ButtonTag(mode="icon", @click="tabs.delete = true" danger)
      WidgetIcon(icon="trash")

  Teleport(to="body")
    Transition(name='modal' @ok='deleteObj' @cancel='tabs.delete = false')
      WrapperAlert(v-if='tabs.delete')
        p 
        |Are you sure you wont to delete {{ type }}
        | #[b "{{ title }}"] ?
</template>
<script lang="ts" setup>
import { useBrandsStore, useProductsStore, useUsersStore, useUserStore } from "@/stores";
import type {
  IBrandExtended,
  IProductExtended,
  IUserData,
} from "@qtb_korea/types";
import { ref, type PropType } from "vue";

const props = defineProps({
  obj: {
    type: Object as PropType<IBrandExtended | IProductExtended | IUserData>,
    default: null,
  },
  type: {
    type: String as PropType<"brand" | "product" | "user">,
    default: null,
  },
  title: {
    type: String as PropType<string>,
    default: null,
  },
  id: {
    type: String as PropType<string>,
    default: null,
  },
});

const tabs = ref({
  edit: false,
  json: false,
  delete: false,
});

const { remove: removeBrand } = useBrandsStore();
const { remove: removeProduct } = useProductsStore();
const { remove: removeUser } = useUsersStore()
const { isAdmin } = useUserStore();

const deleteObj = () => {
  switch (props.type) {
    case "brand":
      removeBrand(props.id);
      break;
    case "product":
      removeProduct(props.id);
      break;
    case "user":
      removeUser(props.id);
      break;

    default:
      break;
  }
};
</script>
<style lang="sass">
.listitem
  display: flex
  flex-direction: column
  padding: 40px 40px 40px 30px
  border-left: 10px solid var(--contrast-200)
  gap: 10px
  background: var(--contrast-200)
  color: var(--text-color-100)
  justify-content: space-between
  &:hover
    background: var(--contrast-300)
    border-color: var(--primary-100)
  &_id
    width: max-content
    padding: 4px 10px
    background: var(--contrast-300)
    border: var(--border-100)
    border-radius: 4px
  &_bar
    display: flex
    gap: 10px
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
