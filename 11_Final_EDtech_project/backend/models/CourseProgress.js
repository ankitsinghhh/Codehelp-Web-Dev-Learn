const mongoose = require('mongoose')

const courseProgressSchema = new mongoose.Schema({
    courseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
    },
    completedVideos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'SubSection'
        }
    ]
})

const CourseProgress = mongoose.model('CourseProgress', courseProgressSchema)

module.exports = CourseProgress