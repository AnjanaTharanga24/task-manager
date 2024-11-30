const dotenv = require("dotenv").config();
const express = require("express")
const connectDB = require("./config/connectDB")

const app = express()

app.get("/",(req,res)=>{
    res.send("welcome to home")
})

connectDB();
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})

// mongodb+srv://anjana:<db_password>@cluster0.p31yl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0