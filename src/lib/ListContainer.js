export default function ListContainer({ data, ItemComponent }) {
  return data.map((item) => <ItemComponent item={item} />);
}

// [{title: 1}, {title: 2}]
// <=>
// [
//     <ItemComponent item={{title: 1}}/>,
//     <ItemComponent item={{title: 2}}/>
// ]
