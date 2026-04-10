import List from "../list";

export default function Table({ border, ...others }) {
  return (
    <List
      containerComponent={({ children, data }) => (
        <table style={{ border }}>
          <thead>
            <tr>
              {Object.keys(data[0]).map((head) => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      )}
      itemComponent={({ item }) => (
        <tr>
          {Object.entries(item).map(([key, value]) => (
            <td key={key}>{value}</td>
          ))}
        </tr>
      )}
      {...others}
    />
  );
}
