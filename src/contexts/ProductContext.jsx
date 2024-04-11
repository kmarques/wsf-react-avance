import { createContext, useEffect, useState } from "react";
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
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) =>
          setState({
            products: data,
            isLoading: false,
          })
        );
    }, 2000);
  }, []);

  const actions = {
    async addProduct(product) {
      const resp = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const newProduct = await resp.json();
      setState((state) => ({
        ...state,
        products: [...state.products, newProduct],
      }));
    },
    async deleteProduct(productToDelete) {
      const resp = await fetch(
        `http://localhost:3000/products/${productToDelete.id}`,
        {
          method: "DELETE",
        }
      );
      if (resp.ok) {
        setState((state) => ({
          ...state,
          products: state.products.filter((p) => p.id !== productToDelete.id),
        }));
      }
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
