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
import userService from "./services/user.service";

export default function TP3Admin({ user, theme }) {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Promise.all([
      productService.getAll(),
      ordersService.getAll(),
      userService.getAll(),
    ]).then(([products, orders, users]) => {
      setProducts(products);
      setOrders(orders);
      setUsers(users);
    });
  }, []);

  return (
    <>
      <h2>Products</h2>
      <Table
        data={products}
        actions={{
          add: productService.create,
          edit: productService.update,
          delete: productService.delete,
        }}
      />
      <h2>Users</h2>
      <Table
        data={users}
        actions={{
          add: userService.create,
          edit: userService.update,
          delete: userService.delete,
        }}
      />
      <h2>Orders</h2>
      <Table
        data={orders}
        actions={{
          add: ordersService.create,
          edit: ordersService.update,
          delete: ordersService.delete,
        }}
      />
    </>
  );
}
