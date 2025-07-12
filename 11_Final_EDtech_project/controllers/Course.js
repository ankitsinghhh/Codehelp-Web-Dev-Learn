const Course = require("../models/Course")
const Tag = require("../models/Category")
const User = require("../models/User")
const {uploadImageToCloudinary} = require('../utils/imageUploader')

//createCourse handler function 
const createCourse = async (req,res)=>{
    try {
        //get all Data ( note: tag from req ki body is basically an object id ( _id ) )
        const{courseName, courseDescription,whatYouWillLearn,price,tag} = req.body

        //get thumbnail 
        const thumbnail = req.files.thumbnailImage;

        //validation
        if(!courseName || !courseDescription || !whatYouWillLearn || !price || !tag || !thumbnail){
            return res.status(400).json({
                success:false,
                error:"Please fill all the fields",
                message:"All fields are required"
            })
        }

        //check for instructor 
        const userId = req.user.id;
        const instructorDetails = await User.findById(userId)
        console.log("instructor details : ",instructorDetails)

        if(!instructorDetails){
            return res.status(401).json({
                success:false,
                message:"Instructor not Found "
            })
        }

        //check given tag is valid or not 
        const tagDetails = await Tag.findById(tag) 
        if(!tagDetails){
            return res.status(404).json({
              success: false,
              message: "Tag is not valid",
            });
        }

        //upload image to cloudinary 
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME)

        //create an entry for new course 
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor:instructorDetails._id,
            whatYouWillLearn,
            price,
            tag:tagDetails._id,
            thumbnail:thumbnailImage.secure_url,
        })

        //add the new course to userSchema of the instructor 
        await User.findByIdAndUpdate(
            {_id:instructorDetails._id},
            {$push:{courses:newCourse._id}},
            {new:true}
        )

        //return the new course 
        return res.status(201).json({
            success:true,
            message:"Course Created Successfully",
            newCourse
        })

    


    
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Error while Creating a Course "
        })
    }
}


//getAllcourses handler function 
const getAllCourses = async (req,res)=>{
    try {
        //fetch all courses from database - 

        const allCourses = await Course.find({},{
            courseName:true,
            price :true,
            thumbnail:true,
            ratingAndReviews:true,
            studentsEnrolled:true

        }).populate("instructor").exec()

        //returning success response 
        return res.status(200).json({
            success:true,
            message:"All Courses Fetched Successfully",
            allCourses
        })
  
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Error while Fetching All Courses "
        })
    }
}

module.exports = {
    createCourse,
    showAllCourses
}
