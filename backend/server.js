const dotenv = require("dotenv").config();
const express = require("express")
const connectDB = require("./config/connectDB")
const Task = require("./model/taskModel")
const Customer = require("./model/customerModel")

const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));

//routes
app.get("/",(req,res)=>{
    res.send("welcome to home")
})

//create a task
app.post("/api/tasks", async (req,res)=>{
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({msg:error.message});
  }
})

// app.post("/api/customer", async (req,res)=>{
//     try {
//         const customer = await Customer.create(req.body)
//         res.status(200).json(customer)
//     } catch (error) {
//         res.status(500).json({msg:error})
//     }
// })

app.get("/api/tasks",async (req,res)=>{
    try {
        const task = await Task.find()
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error});
    }
})
connectDB();
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})

// mongodb+srv://anjana:<db_password>@cluster0.p31yl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0