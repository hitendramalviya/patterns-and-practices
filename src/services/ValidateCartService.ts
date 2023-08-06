import BaseService from "./BaseService";

export default class ValidateCartService extends BaseService {
  validate(id) {
    return this.http.post("/validation/cart", { cartId: id });
  }
}
