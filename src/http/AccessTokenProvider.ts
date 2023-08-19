export default class AccessTokenProvider {
  tokenType = "";

  constructor(tokenType: string) {
    this.tokenType = tokenType;
  }

  async acquireToken() {
    return Promise.resolve("");
  }
}
