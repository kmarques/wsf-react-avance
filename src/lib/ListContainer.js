// TP: Faire une gestion de liste en gardant l'aspect technico-générique
// Modifier ce composant pour que l'on puisse:
// - Ajouter des éléments à la liste
// - Supprimer des éléments de la liste
//// - Récupérer la liste
// - Modifier les éléments de la liste

import { useState } from "react";

// Exemple d'utilisation:
// - TodoList

export default function ListContainer({
  data,
  ItemComponent,
  AddComponent = () => false,
  addComponentLocation = "top",
}) {
  const [items, setItems] = useState(data);

  function deleteItem(item) {
    setItems(items.filter((i) => i !== item));
  }
  function editItem(item) {
    setItems(items.map((i) => (i === item ? { ...item } : i)));
  }
  function addItem(values) {
    setItems([...items, values]);
  }
  return (
    <>
      {addComponentLocation === "top" && <AddComponent onAdd={addItem} />}
      {items.map((item) => (
        <ItemComponent item={item} onDelete={deleteItem} onEdit={editItem} />
      ))}
      {addComponentLocation === "bottom" && <AddComponent onAdd={addItem} />}
    </>
  );
}

// [{title: 1}, {title: 2}]
// <=>
// [
//     <ItemComponent item={{title: 1}}/>,
//     <ItemComponent item={{title: 2}}/>
// ]
