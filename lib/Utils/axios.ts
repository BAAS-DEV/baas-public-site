import axios, { AxiosInstance, AxiosResponse } from "axios";

const baasAxios: AxiosInstance = axios.create({
  baseURL: "http://api.baas.dev/api",
  timeout: 5000,
});

export default baasAxios;
