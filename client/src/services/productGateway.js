import * as serviceBackend from "./productBackend";
import * as serviceLocalStorage from "./productLocalStorage";

export default function (a, b) {
  const toSync = [];
  window.addEventListener("online", async () => {
    while (toSync.length) {
      const { action, params } = toSync.shift();
      await action(...params);
    }
  });
  return {
    fetch: async () => {
      if (navigator.onLine) {
        const results = await serviceBackend.getProducts();
        await serviceLocalStorage.sync(results);
        return results;
      }
      return serviceLocalStorage.getProducts();
    },
    create: async (product) => {
      if (navigator.onLine) {
        const newProduct = await serviceBackend.addProduct(product);
        return serviceLocalStorage.addProduct(newProduct);
      }
      toSync.push({
        action: serviceBackend.addProduct,
        params: [product],
      });
      return serviceLocalStorage.addProduct(product);
    },
    delete: async (productToDelete) => {
      if (navigator.onLine) {
        await serviceBackend.deleteProduct(productToDelete);
        return serviceLocalStorage.deleteProduct(productToDelete);
      }
      toSync.push({
        action: serviceBackend.deleteProduct,
        params: [productToDelete],
      });
      return serviceLocalStorage.deleteProduct(productToDelete);
    },
  };
}
