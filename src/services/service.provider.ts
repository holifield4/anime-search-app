import axios, { type AxiosResponse } from "axios";

const http = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  timeout: 25000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(function (response: AxiosResponse) {
  return response as AxiosResponse;
});

export default http;
