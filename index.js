const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors()); 
let tasks = [];

// Endpoint to get all tasks
app.get("/api/tasks", (req, res) => {
    console.log("get",tasks);
  res.json(tasks);
});

// Endpoint to add a new task
app.post("/api/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false
  };
  console.log(newTask);
  tasks.push(newTask);
  res.json(newTask);
});

// Endpoint to update a task
app.put("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title } = req.body;
  const taskToUpdate = tasks.find(task => task.id === taskId);
  console.log(taskToUpdate,"update");
  if (taskToUpdate) {
    taskToUpdate.title = title;
    console.log(taskToUpdate,"update1");
    res.json(taskToUpdate);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

// Endpoint to delete a task
app.delete("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.json({ message: "Task deleted successfully" });
});

// Endpoint to toggle task status
app.put("/api/tasks/:id/toggle", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskToUpdate = tasks.find(task => task.id === taskId);
    console.log(taskToUpdate,"toggle");
  if (taskToUpdate) {
    taskToUpdate.completed = !taskToUpdate.completed;
    res.json(taskToUpdate);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
