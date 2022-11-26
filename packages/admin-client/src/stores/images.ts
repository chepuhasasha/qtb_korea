import { useLoaderStore } from "./loader";
import { useAxios } from "@/composables/axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useServerMessagesStore } from "@/stores/serverMessages";
import type { IImage, IImageExtended } from "@qtb_korea/types";
import { useUserStore } from "./user";

export interface ImagesState {
  images: IImageExtended[];
}

export const useImagesStore = defineStore("images", () => {
  const state = ref<ImagesState>({
    images: [],
  });
  const { addMessage } = useServerMessagesStore();
  const { setLoader } = useLoaderStore();
  const axios = useAxios();
  const { state: userState } = useUserStore();

  const upload = async (data: {
    file: Blob;
    brand_id: string | null;
    product_id: string | null;
  }) => {
    setLoader(true);
    const form = new FormData();
    form.append("image", data.file);
    if (data.brand_id) {
      form.append("brand_id", data.brand_id);
    } else if (data.product_id) {
      form.append("product_id", data.product_id);
    }
    return await axios
      .post<IImage>(`images`, form, {
        headers: {
          ...userState.headers,
          "Content-Type": "multypart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data)
        addMessage({
          code: 200,
          message: `Image is uploaded!`,
          type: "ok",
        });
        setLoader(false);
        return res.data;
      })
      .catch((err) => {
        console.log(err)
        addMessage({
          code: err.response.status,
          message: err.response.statusText,
          type: "error",
        });
        setLoader(false);
        return null;
      });
  };

  return { state, upload };
});
