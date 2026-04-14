import { useState } from "react";
import Button from "./ui/button";
import TodoForm from "./TodoForm";

const defaultValues = [
  { id: "1", title: "orange" },
  { id: "2", title: "pomme" },
  { id: "3", title: "raisin" },
];

export default function TodoList() {
  const [todos, setTodos] = useState(defaultValues);
  const [displayAdd, setDisplayAdd] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [title, setTitle] = useState("");
  const [editMode, setEditMode] = useState(null);

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

  async function editTask(values) {
    const id = editMode;
    const updatedTodo = {
      ...todos.find((t) => t.id === id),
      ...values,
      id,
    };
    setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    setEditMode(null);
  }

  return (
    <>
      <Button onClick={clearList}>Clear List</Button>
      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            style={{ display: "flex", gap: 4, alignItems: "center" }}
          >
            {editMode === item.id ? (
              <TodoForm
                onSubmit={editTask}
                submitButtonLabel="Editer"
                defaultValues={item}
              />
            ) : (
              <span>{item.title}</span>
            )}
            <span>
              {editMode === item.id ? (
                <Button onClick={() => setEditMode(null)}>Cancel</Button>
              ) : (
                <Button onClick={() => setEditMode(item.id)}>Update</Button>
              )}
              <Button onClick={() => deleteTask(item.id)}>Delete</Button>
            </span>
          </li>
        ))}
      </ul>
      {!displayAdd && (
        <Button onClick={() => setDisplayAdd(true)}>Add Todo</Button>
      )}
      {displayAdd && (
        <>
          <span>Form JS (plus propre, plus accessible)</span>
          <TodoForm onSubmit={addTask} submitButtonLabel="Ajouter" />
          <Button onClick={() => setDisplayAdd(false)}>Hide Add Form</Button>
        </>
      )}
    </>
  );
}
