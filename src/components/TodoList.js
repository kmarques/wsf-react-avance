import ListContainer from "../lib/ListContainer";

function TodoItem({ item, onDelete, onEdit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    for (let [key, value] of data) {
      item[key] = value;
    }
    if (!data.get("completed")) {
      item.completed = false;
    }
    onEdit(item);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="completed" type="checkbox" />
        <input type="text" name="title" />
        <input type="submit" value="edit" />
      </form>
      {item.title} {item.completed && "done"}
      <button onClick={() => onDelete(item)}>X</button>
    </div>
  );
}

export default function TodoList() {
  const items = [
    { title: "1", completed: true },
    { title: "2", completed: false },
  ];
  function handleSubmit(addItem) {
    return (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      addItem({
        title: formData.get("title"),
        completed: false,
      });
    };
  }
  return (
    <ListContainer
      data={items}
      ItemComponent={TodoItem}
      AddComponent={({ onAdd }) => (
        <form onSubmit={handleSubmit(onAdd)}>
          <input type="text" name="title" />
          <button type="submit">Add</button>
        </form>
      )}
      addComponentLocation={"bottom"}
    />
  );
}
