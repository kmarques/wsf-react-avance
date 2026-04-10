import { useState } from "react";
import Button from "./ui/button";

const defaultValues = [
  { id: "1", title: "orange" },
  { id: "2", title: "pomme" },
  { id: "3", title: "raisin" },
];

export default function TodoList() {
  const [todos, setTodos] = useState(defaultValues);
  const [displayAdd, setDisplayAdd] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    setTodos([values, ...todos]);
  }

  function clearList() {
    setTodos([]);
  }

  return (
    <>
      <Button onClick={clearList}>Clear List</Button>
      <ul>
        {todos.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      {!displayAdd && (
        <Button onClick={() => setDisplayAdd(true)}>Add Todo</Button>
      )}
      {displayAdd && (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Titre</label>
            <input name="title" id="title" />
            <input type="submit" value="Ajouter" />
          </form>
          <Button onClick={() => setDisplayAdd(false)}>Hide Add Form</Button>
        </>
      )}
    </>
  );
}
