import React, { useContext } from "react";
import { TaskListContext } from "../../contexts/TasklistContext";

export default function TaskItem({ task }) {
  const { actions } = useContext(TaskListContext);

  function handleDelete() {
    actions.deleteTask(task);
  }

  return (
    <div style={{ textDecoration: task.done ? "line-through" : "none" }}>
      #{task.id} - {task.title} <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
