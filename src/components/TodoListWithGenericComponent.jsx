import { useState } from "react";
import Button from "./ui/button";
import TodoForm from "./TodoForm";
import List from "./list";

const defaultValues = [
  { id: "1", title: "orange" },
  { id: "2", title: "pomme" },
  { id: "3", title: "raisin" },
];

export default function TodoListWithGenericComponent() {
  const [todos, setTodos] = useState(defaultValues);

  function clearList() {
    setTodos([]);
  }

  async function addTask(values) {
    const newTodo = {
      id: crypto.randomUUID(),
      ...values,
    };
    setTodos([...todos, newTodo]);
  }

  function deleteTask(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  async function editTask(id, values) {
    const updatedTodo = {
      ...todos.find((t) => t.id === id),
      ...values,
      id,
    };
    setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
  }

  return (
    <>
      <Button onClick={clearList}>Clear List</Button>
      <List
        data={todos}
        actions={{
          add: addTask,
          delete: (item) => deleteTask(item.id),
          edit: (item, values) => editTask(item.id, values),
        }}
        renderItem={(item) => item.title}
        formComponent={TodoForm}
      />
    </>
  );
}
