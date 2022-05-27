import ListContainer from "./lib/ListContainer";

function TodoItem({ item, onDelete, onEdit }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          item.completed = !item.completed;
          onEdit(item);
        }}
      />
      <input
        type="text"
        value={item.title}
        onChange={(e) => {
          item.title = e.target.value;
          onEdit(item);
        }}
      />
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
