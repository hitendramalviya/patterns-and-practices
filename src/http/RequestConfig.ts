import { AxiosRequestConfig } from "axios";

// Product
export default class RequestConfig {
  url: string;

  params: Record<string, any>;

  headers: Record<string, string | number>;

  data: any;

  constructor() {
    this.url = "";
    this.params = {};
    this.headers = {};
  }

  setUrl(url: string) {
    this.url = url;
  }

  setParams(params: any) {
    this.params = params;
  }

  setHeaders(headers: Record<string, string | number>) {
    this.headers = headers;
  }

  setData<T = any>(data: T) {
    this.data = data;
  }

  get(): AxiosRequestConfig {
    return {
      url: this.url,
      params: this.params,
      headers: this.headers,
      data: this.data,
    };
  }
}
