const RatingAndReview = require('../models/RatingAndReview')
const User =require('../models/User')
const Course = require('../models/Course')


//create rating
exports.createRating = async (req,res) =>{
    try {
        //get  userId
        const userId = req.user.userId
        //fetch data from req 
        const {rating,review,courseId} = req.body
        //check if user is enrolled or not 
        const courseDetails = await Course.findOne({
            _id:courseId,
            studentsEnrolled: {$eleMatch:{$eq:userId}} 
        })

        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message:"Student is not Enrolled in this course"
            })
        }
        //check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
            user:userId,
            course:courseId
        })
        if(alreadyReviewed){
            return res.status(403).json({
                success:false,
                message:"You have already reviewed this course"
            })
        }
         
        // create rating and Review
        const ratingAndReview = await RatingAndReview.create({
            rating,
            review,
            course:courseId,
            user:userId
        })
        //update the course with thisrating and review 
        const updateCourseDetails = await Course.findByIdAndUpdate(
          courseId,
          {
            $push: {
              ratingsAndReviews: ratingAndReview._id,
            },
          },
          { new: true }
        );
        console.log(updateCourseDetails);
        //return success response 
        return res.status(200).json({
            success:true,
            message:"Rating and Review Created Successfully",
            ratingAndReview
        })
     

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Error while Creating the Rating",
            error:error.message
        })
    }
}



//get average rating
exports.getAverageRating = async (req,res) =>{ 
    try {
        // get course Id
        const courseId = req.body.courseId
        //calculat Avg rating
         const result = await RatingAndReview.aggregate([
           {
             $match: {
               course: new mongoose.Types.ObjectId(courseId),
             },
           },
           {
             $group: {
               _id: null,
               averageRating: { $avg: "$rating" },
             },
           },
         ]);
        //return rating



    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Error while getting the Average Rating",
            error:error.message
        })
    }
}


//get All Rating