import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TasklistContext";
import TaskItem from "../components/TaskList/TaskItem";
import TaskForm from "../components/TaskList/TaskForm";

export default function TaskList() {
  const { selectors } = useContext(TaskListContext);
  const tasks = selectors.getTasks();
  const isLoading = selectors.isLoading();
  console.log(isLoading, tasks);
  return (
    <div>
      <h1>TaskList</h1>
      {isLoading && <progress />}
      {!isLoading &&
        tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      {!isLoading && <TaskForm />}
    </div>
  );
}
