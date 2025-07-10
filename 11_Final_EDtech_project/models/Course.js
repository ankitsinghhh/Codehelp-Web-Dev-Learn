const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
    },
    courseDescription:{
        type:String,

    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    whatYouWillLearn:{
        type:String,
    },
    courseContent:[
        {
            type:String,
            ref:"Section"
        }
    ],
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'RatingAndReview'
        }
    ],
    price:{
        type:Number,
    
    },
    thumbNail:{
        type:String,
    },
    tags:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tag'
    },
    studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Student',
            required:true
        }
    ]
 
})

const Course = mongoose.model('Course',courseSchema)

module.exports = Course