
const express = require('express')
const app = express()
require("dotenv").config()
const cookieParser = require("cookie-parser")
const connectDB = require('./config/database')

app.use(express.json())
app.use(cookieParser())

const userRoutes = require("./routes/userRoutes")
const {auth , isStudent, isAdmin} = require("./middlewares/auth")

// app.use("/api/v1",userRoutes)
app.use("/api/v1",userRoutes)


connectDB()
.then(()=>{
    app.listen(process.env.PORT, () =>{
        console.log("Sever is running on port ",process.env.PORT)
    })
})
.catch((err)=>{
    console.error("Error connecting to database ",err)
})



