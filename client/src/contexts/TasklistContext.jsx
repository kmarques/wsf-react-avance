import { createContext, useEffect, useState } from "react";
import {
  fetchTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/tasklistBackend";

export const TaskListContext = createContext();

export function TaskListProvider({ children }) {
  const [tasks, setTasks] = useState(undefined);

  useEffect(() => {
    actions.fetchTasks().then(() => {
      const eventSource = new EventSource(
        "http://localhost:3000/tasks/subscribe"
      );

      eventSource.addEventListener("ping", (event) => {
        console.log("message", event);
      });

      eventSource.addEventListener("TASK_ADDED", (event) => {
        const task = JSON.parse(event.data);
        setTasks((tasks) =>
          !tasks.find((t) => t.id === task.id) ? [...tasks, task] : tasks
        );
      });

      eventSource.addEventListener("TASK_UPDATED", (event) => {
        const task = JSON.parse(event.data);
        setTasks((tasks) => tasks.map((t) => (t.id === task.id ? task : t)));
      });

      eventSource.addEventListener("TASK_DELETED", (event) => {
        const task = JSON.parse(event.data);
        setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
      });
    });
  }, []);

  const actions = {
    async fetchTasks() {
      const tasks = await fetchTasks();
      setTasks(tasks);
    },
    async addTask(task) {
      const newTask = await addTask(task);
      setTasks([...tasks, newTask]);
    },
    async updateTask(task) {
      const updatedTask = await updateTask(task);
      setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    },
    async deleteTask(taskToDelete) {
      await deleteTask(taskToDelete);
      setTasks(tasks.filter((t) => t.id !== taskToDelete.id));
    },
  };

  const selectors = {
    getTasks: (filters = {}) =>
      tasks?.filter((p) =>
        Object.keys(filters).every((f) => p[f] === filters[f])
      ) ?? [],
    isLoading: () => tasks === undefined,
  };

  return (
    <TaskListContext.Provider value={{ actions, selectors }}>
      {children}
    </TaskListContext.Provider>
  );
}
