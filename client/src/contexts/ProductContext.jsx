import { createContext, useEffect, useState } from "react";
import productGateway from "../services/productGateway";
// import productManager from "../services/productManagerBackend";
// import productManager from "../services/productManagerLocalStorage";
// import productManager from "../services/productManagerGateway";
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, setState] = useState({
    products: undefined,
    isLoading: true,
  });

  useEffect(() => {
    setTimeout(async () => {
      productGateway.fetch().then((data) =>
        setState({
          products: data,
          isLoading: false,
        })
      );
    }, 7000);
  }, []);

  const actions = {
    async addProduct(product) {
      const newProduct = await productGateway.create(product);
      setState((state) => ({
        ...state,
        products: [...state.products, newProduct],
      }));
    },
    async deleteProduct(productToDelete) {
      await productGateway.delete(productToDelete);
      setState((state) => ({
        ...state,
        products: state.products.filter((p) => p.id !== productToDelete.id),
      }));
    },
  };

  const selectors = {
    getProducts: (filters = {}) =>
      state.products?.filter((p) =>
        Object.keys(filters).every((f) => p[f] === filters[f])
      ) ?? [],
    isLoading: () => state.isLoading,
  };

  return (
    <ProductContext.Provider value={{ actions, selectors }}>
      {children}
    </ProductContext.Provider>
  );
}
