import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";
import { ThemeContext } from "./contexts/ThemeContext";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("mount -> premiere apparition");

    return () => {
      console.log("unmount -> avant disparition");
    };
  }, []);

  useEffect(() => {
    console.log("after update -> count", count);

    return () => {
      console.log("before update -> count", count);
    };
  }, [count]);

  useEffect(() => {
    setInterval(() => toggleTheme(), 500);
  }, []);

  useEffect(() => {
    console.log("after update -> count2", count2);
    return () => {
      console.log("before update -> count2", count2);
    };
  }, [count2]);

  useEffect(() => {
    console.log("after updating counters", count, count2);
    return () => {
      console.log("before update counters", count, count2);
    };
  }, [count, count2]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
        <Button title="Coucou" onClick={toggleTheme} />
        {count < 10 && (
          <Button
            title="+1"
            onClick={() => setCount((count) => count + 1)}
            color="pink"
            backgroundColor="yellow"
            variant="round"
          />
        )}
        <UserList />
        <ProductProvider>
          <ProductList />
        </ProductProvider>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
