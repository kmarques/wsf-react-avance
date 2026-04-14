import { useEffect, useState } from "react";
import Button from "./ui/button";
import TodoForm from "./TodoForm";
import List from "./list";

const defaultValues = [
  { id: "1", title: "orange" },
  { id: "2", title: "pomme" },
  { id: "3", title: "raisin" },
];

export default function TodoListWithGenericComponent() {
  const [todos, setTodos] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("[MOUNTED] fetching todos...");
    fetch("http://localhost:3333/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    console.log("[UPDATED] filter", filter);
    if (todos === null) return;
    fetch(`http://localhost:3333/todos?title:startsWith=${filter}`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, [filter]);

  function clearList() {
    setTodos([]);
  }

  async function addTask(values) {
    fetch("http://localhost:3333/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => setTodos([...todos, data]));
  }

  function deleteTask(id) {
    fetch(`http://localhost:3333/todos/${id}`, {
      method: "DELETE",
    }).then(() => setTodos(todos.filter((t) => t.id !== id)));
  }

  async function editTask(id, values) {
    const updatedTodo = {
      ...todos.find((t) => t.id === id),
      ...values,
      id,
    };
    fetch(`http://localhost:3333/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then((data) => setTodos(todos.map((t) => (t.id === id ? data : t))));
  }

  return (
    <>
      <Button onClick={clearList}>Clear List</Button>
      {todos === null && <span>Loading todos...</span>}
      {todos !== null && (
        <>
          <input
            placeholder="Search todo"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
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
      )}
    </>
  );
}
