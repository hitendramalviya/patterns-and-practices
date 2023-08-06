import BaseRequestBuilder from "../http/BaseRequestBuilder";
import RequestBuilder from "../http/RequestBuilder";
import BaseService from "./BaseService";

interface CartItem {
  //
}

// Builder
class CartRequestBuilder extends BaseRequestBuilder {
  path?: string;

  constructor(path?: string) {
    super();

    this.path = path;
  }

  setUrl() {
    this.config.setUrl(this.path ? `/cart${this.path}` : "/cart");
  }

  setHeaders(headers?: Record<string, string | number>) {
    this.config.setHeaders({
      "Content-Type": "application/json",
      ...(headers || {}),
    });
  }

  setParams(params?: any) {
    this.config.setParams(params || {});
  }

  setData(data?: CartItem) {
    this.config.setData(data);
  }

  build() {
    return this.config.get();
  }
}

// Director
class CartRequestProcess {
  builder: CartRequestBuilder;

  constructor(builder: CartRequestBuilder) {
    this.builder = builder;
  }

  construct(
    headers?: Record<string, string | number>,
    params?: any,
    data?: CartItem
  ) {
    this.builder.setUrl();
    this.builder.setHeaders(headers);
    this.builder.setParams(params);
    this.builder.setData(data);
  }
}

export default class CartService extends BaseService {
  basePath = "/cart";

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
