import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/ui/button";

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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
