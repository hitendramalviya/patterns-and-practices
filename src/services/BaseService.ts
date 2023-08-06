import Http from "../http/Http";

export default class BaseService {
  basePath: string;

  http: Http;

  constructor(http: Http, basePath: string) {
    this.http = http;
    this.basePath = basePath;
  }
}
