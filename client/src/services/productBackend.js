export const getProducts = async () => {
  const resp = await fetch("http://localhost:3000/products");
  return resp.json();
};

export const addProduct = async (product) => {
  const resp = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return resp.json();
};

export const deleteProduct = async (productToDelete) => {
  const resp = await fetch(
    `http://localhost:3000/products/${productToDelete.id}`,
    {
      method: "DELETE",
    }
  );
  if (!resp.ok) throw new Error("Error deleting product");
};
