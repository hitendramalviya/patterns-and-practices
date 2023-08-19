import Http from "../http/Http";
import RequestBuilder from "../http/RequestBuilder";
import BaseService from "./BaseService";

export default class ResourceService extends BaseService {
  constructor(http: Http) {
    super(http, "/resources");
  }

  getSchema(name: string) {
    return this.http.get(
      RequestBuilder.create(this.basePath)
        .setPath(`/${name}.schema.json`)
        .build()
    );
  }
}
