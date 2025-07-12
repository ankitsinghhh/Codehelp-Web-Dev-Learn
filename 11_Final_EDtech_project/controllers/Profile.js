const { findById } = require('../models/Course')
const Profile = require('../models/Profile')
const User = require('../models/User')

const updateProfile = async (req,res) =>{
    try {
        //getData
        const {dateOfBirth="",about="",contactNumber,gender} = req.body
        //getUserId
        const userId = req.user.id
        //validation
        if(!contactNumber || !gender || !userId){
            return res.status(402).json({
                success:true,
                message:"All fileds are required"
            })
        }

        //find Profile 
        const userDetails = await findById(userId)
        const profileId = userDetails.additionalDetails
        const profileDetails = await Profile.findById(profileId)

        //update Profile
        profileDetails.dateOfBirth = dateOfBirth
        profileDetails.about = about
        profileDetails.contactNumber = contactNumber
        profileDetails.gender = gender

        await profileDetails.save()

        //return success response
        return res.status(200).json({
            success:true,
            message:"Profile updated successfully",
            profileDetails
        })


    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Error while updating the Profile"
        })
    }
}

const deleteProfile = async (req,res) =>{
    try {
      //getId
      const userId = req.user.id;
      //validation - make sure user exists in db or not
      const userDetails = await findById(userId);
      if (!userDetails) {
        return res.status(403).json({
          success: false,
          message: "User not Found",
        });
      }
      //delete profile of this user
      await Profile.findByIdAndDelete(userDetails.additionalDetails);
      //delete the user
      await User.findByIdAndDelete({ _id: userId });

      // HW -> we have to delete the student user from the courses Enrolled also

      //return success response
      return res.status(200).json({
        succes:true,
        message:"User Deleted Successfully",
        
      })

      // HW -> the deleting of profile should happen after 1 day / 3 days or more , use {cronjobs } for this 
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Error while deleting the User"
        })
    }
}

const getAllUserDetails = async (req,res) =>{
    try {
        //get user id
        const userId = req.user.id

        //validation - find if user exist or not  and call db to get all the user details
        const userDetails = await findById(userId).populate("additionalDetails").exec()
        if(!userDetails){
            return res.status(402).json({
                success:false,
                message:"User does not exist "
            })
        } 
        //return the user details
        res.status(200).json({
            success:true,
            message:"User Details Fetched Successfully",
            userDetails
        })
     
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:true,
            message:"Error while getting All User Details"
        })
    }
}

module.exports = {
    updateProfile,
    deleteProfile
}
