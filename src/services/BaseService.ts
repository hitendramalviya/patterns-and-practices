import Http from "../http/Http";

export default class BaseService {
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }
}
