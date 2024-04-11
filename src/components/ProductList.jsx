import { useContext, useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import Button from "./Button";
import { ProductContext } from "../contexts/ProductContext";

function ProductList() {
  const [productDisplayed, setProductDisplayed] = useState(undefined);
  const { selectors, actions } = useContext(ProductContext);
  const products = selectors.getProducts();
  const loading = selectors.isLoading();

  return (
    <>
      <h1>Product List</h1>
      <ul>
        {loading && <progress />}
        {!loading &&
          products.map((p) => (
            <li
              key={p.id}
              onMouseEnter={() => setProductDisplayed(p.id)}
              onMouseLeave={() => setProductDisplayed(undefined)}
            >
              {p.name} {p.price}€
              {productDisplayed === p.id && <div>{p.description}</div>}
              <Button onClick={() => actions.deleteProduct(p)}>
                Supprimer
              </Button>
            </li>
          ))}
        {!loading && products.length === 0 && <li>No products to display</li>}
      </ul>
      <ProductForm />
    </>
  );
}

export default ProductList;
