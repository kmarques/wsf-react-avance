import { useEffect, useState } from "react";
import Button from "./Button";

export default function UserList() {
  const [users, setUsers] = useState(undefined);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setUsers(undefined);
    setTimeout(() => {
      const params = new URLSearchParams(filters);
      fetch("http://localhost:3000/users?" + params.toString())
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, 2000);
  }, [filters]);

  // Filtres côté Front
  //const filteredUsers = users?.filter(
  //  (user) => !filters.apiKey || user.apiKey.startsWith(filters.apiKey)
  //);

  // Filtres côté back
  const filteredUsers = users;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (formData.get("apiKey") !== "") {
      setFilters({
        apiKey: formData.get("apiKey"),
      });
    } else {
      setFilters({});
    }
  }

  return (
    <div>
      <h1>Users list</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="apiKey" name="apiKey" />
        <Button type="submit" value="Find" component="input" />
      </form>
      {JSON.stringify(filters)}
      <ul>
        {filteredUsers === undefined && <progress />}
        {filteredUsers &&
          filteredUsers.map((user) => (
            <li
              key={user.id}
              style={{
                textDecoration:
                  new Date(user.subscriptionExpirationDate) < new Date()
                    ? "line-through"
                    : "none",
              }}
            >
              {user.id} {user.fullname} {user.subscriptionExpirationDate}{" "}
              {user.apiKey}
            </li>
          ))}
        {filteredUsers && filteredUsers.length === 0 && <li>No users</li>}
      </ul>
    </div>
  );
}
