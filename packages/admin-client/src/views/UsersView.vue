<template lang="pug">
WrapperPage
  BlockUserListItem(
    v-for="user in filtred",
    :key="user.id",
    :user="user"
  )
  template(v-slot:bar)
    ButtonTag(mode="icon", @click="get")
      WidgetIcon(icon="spin")
    InputTag(placeholder="search by title..." v-model='search')
    ButtonTag(mode="icon", @click="open = true" active)
      WidgetIcon(icon="plus")

Teleport(to="body")
  Transition(name='modal')
    WrapperModal(v-if="open" @close="open = false", title="Create new user" width='80vw')
      FormCreateUser
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useUsersStore } from "@/stores"

const { state, get } = useUsersStore();
const open = ref<boolean>(false);
const search = ref<string | null>(null);

const filtred = computed(() => {
  return state.users.filter((t) => {
    if (search.value) {
      return t.username.toLowerCase().includes(search.value.toLowerCase());
    }
    return true;
  });
});

onMounted(() => {
  get();
});

</script>
