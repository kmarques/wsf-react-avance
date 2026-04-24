import { useState } from "react";
import Button from "./ui/button";

const DefaultItemComponent = ({
  item,
  renderItem,
  actions,
  formComponent: FormComponent,
  theme,
}) => {
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (values) => {
    return actions.edit(item, values).then(() => {
      setEditMode(false);
    });
  };

  return (
    <li style={{ display: "flex", gap: 4, alignItems: "center" }}>
      {!actions.edit || !editMode ? (
        <span>{renderItem(item, actions)}</span>
      ) : (
        <FormComponent
          onSubmit={handleEdit}
          submitLabel="Edit"
          defaultValues={item}
        />
      )}
      <span style={{ display: "flex", gap: 4 }}>
        {actions.edit && !editMode && (
          <Button onClick={() => setEditMode(true)}>Edit</Button>
        )}
        {actions.edit && editMode && (
          <Button onClick={() => setEditMode(false)}>Cancel</Button>
        )}
        {actions.delete && (
          <Button onClick={() => actions.delete(item)}>Delete</Button>
        )}
      </span>
    </li>
  );
};

export default function List({
  data,
  theme = {},
  actions = {},
  getRowId = (item) => item.id,
  renderItem = (val, actions) => val,
  itemComponent: Item = DefaultItemComponent,
  containerComponent: Container = "ul",
  formComponent: FormComponent,
}) {
  const [addMode, setAddMode] = useState(false);

  const handleCreate = (values) => {
    return actions.add(values).then(() => {
      setAddMode(false);
    });
  };

  return (
    <>
      {actions.add && !addMode && (
        <Button onClick={() => setAddMode(true)}>Add</Button>
      )}
      {actions.add && addMode && (
        <FormComponent onSubmit={handleCreate} submitLabel="Add" />
      )}
      <Container data={data}>
        {data.map((item) =>
          typeof Item === "string" ? (
            <Item key={getRowId(item)}>{renderItem(item, actions)}</Item>
          ) : (
            console.log("*****", actions, FormComponent, data) || (
              <Item
                key={getRowId(item)}
                item={item}
                renderItem={renderItem}
                actions={actions}
                formComponent={FormComponent}
              />
            )
          ),
        )}
      </Container>
    </>
  );
}
