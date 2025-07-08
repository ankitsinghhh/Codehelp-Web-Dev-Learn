//creating the app
const express = require("express")
const app = express();
//loading the env variables
require("dotenv").config()
const connectDB = require("./config/database");
const cloudinaryConnect = require("./config/cloudinary");
const fileUpload = require("express-fileupload")


app.use(express.json())
// helps us to uplod the files
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
); // this uploads the file on this server while the cloudinary first uploads it here and then uploads it to the media server


//connecting to db , only then we will acitvate server andt then we will connect to cloudinary
connectDB()
.then(
    ()=>{
        //activate server 
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }
)
.then(
    ()=>{
        //connecting to clouindary 
        cloudinaryConnect()
    }
)
.catch(
    (error)=>{
        console.log(error)
    }
)


//api routes mount krna hai ab 
const UploadRoutes = require("./routes/FileUpload")
app.use("/api/v1/upload",UploadRoutes)