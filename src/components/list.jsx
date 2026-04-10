const DefaultItemComponent = ({ item, renderItem }) => (
  <li>{renderItem(item)}</li>
);

export default function List({
  data,
  renderItem = (val) => val,
  itemComponent: Item = DefaultItemComponent,
  containerComponent: Container = "ul",
}) {
  return (
    <Container data={data}>
      {data.map((item) =>
        typeof Item === "string" ? (
          <Item>{renderItem(item)}</Item>
        ) : (
          <Item item={item} renderItem={renderItem} />
        ),
      )}
    </Container>
  );
}
