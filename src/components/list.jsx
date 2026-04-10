const DefaultItemComponent = ({ item, renderItem }) => (
  <li>{renderItem(item)}</li>
);

export default function List({
  data,
  getRowId = (item) => item.id,
  renderItem = (val) => val,
  itemComponent: Item = DefaultItemComponent,
  containerComponent: Container = "ul",
}) {
  return (
    <Container data={data}>
      {data.map((item) =>
        typeof Item === "string" ? (
          <Item key={getRowId(item)}>{renderItem(item)}</Item>
        ) : (
          <Item key={getRowId(item)} item={item} renderItem={renderItem} />
        ),
      )}
    </Container>
  );
}
