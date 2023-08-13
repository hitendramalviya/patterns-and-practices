import AccessTokenProvider from "./AccessTokenProvider";
import Http from "./Http";

export default class HttpFactory {
  private static instances: Record<string, Http> = {};

  private static getKey(
    baseUrl: string,
    accessTokenProvider: AccessTokenProvider
  ) {
    return `${baseUrl}_${accessTokenProvider.tokenType}`;
  }

  static create(baseUrl: string, accessTokenProvider: AccessTokenProvider) {
    const key = this.getKey(baseUrl, accessTokenProvider);

    if (!this.instances[key]) {
      this.instances[key] = new Http(baseUrl, accessTokenProvider);
    }

    return this.instances[key];
  }
}
