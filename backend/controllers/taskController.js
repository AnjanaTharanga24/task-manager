const Task = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
   
    if(!task){
      return res.status(404).json(`no task with id ${id}`)
    }
    res.status(200).send("Task deleted")
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
 
};

const deleteTaskById = async(req,res) =>{
   try {
    const {id} = req.params;
    const task = await Task.findByIdAndDelete(id);
    res.status(200).json(task);
    if(!task){
      res.status(404).json({msg:error.message})
    }
   } catch (error) {
     res.status(500).json({msg:error.message})
   }
}

const updateTask = async (req,res) => {
  try {
    const {id} = req.params;
    const task = await Task.findByIdAndUpdate(
      {_id:id},req.body,{new:true,runValidators:true}
    );
    if(!task){
      res.status(404).send(`Task not found with id : ${id}`)
    }
    res.status(200).send("Task updated")
  } catch (error) {
    res.status(500).send({msg:error.message})
  }
}

module.exports = { createTask, getAllTasks, getTaskById, deleteTaskById,updateTask };
