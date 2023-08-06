// Product is request config (url, body?)
// Builder is responsible for building the product & return that
// Director is responsible Request Processor

import { AxiosRequestConfig } from "axios";
import RequestConfig from "./RequestConfig";

// Usage
export default class BaseRequestBuilder {
  config: RequestConfig;

  constructor() {
    this.config = new RequestConfig();
  }

  build(): AxiosRequestConfig {
    return {};
  }

  // setUrl(url: string) {
  //   this.config.setUrl(url);
  // }

  // setParams(params: Record<string, any>) {
  //   this.config.setParams(params);
  // }

  // build() {
  //   return this.config.build();
  // }
}
