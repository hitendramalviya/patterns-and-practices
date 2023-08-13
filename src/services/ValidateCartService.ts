import Http from "../http/Http";
import BaseService from "./BaseService";

export default class ValidateCartService extends BaseService {
  constructor(http: Http) {
    super(http, "/validation");
  }

  validate(id) {
    return this.http.post("/cart", { cartId: id });
  }
}
