import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoaderStore = defineStore("loader", () => {
  const state = ref({load: false});

  const setLoader = (condition: boolean) => {
    state.value.load = condition
  }

  return { state, setLoader };
});
