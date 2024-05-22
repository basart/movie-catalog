import axios, { AxiosRequestConfig } from "axios";
import config from "./config";

export type RequestOptions = AxiosRequestConfig;

async function makeRequest<T>({
  headers = {},
  params = {},
  ...options
}: RequestOptions) {
  return axios<T>({
    baseURL: config.baseUrl,
    headers: {
      "content-type": "application/json",
      ...headers,
    },
    params: {
      apikey: config.apiKey,
      ...params,
    },
    ...options,
  });
}

export default makeRequest;
