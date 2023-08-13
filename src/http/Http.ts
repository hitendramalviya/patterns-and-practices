import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import AccessTokenProvider from "./AccessTokenProvider";

/**
 * DO NOT CREATE DIRECT INSTANCE OF THIS CLASS, INSTEAD USE HttpFactory
 */
export default class Http {
  baseUrl: string;

  instance: AxiosInstance;

  accessTokenProvider: AccessTokenProvider;

  constructor(baseUrl: string, accessTokenProvider: AccessTokenProvider) {
    this.baseUrl = baseUrl;

    this.accessTokenProvider = accessTokenProvider;

    this.instance = axios.create({
      baseURL: this.baseUrl,
      timeout: 1000,
      // headers: { "X-Custom-Header": "foobar" },
      headers: { "Content-Type": "application/json" },
    });

    this.requestInterceptor = this.requestInterceptor.bind(this);
    this.instance.interceptors.request.use(this.requestInterceptor);
  }

  async requestInterceptor(
    config: InternalAxiosRequestConfig<any>
  ): Promise<InternalAxiosRequestConfig<any>> {
    if (this.accessTokenProvider.tokenType) {
      const accessToken = await this.accessTokenProvider.acquireToken();

      config.headers.setAuthorization(
        `${this.accessTokenProvider.tokenType} ${accessToken}`
      );
    }

    return config;
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
