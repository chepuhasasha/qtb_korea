<template lang="pug">
.tournaments
  TransitionGroup.tournaments_list(name="list-absolute" tag="div")
    BlockTournamentListItem(
      v-for="tournament in filtred",
      :key="tournament._id",
      :tournament="tournament"
    )
  .tournaments_bar
    ButtonTag(mode="icon", @click="get")
      WidgetIcon(icon="spin")
    InputTag(placeholder="search by title..." v-model='search')
    ButtonTag(mode="icon", @click="open = true")
      WidgetIcon(icon="filter")
      | FILTER
    ButtonTag(mode="icon", @click="open = true" active)
      WidgetIcon(icon="plus")

Teleport(to="body")
  Transition(name='modal')
    WrapperModal(v-if="open" @close="open = false", title="Create new tournament" width='80vw')
      FormCreateTournament
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useTournamentsStore } from "@/stores/tournaments";

const { state, get } = useTournamentsStore();
const open = ref<boolean>(false);
const search = ref<string | null>(null);

const filtred = computed(() => {
  return state.tournaments.filter((t) => {
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
<style lang="sass">
.tournaments
  display: grid
  grid-template-rows: max-content 1fr
  gap: 2px
  font: var(--tont-100)
  color: var(--text-color-100)
  height: 100%
  &_list
    grid-area: 2/1/3/2
    display: grid
    grid-template-columns: 1fr
    gap: 2px
    overflow-y: auto
    height: 100%
  &_bar
    display: flex
    align-items: center
    gap: 10px
    grid-area: 1/1/2/2
    background: var(--contrast-200)
    padding: 10px
    height: max-content
    .input
      width: 100%
</style>
