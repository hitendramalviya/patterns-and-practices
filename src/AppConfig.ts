export interface Endpoint {
  base: string;
  salesCRMForce?: string;
}

export interface AppConfig {
  endpoints: Endpoint;
}
