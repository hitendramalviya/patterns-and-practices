import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class Http {
  baseUrl: string;

  instance: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;

    this.instance = axios.create({
      baseURL: this.baseUrl,
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    });
  }

  get(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: "GET" });
  }

  post(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: "POST" });
  }

  put(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: "PUT" });
  }

  delete(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: "DELETE" });
  }

  patch(config: AxiosRequestConfig) {
    return this.instance.request({ ...config, method: "PATCH" });
  }
}
