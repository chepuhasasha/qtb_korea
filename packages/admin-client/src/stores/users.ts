import { useLoaderStore } from "./loader";
import { useAxios } from "@/composables/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useServerMessagesStore } from "@/stores/serverMessages";
import type { IUserCreate, IUserData } from "@qtb_korea/types";
import { useUserStore } from "./user";

export interface UsersState {
  users: IUserData[];
}

export const useUsersStore = defineStore("users", () => {
  const state = ref<UsersState>({
    users: [],
  });
  const { addMessage } = useServerMessagesStore();
  const { setLoader } = useLoaderStore();
  const axios = useAxios();
  const { state: userState } = useUserStore();

  const get = async () => {
    setLoader(true);
    return await axios
      .get<IUserData[]>("users", { headers: userState.headers })
      .then((res) => {
        state.value.users = res.data;
        addMessage({
          code: 200,
          message: "Users is loaded!",
          type: "ok",
        });
        setLoader(false);
        return state.value.users;
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
      .delete(`users/${id}`, { headers: userState.headers })
      .then((res) => {
        addMessage({
          code: 200,
          message: `User: "${id}" is removed!`,
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

  const create = async (data: IUserCreate) => {
    setLoader(true);
    return await axios
      .post(`users`, data, { headers: userState.headers })
      .then((res) => {
        addMessage({
          code: 200,
          message: `User: "${data.username}" is created!`,
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
