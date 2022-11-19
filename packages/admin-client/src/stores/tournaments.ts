import { useLoaderStore } from "./loader";
import { useAxios } from "@/composables/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useServerMessagesStore } from "@/stores/serverMessages";
import type { ITournament, ITournamentExtended } from "@tournaments/types";
import { useUserStore } from "./user";

export interface TournamentsState {
  tournaments: ITournamentExtended[];
}

export const useTournamentsStore = defineStore("tournaments", () => {
  const state = ref<TournamentsState>({
    tournaments: [],
  });
  const { addMessage } = useServerMessagesStore();
  const { setLoader } = useLoaderStore();
  const { refresh } = useUserStore();
  const axios = useAxios();
  const { state: userState, checkTime } = useUserStore();

  const get = async () => {
    setLoader(true);
    return await axios
      .get<ITournamentExtended[]>("tournaments", { headers: userState.headers })
      .then((res) => {
        state.value.tournaments = res.data;
        addMessage({
          code: 200,
          message: "Tournaments is loaded!",
          type: "ok",
        });
        setLoader(false);
        return state.value.tournaments;
      })
      .catch((err) => {
        addMessage({
          code: err.response.status,
          message: err.response.statusText,
          type: "error",
        });
        setLoader(false);
        return null;
      });
  };

  const remove = async (id: string) => {
    setLoader(true);
    return await axios
      .delete(`tournaments/${id}`, { headers: userState.headers })
      .then((res) => {
        addMessage({
          code: 200,
          message: `Tournament: "${id}" is removed!`,
          type: "ok",
        });
        get();
        setLoader(false);
        return res.data;
      })
      .catch((err) => {
        addMessage({
          code: err.response.status,
          message: err.response.statusText,
          type: "error",
        });
        setLoader(false);
        return null;
      });
  };

  const create = async (data: ITournament) => {
    setLoader(true);
    return await axios
      .post(`tournaments`, data, { headers: userState.headers })
      .then((res) => {
        addMessage({
          code: 200,
          message: `Tournament: "${data.info.title}" is created!`,
          type: "ok",
        });
        get();
        setLoader(false);
        return res.data;
      })
      .catch((err) => {
        addMessage({
          code: err.response.status,
          message: err.response.statusText,
          type: "error",
        });
        setLoader(false);
        return null;
      });
  };

  return { state, get, remove, create };
});
