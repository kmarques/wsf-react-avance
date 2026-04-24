import { useEffect, useState } from "react";
import List from "./components/list";
import TodoList from "./components/TodoList";
import TodoListWithGenericComponent from "./components/TodoListWithGenericComponent";
import TodoListWithTable from "./components/TodoListWithTable";
import Button from "./components/ui/button";
import Modal from "./components/ui/modal";
import Table from "./components/ui/table";
import productService from "./services/product.service";
import ordersService from "./services/orders.service";
import orderItemsService from "./services/order-items.service";

export default function TP3Visitor({ user, theme }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    productService.getAll().then(setProducts);
  }, []);

  const addToCart = (e, item) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const quantity = formData.get("quantity");
    setCart((prev) => [...prev, { productId: item.id, quantity }]);
  };

  const createOrder = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const lastname = formData.get("lastname");
    const firstname = formData.get("firstname");
    const order = await ordersService.create({
      lastname,
      firstname,
      status: "pending",
    });
    await Promise.all(
      cart.map((item) =>
        orderItemsService.create({
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
        }),
      ),
    );
    setCart([]);
    alert("Order submitted");
  };

  return (
    <>
      <h2>Cart</h2>
      <List
        data={cart}
        renderItem={(item) => {
          const product = products.find((p) => p.id === item.productId);
          return `${product?.name} x ${item.quantity}`;
        }}
      />
      {cart.length > 0 && (
        <>
          <Button
            onClick={() => setCart([])}
            title="Clear cart"
            color="destructive"
          />
          <form onSubmit={createOrder}>
            <input type="text" name="lastname" placeholder="Name" />
            <input type="text" name="firstname" placeholder="Firstname" />
            <button type="submit">Submit order</button>
          </form>
        </>
      )}
      <h2>Products</h2>
      <Table
        data={products}
        rowComponent={({ item }) => (
          <tr>
            {Object.entries(item).map(([key, value]) => (
              <td key={key}>{value}</td>
            ))}
            <td>
              <form onSubmit={(e) => addToCart(e, item)}>
                <input type="number" name="quantity" placeholder="quantity" />
                <button type="submit">Add to cart</button>
              </form>
            </td>
          </tr>
        )}
      />
    </>
  );
}
