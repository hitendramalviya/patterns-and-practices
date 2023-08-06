import BaseRequestBuilder from "../http/BaseRequestBuilder";
import Http from "../http/Http";
import BaseService from "./BaseService";

class CartRequestBuilder extends BaseRequestBuilder {
  path?: string;

  constructor(path?: string) {
    super();

    this.path = path;
  }

  setUrl() {
    this.config.setUrl(this.path ? `/cart${this.path}` : "/cart");
  }

  getConfig() {
    return this.config.build();
  }
}

class CartRequestProcess {
  builder: CartRequestBuilder;

  constructor(builder: CartRequestBuilder) {
    this.builder = builder;
  }

  construct() {
    this.builder.setUrl();
  }
}

export default class CartService extends BaseService {
  requestProcess: CartRequestProcess;

  validateRequestProcess: CartRequestProcess;

  constructor(http: Http) {
    super(http);

    this.requestProcess = new CartRequestProcess(new CartRequestBuilder());
    this.requestProcess.construct();
    this.validateRequestProcess = new CartRequestProcess(
      new CartRequestBuilder("/validate")
    );
    this.validateRequestProcess.construct();
  }

  getInprogressCart() {
    return this.http.get("/cart", { id: "something" });
  }

  addToCart(data) {
    return this.http.post("/cart", data);
  }

  removeItemFromCart(id) {
    return this.http.delete(`/cart/${id}`);
  }

  validate(id) {
    return this.http.post("/cart/validate", { cartId: id });
  }
}
