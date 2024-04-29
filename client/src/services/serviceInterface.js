class ServiceInterface {
  constructor() {
    if (this.constructor === ServiceInterface) {
      throw new Error("Cannot instantiate an interface");
    }
  }

  async create() {
    throw new Error("Method not implemented");
  }

  async read() {
    throw new Error("Method not implemented");
  }

  async update() {
    throw new Error("Method not implemented");
  }

  async delete() {
    throw new Error("Method not implemented");
  }
}

class ServiceBackend extends ServiceInterface {
  async create(product) {
    throw new Error("Method not implemented");
  }

  async read() {
    throw new Error("Method not implemented");
  }

  async update(product) {
    throw new Error("Method not implemented");
  }

  async delete(product) {
    throw new Error("Method not implemented");
  }
}

const service = new ServiceBackend();

class AbstractRestApi {
  constructor(endpoint) {
    if (this.constructor === AbstractRestApi) {
      throw new Error("Cannot instantiate an abstract class");
    }
    this.endpoint = endpoint;
  }

  async fetch() {
    const resp = await fetch("http://localhost:3000" + this.endpoint);
    return resp.json();
  }

  async post(resource) {
    const resp = await fetch("http://localhost:3000" + this.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resource),
    });
    return resp.json();
  }

  async put() {
    throw new Error("Method not implemented");
  }

  async delete(resource) {
    const resp = await fetch(
      `http://localhost:3000${this.endpoint}/${resource.id}`,
      {
        method: "DELETE",
      }
    );
    if (!resp.ok) throw new Error("Error deleting product");
  }
}

class ProductBackend extends AbstractRestApi {
  constructor() {
    super("/products");
  }
}

class CartBackend extends AbstractRestApi {
  constructor() {
    super("/cart");
  }
}

class UserBackend extends AbstractRestApi {
  constructor() {
    super("/users");
  }
}

console.log(service instanceof ServiceInterface);
console.log(service instanceof ServiceBackend);
