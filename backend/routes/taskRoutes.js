const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getAllTasks } = require("../controllers/taskController");
const router = express.Router();

//create a task
router.post("/api/tasks",createTask);

//get all tasks
router.get("/api/tasks",getAllTasks);

module.exports = router;
