import { Product } from "./creator";

export class ConcreteProduct implements Product {
  public operation(): string {
    return "{Result of the ConcreteProduct}";
  }
}
