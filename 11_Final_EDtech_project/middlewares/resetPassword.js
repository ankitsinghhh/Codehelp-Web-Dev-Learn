const User = require("../models/user");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");

//resetPasswordtoken
const resetPasswordToken = async (req, res) => {
  try {
    //getting email from req ki body
    const email = req.body.email;

    //check user for this email , email validation
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(401).json({
        success: false,
        message: "user not found",
      });
    }

    //generating the token
    const token = crypto.randomUUID();

    //update the user by adding token and expiration time
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000, //5 minutes from now
      },
      { new: true }
    );

    // generating the url
    const url = `http://localhost:4000/update-password/${token}`;

    //send mail containing the url
    await mailSender(
        email, 
        "Password Reset Link",
        `password reset link : - ${url}`
    );

    //return success response
    return res.status(200).json({
        success:true,
        message:"Email Sent Successfully, please check email and change the password"
    })


  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong while reset password token",
    });
  }
};

//resetPassword
const resetPassword = async (req, res) => {
  try {
    //extracting token , newPassword , confirmNewPassword // data fetch
    const {newPassword,confirmNewPassword,token} = req.body

    //validation 
    if(!newPassword || !confirmNewPassword ){
        return res.status(401).json({
            success:false,
            message:"Please fill all the fields"
        })
    }

    if(newPassword !== confirmNewPassword){
        return res.status(401).json({
            success:false,
            message:"Password and Confirm Password doesn't match"
        })
    }

    //get userdetails from database using the token 
    const userDetails = await User.findOne({token:token})

    //if not entry , then token is invalid  
    if(!userDetails){
        return res.status(401).json({
            success:false,
            message:"token is invalid"
        })
    }
    // token time check - then token expired
    if(userDetails.resetPasswordExpires < Date.now()){
        return res.status(401).json({
            success:false,
            message:"token is expired"
        })
    }

    //hash the newPassword
    const hashedNewPassword = bcrypt.hash(newPassword,10)

    //password update 
    const updatedUser = await User.findOneAndUpdate(
        {token:token},
        {password:hashedNewPassword},
        {new:true}
    )

    //return success response
    return res.status(200).json({
        success:true,
        message:"Password reset successfully"
    })


  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong while resetting the password",
    });
  }
};

module.exports = {
  resetPasswordToken,
  resetPassword,
};
