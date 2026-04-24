import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/ui/button";
import List from "./components/list";
import Table from "./components/ui/table";
import Modal from "./components/ui/modal";
import TodoList from "./components/TodoList";
import TodoListWithGenericComponent from "./components/TodoListWithGenericComponent";
import TodoListWithTable from "./components/TodoListWithTable";
import Clock from "./components/Clock";
import Demo from "./Demo";
import TP3 from "./TP3";
import userService from "./services/user.service";
import theme from "./theme";
import ThemeProvider from "./providers/ThemeProvider";
import ThemeMode from "./components/ThemeMode";

function App() {
  const [displayClock, setDisplayClock] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    // Simulate login logic
    userService
      .login({ email, password })
      .then((user) => {
        setIsConnected(user);
        alert("Login successful");
      })
      .catch(() => {
        alert("Login failed");
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        {displayClock && <Clock />}
        <Button
          onClick={() => setDisplayClock((prev) => !prev)}
          title={displayClock ? "Hide Clock" : "Show Clock"}
        />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ThemeMode />
      {/*<Demo />*/}
      {!isConnected && (
        <form onSubmit={handleLogin}>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      )}
      {isConnected && (
        <div>
          <p>Welcome, {isConnected.email}!</p>
          <Button
            onClick={() => setIsConnected(false)}
            title="Logout"
            color="destructive"
          />
        </div>
      )}
      <TP3 user={isConnected} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
