<template lang="pug">
.tform
  .tform_body
    .tform_row
      InputTag(
        label="Title",
        placeholder="My best tournament!",
        v-model="data.info.title.value"
        :error="data.info.title.error"
      )
      InputTag(
        v-model="data.info.baner.value", 
        :error="data.info.baner.error", 
        label="Baner", 
        placeholder="baner url")
      SelectTag(
        label="Type",
        v-model="data.config.algorithm.value",
        :error="data.config.algorithm.error",
      )
        option test
        option test2
        option test3
    TextareaTag(
      rows="4"
      label="Description",
      placeholder="This is my best tournament!",
      v-model="data.info.description.value"
      :error="data.info.description.error"
    )
    TextareaTag(
      rows="4"
      v-model="data.info.rules.value",
      :error="data.info.rules.error",
      label="Rules",
      placeholder="These are the rules of my best tournament!"
    )
    .tform_row
      InputTag(
        v-model="data.config.game.value", 
        :error="data.config.game.error", 
        label="Game", 
        placeholder="game")
      InputTag(
        v-model="data.config.game_room.value",
        :error="data.config.game_room.error",
        label="Game room",
        placeholder="game room"
      )
    .tform_row
      InputDateTag(
        v-model="data.time.start.value",
        :error="data.time.start.error",
        label="Start time",
      )
      InputDateTag(
        v-model="data.time.notification.value",
        :error="data.time.notification.error",
        label="Notification time",
      )
      InputDateTag(
        v-model="data.time.end.value",
        :error="data.time.end.error",
        label="End time",
      )
  ButtonTag(@click="newTournament") Create
  //- pre {{ data }}
</template>
<script lang="ts" setup>
import type { ITournament, ITournamentConfig } from "@tournaments/types";
import { ref, onMounted } from "vue";
import { useUserStore } from "../../stores/user";
import { useTournamentsStore } from "@/stores/tournaments";

const { state: userState } = useUserStore();
const { create } = useTournamentsStore();

const newTournament = () => {
  let valid = true;

  const body = Object.keys(data.value).reduce<Record<string, unknown>>(
    (acc, key) => {
      if (data.value[key as keyof ITournament].value === null) {
        data.value[key as keyof ITournament].error = "Required field!";
        valid = false;
      }
      return acc;
    },
    {}
  );
  if (valid) {
    create(body as unknown as ITournament);
  }
};

const data = ref<{
  [K in keyof ITournament]: {
    [L in keyof ITournament[K]]: {
      value: ITournament[K][L] | null;
      error: string | null;
    };
  };
}>({
  info: {
    title: { value: null, error: null },
    description: { value: null, error: null },
    rules: { value: null, error: null },
    baner: { value: null, error: null },
    prizes: { value: [], error: null },
  },
  config: {
    game: { value: null, error: null },
    game_room: { value: null, error: null },
    algorithm: { value: null, error: null },
  },
  time: {
    start: { value: null, error: null },
    notification: { value: null, error: null },
    end: { value: null, error: null },
  },
  terms: {
    min_bet: { value: null, error: null },
  },
  permissions: {
    public: { value: null, error: null },
    owners: { value: [], error: null },
    editors: { value: [], error: null },
  },
});

onMounted(() => {
  data.value.permissions.owners.value = [userState.user?.id as string];
});
</script>
<style lang="sass">
.tform
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
