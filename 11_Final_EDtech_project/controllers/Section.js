const Section = require("../models/Section")
const Course = require("../models/Course")

const createSection = async (req,res) =>{
    try {
        //data fetch
        const {sectionName, courseId} = req.body
        
        //data validation
        if(!sectionName || !courseId){
            return res.status(401).json({
                success:false,
                message:"Please provide all the fields"
            })
        }

        //create section 
        const newSection = await Section.create({
            sectionName,
            courseId
        })

        //update the course with section object Id 
        const updatedCourseDetails = await Course.findByIdAndUpdate(
            courseId,
            {
                $push:{
                    courseContent:newSection._id
                }
            },
            {new:true}
        )

        //return successful response 
        return res.status(200).json({
            success:true,
            message:"Section created Successfully",
            updatedCourseDetails

        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Error while Creating a Section"
        })
    }
}


const updateSection = async(req,res) =>{
    try {
        //data fetch 
        const {sectionId, sectionName} = req.body

        //data validation 
        if(!sectionName || !sectionId){
            return res.status(401).json({
                success:false,
                message:"Please provide all the fields"
            })
        }

        // update data in section 
        const updatedSection = await Section.findByIdAndUpdate(
            sectionId,
            {
                sectionName
            },
            {new:true}
        )

        // return success response 
        return res.status(200).json({
            success:true,
            message:"Section Updated Successfully",
            updatedSection
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Error while Updating a Section",
            error:error.message
        })
    }
}

const deleteSection = async (req,res) =>{
    try {
      //get id --- assuming that we are sending ID in params
      const sectionId = req.params.id;
      //use findByIdAndDelete
      await Section.findByIdAndDelete(sectionID)

      //delete the Section from courseSchema -> will do it in testing 
        

      //return success response
      return res.stat

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Error while Deleting a Section",
            error:error.message
        })
    }
}

module.exports = {
    createSection 
}