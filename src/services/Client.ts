import Http from "../http/Http";
import CartService from "./CartService";
import ValidateCartService from "./ValidateCartService";

export default class Client {
  cartService: CartService;

  validateCartService: ValidateCartService;

  constructor(http: Http) {
    this.cartService = new CartService(http);
    this.validateCartService = new ValidateCartService(http);
  }
}
