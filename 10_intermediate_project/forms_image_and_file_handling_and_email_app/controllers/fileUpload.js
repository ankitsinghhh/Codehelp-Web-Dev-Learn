const File = require("../models/File")
const cloudinary = require('cloudinary').v2

const localFileUpload = (req,res) =>{
    try {
        //fetch file from the request
        const file = req.files.file
        console.log("the file is ",file)

        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now()+`.${file.name.split('.')[1]}`;
        console.log("path is ---------> ",path)

        //add path to the move function
        file.mv(path,(err)=>{
            console.log("error in moving file",err)
        })

        //creating successfull response 
        res.status(200).json({
            success:true,
            message:"local file uploaded successfully"
        })

        // __dirname means the current directory , in this case you can inside the contollers , we are , so this is equal to controllers folder 
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
          error: error.message,
          success: false,
          message: "Error in file upload",
        });
    }
}

function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type)
}

async function  uploadFileToCloudinary(file,folder,quality){
    const options = {
        folder
    }
    if(quality){
        options.quality = quality;
    }
    options.resource_type = "auto"
    return await cloudinary.uploader.upload(file.tempFilePath,options)
}

const imageUpload = async (req,res) =>{
    try {
        //gettting data from the request
        const{name, tags,email} = req.body
        console.log(name,tags,email)

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes = ["jpg","jpeg","png"]
        const fileType = file.name.split('.')[1].toLowerCase()

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File Type not supported", 
            })
        }

        //file format is supported 
        const response = await uploadFileToCloudinary(file,"FileUpload")
        console.log("this is the response --------------> ",response)
        //saving entry into database
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })

        res.json({
            success:true,
            message:"image successfully uploaded",
            imageUrl:response.secure_url
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Error in image Upload",
            error:error.message
        })
    }
}

const videoUpload = async (req,res) =>{
    try {
        //data fetch
        const {name,tags,email} = req.body
        console.log("name is ",name)
        console.log("tags is ",tags)
        console.log("email is ",email)

        //getting the video file
        const file = req.files.videoFile

        //validation
        const supportedTypes = ["mp4","mov"]
        const fileType = file.name.split('.')[1].toLowerCase()
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"file type not supported "
            })
        }

        //file type is supported 
        console.log("Uploading Video to Cloudinary")
        const response = await uploadFileToCloudinary(file,"FileUpload")
        console.log("the response is ---->",response)

        //db entry creation 
        const fileData = await File.create({
            name,
            tags,
            email,
            videoUrl:response.secure_url
        });

        res.json({
            success:true,
            message:"Video Uploaded Successfully",
            fileData
        })



    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Error in Video Upload",
            error:error.message
        })
    }
}

const imageSizeReducer = async (req,res) =>{
    try {
        //extracting name tags email request body
        const {name,tags,email} = req.body
        console.log("name is ", name)
        console.log("tags is ", tags);
        console.log("email is ", email)

        //extracting file from request file
        const file = req.files.imageFile;
        console.log("the iamge file is -------------------------------------------",file)

        //validation
        const supportedTypes = ["jpeg","jpg","png"]

        const fileType = file.name.split('.')[1].toLowerCase()

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File Type not supported", 
            })
        }

        //file format is supported 
        const response = await uploadFileToCloudinary(file,"FileUpload",30)
        console.log("this is the response --------------> ",response)
        //saving entry into database
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })

        res.json({
            success:true,
            message:"image successfully uploaded",
            imageUrl:response.secure_url
        })


    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Error in Image Resize Upload",
            error:error.message
        })
    }
}

module.exports = {
    localFileUpload,
    imageUpload,
    videoUpload,
    imageSizeReducer
}