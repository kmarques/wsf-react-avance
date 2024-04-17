import * as serviceBackend from "./productBackend";
import * as serviceLocalStorage from "./productLocalStorage";

const toSync = [];
window.addEventListener("online", async () => {
  while (toSync.length) {
    const { action, params } = toSync.shift();
    await action(...params);
  }
});

export const getProducts = async () => {
  if (navigator.onLine) {
    const results = await serviceBackend.getProducts();
    await serviceLocalStorage.sync(results);
    return results;
  }
  return serviceLocalStorage.getProducts();
};

export const addProduct = async (product) => {
  if (navigator.onLine) {
    const newProduct = await serviceBackend.addProduct(product);
    return serviceLocalStorage.addProduct(newProduct);
  }
  toSync.push({
    action: serviceBackend.addProduct,
    params: [product],
  });
  return serviceLocalStorage.addProduct(product);
};

export const deleteProduct = async (productToDelete) => {
  if (navigator.onLine) {
    await serviceBackend.deleteProduct(productToDelete);
    return serviceLocalStorage.deleteProduct(productToDelete);
  }
  toSync.push({
    action: serviceBackend.deleteProduct,
    params: [productToDelete],
  });
  return serviceLocalStorage.deleteProduct(productToDelete);
};
