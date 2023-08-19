import Http from "../http/Http";
import ResourceService from "./ResourceService";

export default class Client {
  resourceService: ResourceService;

  constructor(http: Http) {
    this.resourceService = new ResourceService(http);
  }
}
