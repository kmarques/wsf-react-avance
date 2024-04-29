/* fetchTasks
addTask
updateTask
deleteTask */

export async function fetchTasks() {
  const resp = await fetch("http://localhost:3000/tasks");
  return resp.json();
}

export async function addTask(task) {
  const resp = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return resp.json();
}

export async function updateTask(task) {
  const resp = await fetch(`http://localhost:3000/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return resp.json();
}

export async function deleteTask(taskToDelete) {
  const resp = await fetch(`http://localhost:3000/tasks/${taskToDelete.id}`, {
    method: "DELETE",
  });
  if (!resp.ok) throw new Error("Error deleting task");
}
