import ListContainer from "./lib/ListContainer";

function TodoItem({ item, onDelete, onComplete }) {
  return (
    <div>
      {item.title} {item.completed && "done"}
      <button onComplete={onComplete} onClick={() => onDelete(item)}>
        X
      </button>
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
      editable={true}
      ItemComponent={({ editItem, ...props }) => (
        <TodoItem {...props} onComplete={editItem} />
      )}
      AddComponent={({ addItem }) => (
        <form onSubmit={handleSubmit(addItem)}>
          <input type="text" name="title" />
          <button type="submit">Add</button>
        </form>
      )}
    />
  );
}
