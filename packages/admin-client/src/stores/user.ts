import { useAxios } from "@/composables/axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useServerMessagesStore } from "./serverMessages";
import { useLoaderStore } from "./loader";
import type { ILogin, IUserData } from "@qtb_korea/types";
import moment from "moment";

export type UserState = {
  user: IUserData | null;
  iat: number;
  headers: {
    "X-QTB-KEY": string | null;
    Authorization: string | null;
  };
};

export const useUserStore = defineStore("user", () => {
  const state = ref<UserState>({
    user: null,
    iat: 0,
    headers: {
      "X-QTB-KEY": null,
      Authorization: null,
    },
  });
  const { addMessage } = useServerMessagesStore();
  const { setLoader } = useLoaderStore();
  const axios = useAxios();
  const isAdmin = computed(() => {
    if (state.value.user) {
      return (
        state.value.user?.role === "root" || state.value.user?.role === "admin"
      );
    }
    return false;
  });
  const isRoot = computed(() => {
    if (state.value.user) {
      return state.value.user.role === "root";
    }
    return false;
  });

  const login = async (login: ILogin) => {
    setLoader(true);
    return await axios
      .post("auth/login", login, { headers: state.value.headers })
      .then((res) => {
        state.value.iat = res.data.iat;
        state.value.user = res.data.user;
        state.value.headers.Authorization = `Bearer ${res.data.access_token}`;
        addMessage({
          code: 200,
          message: "You have successfully logged in!",
          type: "ok",
        });
        setTimeout(() => {
          refresh();
        }, (res.data.iat - moment().utc().unix()) * 1000);
        setLoader(false);
        return state.value.user;
      })
      .catch((err) => {
        addMessage({
          code: err.code,
          message: err.message,
          type: "error",
        });
        setLoader(false);
        return null;
      });
  };
  const signup = async (login: ILogin) => {
    setLoader(true);
    return await axios
      .post("auth/signup", login, { headers: state.value.headers })
      .then((res) => {
        addMessage({
          code: 200,
          message: res.data.message,
          type: "ok",
        });
        setLoader(false);
        return state.value.user;
      })
      .catch((err) => {
        addMessage({
          code: err.code,
          message: err.message,
          type: "error",
        });
        setLoader(false);
        return null;
      });
  };

  const logout = async () => {
    setLoader(true);
    return await axios
      .get("auth/logout", { headers: state.value.headers })
      .then((res) => {
        state.value.user = null;
        state.value.headers["X-QTB-KEY"] = null;
        state.value.headers.Authorization = null;
        addMessage({ code: 200, message: res.data.message, type: "ok" });
        setLoader(false);
        return true;
      })
      .catch((err) => {
        addMessage({
          code: err.code,
          message: err.message,
          type: "error",
        });
        setLoader(false);
        return null;
      });
  };

  const get = async () => {
    setLoader(true);
    return await axios
      .get<IUserData>("auth/user", { headers: state.value.headers })
      .then((res) => {
        state.value.user = res.data;
        addMessage({
          code: 200,
          message: "Access token is fresh!",
          type: "ok",
        });
        setLoader(false);
        return state.value.user;
      })
      .catch((err) => {
        setLoader(false);
        return null;
      });
  };

  const refresh = async () => {
    setLoader(true);
    return await axios
      .get("auth/refresh", { headers: state.value.headers })
      .then((res) => {
        state.value.iat = res.data.iat;
        state.value.user = res.data.user;
        state.value.headers.Authorization = `Bearer ${res.data.access_token}`;
        addMessage({ code: 200, message: "Access token updated!", type: "ok" });
        setLoader(false);
        setTimeout(() => {
          refresh();
        }, (res.data.iat - moment().utc().unix()) * 1000);
        return state.value.user;
      })
      .catch((err) => {
        addMessage({
          code: err.code,
          message: err.message,
          type: "error",
        });
        setLoader(false);
        return null;
      });
  };

  return { state, login, signup, logout, get, refresh, isAdmin, isRoot };
});
