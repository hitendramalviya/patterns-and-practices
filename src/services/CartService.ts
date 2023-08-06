import Http from "../http/Http";
import RequestBuilder from "../http/RequestBuilder";
import BaseService from "./BaseService";

interface CartItem {
  //
}

export default class CartService extends BaseService {
  constructor(http: Http) {
    super(http, "/cart");
  }

  getInprogressCart() {
    return this.http.get(
      RequestBuilder.create(this.basePath)
        .setHeaders({ "X-Custom-Header": "test" })
        .build()
    );
  }

  addToCart(data: CartItem) {
    return this.http.post(
      RequestBuilder.create(this.basePath).setData(data).build()
    );
  }

  removeItemFromCart(id: string) {
    return this.http.delete(
      RequestBuilder.create(this.basePath).setPath(id).build()
    );
  }

  validate(id: string) {
    return this.http.post(
      RequestBuilder.create(this.basePath)
        .setPath("validate")
        .setData({ cartId: id })
        .build()
    );
  }
}
