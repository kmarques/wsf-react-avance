import { useState } from "react";
import List from "../list";

export default function Table({
  border,
  rowComponent: RowComponent,
  ...others
}) {
  const [editMode, setEditMode] = useState(null);

  if (!others.data || others.data.length === 0) {
    return <div>No data</div>;
  }

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
      itemComponent={
        RowComponent ??
        (({ item, actions, formComponent: FormComponent }) => (
          <>
            <tr>
              {Object.entries(item).map(([key, value]) => (
                <td key={key}>{value}</td>
              ))}
              {(actions.edit || actions.delete) && (
                <td style={{ display: "flex", gap: 4 }}>
                  {actions.edit && item.id !== editMode?.id && (
                    <button onClick={() => setEditMode(item)}>Edit</button>
                  )}
                  {actions.edit && item.id === editMode?.id && (
                    <button onClick={() => setEditMode(null)}>Cancel</button>
                  )}
                  {actions.delete && (
                    <button onClick={() => actions.delete(item)}>Delete</button>
                  )}
                </td>
              )}
            </tr>
            {actions.edit && editMode?.id === item.id && (
              <tr>
                <td colSpan={Object.keys(item).length + 1}>
                  <FormComponent
                    onSubmit={(values) => {
                      actions.edit(item, values).then(() => setEditMode(null));
                    }}
                    submitLabel="Edit"
                    defaultValues={item}
                  />
                </td>
              </tr>
            )}
          </>
        ))
      }
      {...others}
    />
  );
}
