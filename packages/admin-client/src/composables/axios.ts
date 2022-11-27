import axios from "axios";

export function useAxios() {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  });
}
