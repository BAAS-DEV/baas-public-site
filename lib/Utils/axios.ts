import axios, { AxiosInstance, AxiosResponse } from "axios";

const baasAxios: AxiosInstance = axios.create({
  baseURL: "https://api.baas.dev/api",
  // baseURL: "http://localhost:1337/api",
  timeout: 5000,
});

export default baasAxios;
