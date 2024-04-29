const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const tasks = [
  { id: 1, title: "Task 1", done: false },
  { id: 2, title: "Task 2", done: true },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = req.body;
  newTask.id = Date.now();
  tasks.push(newTask);
  res.status(201).json(newTask);
  subscribers.forEach((s) => {
    s.write("event: TASK_ADDED\n");
    s.write("data: " + JSON.stringify(newTask) + "\n\n");
  });
});

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedTask = req.body;
  const task = tasks.find((t) => t.id === id);
  if (!task) return res.sendStatus(404);
  Object.assign(task, updatedTask);
  res.json(task);
  subscribers.forEach((s) => {
    s.write("event: TASK_UPDATED\n");
    s.write("data: " + JSON.stringify(task) + "\n\n");
  });
});

app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return res.sendStatus(404);
  const task = tasks[index];
  tasks.splice(index, 1);
  res.sendStatus(204);
  subscribers.forEach((s) => {
    s.write("event: TASK_DELETED\n");
    s.write("data: " + JSON.stringify(task) + "\n\n");
  });
});

const subscribers = [];
app.get("/tasks/subscribe", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  subscribers.push(res);

  setInterval(() => {
    res.write("event: ping\n");
    res.write("data: ping\n\n");
  }, 2000);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
