// TP: Faire une gestion de liste en gardant l'aspect technico-générique
// Modifier ce composant pour que l'on puisse:
// - Ajouter des éléments à la liste
// - Supprimer des éléments de la liste
//// - Récupérer la liste
// - Modifier les éléments de la liste

import { useReducer } from "react";

// Exemple d'utilisation:
// - TodoList
/**
 * action => {
 *  type: "ADD_ITEM",
 *  payload: {
 *     title: "titre"
 *  }
 * }
 */
function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return state.filter((item) => item !== action.payload);
    case "EDIT_ITEM":
      return state.map((item) =>
        item === action.payload ? action.payload : item
      );
    default:
      return state;
  }
}

export default function ListContainer({
  data,
  ItemComponent,
  AddComponent = () => false,
  addComponentLocation = "top",
}) {
  const [items, dispatch] = useReducer(reducer, data);

  function deleteItem(item) {
    dispatch({ type: "DELETE_ITEM", payload: item });
  }
  function editItem(item) {
    dispatch({ type: "EDIT_ITEM", payload: item });
  }
  function addItem(values) {
    dispatch({ type: "ADD_ITEM", payload: values });
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
