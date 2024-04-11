import { useContext, useState } from "react";
import Button from "./Button";
import { ProductContext } from "../contexts/ProductContext";

const categories = {
  kitchen: ["food", "tools"],
  bedroom: ["furnitures", "clothes"],
};

function ProductForm() {
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [subcategoryValue, setSubcategoryValue] = useState("");
  const { actions } = useContext(ProductContext);

  async function handleSubmit(e) {
    e.preventDefault();

    actions.addProduct({
      name: nameValue,
      description: descriptionValue,
      price: priceValue,
      category: categoryValue,
      subcategory: subcategoryValue,
    });
  }

  return (
    <div>
      Add product
      <form onSubmit={handleSubmit}>
        <label>
          Name{" "}
          <input
            onChange={(e) => setNameValue(e.target.value)}
            value={nameValue}
          />
        </label>
        <label>
          Description{" "}
          <textarea
            onChange={(e) => setDescriptionValue(e.target.value)}
            value={descriptionValue}
          />
        </label>
        <label>
          Price{" "}
          <input
            onChange={(e) => setPriceValue(e.target.value)}
            value={priceValue}
          />
        </label>
        <label>
          Category{" "}
          <select
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          >
            <option value="">No category</option>
            {Object.keys(categories).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label>
          Sub Category{" "}
          <select
            value={subcategoryValue}
            onChange={(e) => setSubcategoryValue(e.target.value)}
          >
            <option value="">No sub category</option>
            {categories[categoryValue]?.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <Button
          component="input"
          title="Add Product"
          type="submit"
          value="Add product"
        />
        <input type="submit" value="Add product" />
      </form>
    </div>
  );
}

export default ProductForm;
