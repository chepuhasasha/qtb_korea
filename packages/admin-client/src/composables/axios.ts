import axios from "axios";

export function useAxios() {
  return axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true,
  });
}
