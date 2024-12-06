const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getAllTasks, getTaskById, deleteTaskById, updateTask } = require("../controllers/taskController");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTaskById).delete(deleteTaskById).put(updateTask)

// router.post("/",createTask);
// router.get("/",getAllTasks);
// router.get("/:id",);
// router.delete("/:id" , deleteTaskById)
// router.put("/:id",updateTask)

module.exports = router;
