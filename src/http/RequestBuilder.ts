import { AxiosRequestConfig } from "axios";

export default class RequestBuilder {
  private path: string[] = [];

  private headers: Record<string, string | number> = {};

  private params: Record<string, any> = {};

  private data: any;

  // Create builder
  static create(path: string = "") {
    return new RequestBuilder(path);
  }

  private constructor(path: string = "") {
    this.path.push(path);
  }

  // Director method
  setPath(...paths: string[]) {
    this.path.push(...paths);
    return this;
  }

  // Director method
  setHeaders(headers: Record<string, string | number>, override?: boolean) {
    this.headers = override ? { ...headers } : { ...this.headers, ...headers };
    return this;
  }

  // Director method
  setParams(params: Record<string, any>) {
    this.params = { ...this.params, ...params };
    return this;
  }

  // Director method
  setData<T = any>(data: T) {
    this.data = data;
    return this;
  }

  // Producing the product
  build(): AxiosRequestConfig {
    return {
      url: this.path.join("/"),
      headers: this.headers,
      data: this.data,
      params: this.params,
    };
  }
}
