// TP: Faire une gestion de liste en gardant l'aspect technico-générique
// Modifier ce composant pour que l'on puisse:
// - Ajouter des éléments à la liste
// - Supprimer des éléments de la liste
//// - Récupérer la liste
// - Modifier les éléments de la liste

// Exemple d'utilisation:
// - TodoList

export default function ListContainer({ data, ItemComponent }) {
  //const [items, setItems] = useState(data);
  return data.map((item) => <ItemComponent item={item} />);
}

// [{title: 1}, {title: 2}]
// <=>
// [
//     <ItemComponent item={{title: 1}}/>,
//     <ItemComponent item={{title: 2}}/>
// ]
