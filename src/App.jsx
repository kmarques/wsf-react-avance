import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/ui/button";
import List from "./components/list";
import Table from "./components/ui/table";
import Modal from "./components/ui/modal";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Button onClick={() => console.log("test")} title="console" />
        <Button
          color="primary"
          style={{
            borderRadius: 0,
          }}
          onClick={() => setCount((prev) => prev + 1)}
          title="setCount"
        />
        <Button
          className="destructive"
          style={{
            borderRadius: 0,
          }}
          onClick={() => confirm("test")}
        >
          confirm
        </Button>
        <Button
          variant="outline"
          color="secondary"
          onClick={() => prompt("test")}
          title="prompt"
        />
        <Button
          className="destructive-outline"
          onClick={() => prompt("test")}
          title="prompt"
        />
        <Button
          onClick={() => alert("test")}
          component="img"
          src="https://picsum.photos/50"
        ></Button>
        <Button
          onClick={() => alert("test")}
          component="a"
          href="https://picsum.photos/50"
          target="_blank"
        >
          Go to image
        </Button>
      </div>
      <List
        data={[
          { id: "1", title: "orange" },
          { id: "2", title: "pomme" },
          { id: "3", title: "raisin" },
        ]}
        renderItem={(item) => item.title}
      />
      <List
        data={[
          { id: "1", title: "orange" },
          { id: "2", title: "pomme" },
          { id: "3", title: "raisin" },
        ]}
        renderItem={(item) => item.title}
        itemComponent="p"
        containerComponent="span"
      />
      <List
        data={[
          { id: "1", name: "pierre" },
          { id: "2", name: "papier" },
          { id: "3", name: "ciseaux" },
        ]}
        renderItem={(item) => item.name}
        itemComponent={({ item, renderItem }) => (
          <div style={{ border: "1px solid white", padding: 10 }}>
            {renderItem(item)}
          </div>
        )}
        containerComponent={({ children }) => (
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
          >
            {children}
          </div>
        )}
      />
      <List
        data={[
          { id: "1", name: "pierre", dueDate: new Date().toDateString() },
          { id: "2", name: "papier", dueDate: new Date().toDateString() },
          { id: "3", name: "ciseaux", dueDate: new Date().toDateString() },
        ]}
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
      <Table
        data={[
          {
            id: "1",
            sport: "football",
            country: "allemagne",
            firstname: "karl",
            lastname: "Heinz Rummenigge",
          },
          {
            id: "2",
            sport: "football",
            country: "italie",
            firstname: "roberto",
            lastname: "Baggio",
          },
          {
            id: "3",
            sport: "tennis",
            country: "espagne",
            firstname: "rafael",
            lastname: "Nadal",
          },
        ]}
      />
      <Modal title="Player form">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "start",
          }}
          action=""
        >
          <label htmlFor="sport">sport</label>
          <input id="sport" type="text" name="sport" />
          <label htmlFor="country">country</label>
          <input id="country" type="text" name="country" />
          <label htmlFor="firstname">firstname</label>
          <input id="firstname" type="text" name="firstname" />
          <label htmlFor="lastname">lastname</label>
          <input id="lastname" type="text" name="lastname" />

          <input id="Envoyer" type="submit" value="Envoyer" />
        </form>
      </Modal>
      <TodoList />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
