<template lang="pug">
.useritem(v-if='user')
  .useritem_id
    span id: {{ user.id }}
  h4(v-if="!tabs.json") {{ user.username }}
  highlightjs(
    v-if="tabs.json"
    language="json",
    :code="JSON.stringify(user, null, 4)"
  )
  .useritem_bar(v-if='isAdmin')
    ButtonTag(mode="icon", @click="tabs.edit = !tabs.edit", :active="tabs.edit")
      WidgetIcon(icon="edit")
    ButtonTag(mode="icon", @click="tabs.json = !tabs.json", :active="tabs.json")
      WidgetIcon(icon="json")
    ButtonTag(mode="icon", @click="tabs.delete = true" danger)
      WidgetIcon(icon="trash")

  Teleport(to="body")
    Transition(name='modal' @ok='deleteBrand' @cancel='tabs.delete = false')
      WrapperAlert(v-if='tabs.delete')
        p 
        |Are you sure you wont to delete 
        | #[b "{{ user.username }}"] ?
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useUsersStore } from "@/stores";
import type { IUserData } from "@qtb_korea/types";
import type { PropType } from "vue";
import { useUserStore } from "@/stores";

const tabs = ref({
  edit: false,
  json: false,
  delete: false,
});

const { remove } = useUsersStore();
const { isAdmin } = useUserStore();

const props = defineProps({
  user: {
    type: Object as PropType<IUserData>,
    require: true,
  },
});

const deleteBrand = () => {
  if (props.user) remove(props.user?.id);
};
</script>
<style lang="sass">
.useritem
  display: flex
  flex-direction: column
  padding: 40px
  gap: 10px
  background: var(--contrast-200)
  color: var(--text-color-100)
  justify-content: space-between
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
