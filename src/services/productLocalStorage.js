const STORAGE_KEY = "products";

function getData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export const getProducts = async () => {
  return getData(STORAGE_KEY);
};

export const addProduct = async (product) => {
  const products = getData(STORAGE_KEY);
  const newProduct = { id: Date.now(), ...product };
  setData(STORAGE_KEY, [...products, newProduct]);
  return newProduct;
};

export const deleteProduct = async (productToDelete) => {
  const products = getData(STORAGE_KEY);
  const newProducts = products.filter((p) => p.id !== productToDelete.id);
  if (products.length === newProducts.length) {
    throw new Error("Error deleting product");
  }
  setData(STORAGE_KEY, newProducts);
};

export const sync = async (products) => {
  setData(STORAGE_KEY, products);
};
