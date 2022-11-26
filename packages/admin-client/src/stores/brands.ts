import { useLoaderStore } from "./loader";
import { useAxios } from "@/composables/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useServerMessagesStore } from "@/stores/serverMessages";
import type { IBrand, IBrandCreate, IBrandExtended } from "@qtb_korea/types";
import { useUserStore } from "./user";

export interface BrandsState {
  brands: IBrandExtended[];
}

export const useBrandsStore = defineStore("brands", () => {
  const state = ref<BrandsState>({
    brands: [],
  });
  const { addMessage } = useServerMessagesStore();
  const { setLoader } = useLoaderStore();
  const axios = useAxios();
  const { state: userState } = useUserStore();

  const get = async () => {
    setLoader(true);
    return await axios
      .get<IBrandExtended[]>("brands", { headers: userState.headers })
      .then((res) => {
        state.value.brands = res.data;
        addMessage({
          code: 200,
          message: "Brands is loaded!",
          type: "ok",
        });
        setLoader(false);
        return state.value.brands;
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
      .delete(`brands/${id}`, { headers: userState.headers })
      .then((res) => {
        addMessage({
          code: 200,
          message: `Product: "${id}" is removed!`,
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

  const create = async (data: IBrandCreate) => {
    setLoader(true);
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      form.append(key, data[key as keyof IBrandCreate]);
    });
    return await axios
      .post(`brands`, form, {
        headers: {
          ...userState.headers,
          "Content-Type": "multypart/form-data",
        },
      })
      .then((res) => {
        addMessage({
          code: 200,
          message: `Product: "${data.title}" is created!`,
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
