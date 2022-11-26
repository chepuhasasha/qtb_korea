import { useLoaderStore } from "./loader";
import { useAxios } from "@/composables/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useServerMessagesStore } from "@/stores/serverMessages";
import type {
  IProduct,
  IProductCreateForm,
  IProductExtended,
  IProductCreate,
} from "@qtb_korea/types";
import { useUserStore } from "./user";

export interface ProductsState {
  products: IProductExtended[];
}

export const useProductsStore = defineStore("products", () => {
  const state = ref<ProductsState>({
    products: [],
  });
  const { addMessage } = useServerMessagesStore();
  const { setLoader } = useLoaderStore();
  const axios = useAxios();
  const { state: userState } = useUserStore();

  const get = async () => {
    setLoader(true);
    return await axios
      .get<IProductExtended[]>("products", { headers: userState.headers })
      .then((res) => {
        state.value.products = res.data;
        addMessage({
          code: 200,
          message: "Products is loaded!",
          type: "ok",
        });
        setLoader(false);
        return state.value.products;
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
      .delete(`products/${id}`, { headers: userState.headers })
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

  const create = async (data: IProductCreateForm) => {
    setLoader(true);
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "images") {
        data.images.forEach(file => {
          form.append("images", file);
        })
      } else {
        form.append(key, data[key as keyof IProductCreate]);
      }
    });
    return await axios
      .post(`products`, form, {
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
