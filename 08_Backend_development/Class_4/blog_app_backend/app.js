const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require("./config/database")

app.use(express.json())

const router = require("./routes/blogRoutes")
app.use("/api/v1",router)



connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running on PORT ",process.env.PORT)
    })
})
.catch((err)=>{
    console.log(err)
})



app.use("/",(req,res)=>{
    res.send("this is my Homepage")
})