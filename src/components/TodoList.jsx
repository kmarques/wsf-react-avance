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
  const [formValues, setFormValues] = useState({});
  const [title, setTitle] = useState("");

  function handleSubmitJS(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    event.currentTarget.reset();
    setTitle("");
    setTodos([values, ...todos]);
  }

  function clearList() {
    setTodos([]);
  }

  function handleChange(key, value) {
    formValues[key] = value;
    setFormValues({
      ...formValues,
      [key]: value,
    });
  }
  function handleSubmitReact(event) {
    event.preventDefault();
    setTodos([formValues, ...todos]);
    setFormValues({});
  }

  return (
    <>
      <Button onClick={clearList}>Clear List</Button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {!displayAdd && (
        <Button onClick={() => setDisplayAdd(true)}>Add Todo</Button>
      )}
      {displayAdd && (
        <>
          <span>Form JS (plus propre, plus accessible)</span>
          <form onSubmit={handleSubmitJS}>
            <label htmlFor="title">Titre</label>
            <input
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            {title === "Hello you" && <span>Good answer</span>}
            <input type="submit" value="Ajouter" />
          </form>
          <Button onClick={() => setDisplayAdd(false)}>Hide Add Form</Button>
        </>
      )}
      {displayAdd && (
        <>
          <span>Form React</span>
          <label htmlFor="title">Titre</label>
          <input
            onChange={(e) => handleChange("title", e.target.value)}
            value={formValues.title || ""}
            id="title"
          />
          <input
            value={formValues.toto || ""}
            onChange={(e) => handleChange("toto", e.target.value)}
          />
          <input
            value={formValues.tata || ""}
            onChange={(e) => handleChange("tata", e.target.value)}
          />
          <Button onClick={handleSubmitReact}>Soumettre</Button>
          <pre>{JSON.stringify(formValues)}</pre>
        </>
      )}
    </>
  );
}
