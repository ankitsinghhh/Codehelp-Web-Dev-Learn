const SubSection = require('../models/SubSection')
const Section = require('../models/Section')
const uploadImageToCloudinary = require('../utils/imageUploader')


 
//create subsection
const createSubSection = async (req,res) =>{
    try{
        // get data from req ki body 
        const {sectionId, title , timeDuration , description} = req.body

        //extract file/video
        const video = req.files.videoFile

        //validation
        if(!sectionId || !title || !timeDuration || !description || !video){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        //upload video to cloudinary 
        const uploadedVideoDetails = await uploadImageToCloudinary(video,process.env.CLOUDINARY_FOLDER_NAME)

        // create a subsection
        const subSectionDetails = await SubSection.create({
            title:title,
            timeDuration:timeDuration,
            description:description,
            videoUrl:uploadedVideoDetails.secure_url
             
        })

        //update section with this subsection objectId
        const uploadedSection = await Section.findByIdAndUpdate(
            sectionId,
            {
                $push: {
                    subSection:subSectionDetails._id
                }
            },
            {
                new:true,
            }
        ) // we can add populate here to show the subsection details instead of its id 
      
              
        //return success response 
        return res.status(200).json({
            success:true,
            message:"SubSection created successfully",
            data:subSectionDetails
        })

    }
    catch(error){
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Error while creating a SubSection",
            error:error.messsage
        })
    }
}

//update subSection -> HW

//delete subSection -> HW


module.exports = {
    createSubSection
    

}