import { AxiosRequestConfig } from "axios";

export default class RequestConfig {
  url: string;

  params: Record<string, any>;

  constructor() {
    this.url = "";
    this.params = {};
  }

  setUrl(url) {
    this.url = url;
  }

  setParams(params) {
    this.params = params;
  }

  build(): AxiosRequestConfig {
    return {
      url: this.url,
      params: this.params,
    };
  }
}
