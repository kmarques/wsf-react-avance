import React, { useContext } from "react";
import { TaskListContext } from "../../contexts/TasklistContext";

export default function TaskForm() {
  const { actions } = useContext(TaskListContext);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = {
      title: formData.get("title"),
      done: false,
    };
    actions.addTask(task);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="title" name="title" />
      <input type="submit" value="Add Task" />
    </form>
  );
}
