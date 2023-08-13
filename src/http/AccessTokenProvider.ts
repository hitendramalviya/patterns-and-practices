export default class AccessTokenProvider {
  tokenType = "Bearer";

  constructor(tokenType: string) {
    this.tokenType = tokenType;
  }

  async acquireToken() {
    return Promise.resolve("");
  }
}
