
// const express = require('express'); // require import krta hai 
// const app = express();

// app.listen(3000, () =>{
//     console.log('Server 1234 is running on port 3000');  // server ke liye 3000 port me run karega
// } )

// // nodemon --> it is used to restart server every time a change is made in a file 
// // so that we dont have to stop and run the js file again and again
// //automatically server ko restart  krta h h


// now doing after creating all the files -> config , controllers , models , routes 

const express = require('express');
const app = express();

//load config from env files 
require('dotenv').config();

const PORT = process.env.PORT || 4000; // agr env se nhi aaya toh 4000 port use krenge


//middleware to parse json request body
app.use(express.json()) //parser add kr dia

// import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1",todoRoutes)


//start server
app.listen(PORT, ()=>{
    console.log(`server started successfully at ${PORT}`);
})

//connect tot the database
const dbConnect  = require("./config/database")
dbConnect()


//default route
app.get("/", (req,res)=>{
    res.send("<h1>Welcome to HomePage Guys</h1>")
})






