const express = require('express')
const app = express()
require('dotenv').config()
const cookieParser = require('cookie-parser')

const connectDB = require('./config/database')

app.use(express.json())
app.use(cookieParser())

console.log("connecting to db")
//connecting to DB 
connectDB()
.then(
    ()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }
)
.catch(
    (error)=>{
        console.log("Error connecting to DB",error)
    }
)