interface Product {
  operation(): string;
}

export abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    // Call the factory method to create a Product object.
    const product = this.factoryMethod();
    // Now, use the product.
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

export class ProductCreatorA extends Creator {
  public factoryMethod(): Product {
    return new Product1();
  }
}

export class ProductCreatorB extends Creator {
  public factoryMethod(): Product {
    return new Product2();
  }
}

class Product1 implements Product {
  public operation(): string {
    return "{Result of the eProduct1}";
  }
}

class Product2 implements Product {
  public operation(): string {
    return "{Result of the Product2}";
  }
}
