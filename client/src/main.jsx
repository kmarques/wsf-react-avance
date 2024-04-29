import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { TaskListProvider } from "./contexts/TasklistContext.jsx";
import TaskList from "./views/TaskList.jsx";
const theme = {
  button: {
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "magenta",
    color: "cyan",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme={theme}>
    <TaskListProvider>
      <TaskList />
    </TaskListProvider>
  </ThemeProvider>
);
