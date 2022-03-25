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
  const [items, setItems] = useState([
    { title: "1", completed: true },
    { title: "2", completed: false },
  ]);
  function deleteItem(item) {}
  function editItem(item) {}
  function addItem(values) {
    //values => {title: "", completed: true}
  }
  return (
    <ListContainer
      data={items}
      editable={true}
      ItemComponent={(props) => (
        <TodoItem {...props} onDelete={deleteItem} onComplete={editItem} />
      )}
    />
  );
}
