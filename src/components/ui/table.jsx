import List from "../list";

export default function Table({ data }) {
  return (
    <List
      data={data}
      containerComponent={({ children, data }) => (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((head) => (
                <th>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      )}
      itemComponent={({ item }) => (
        <tr>
          {Object.values(item).map((col) => (
            <td>{col}</td>
          ))}
        </tr>
      )}
    />
  );
}
