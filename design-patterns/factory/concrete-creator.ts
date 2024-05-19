import { ConcreteProduct } from "./concrete-product";
import { Creator, Product } from "./creator";

export class ConcreteCreator extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct();
  }
}
