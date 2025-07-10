const User = require('../models/User')
const Otp = require('../models/otp')
const otpGenerator = require('otp-generator')
const bcrypt = require('bcrypt')
const mailSender = require('../utils/mailSender');


//sendOTP 
const sendOtp = async ( req,res) =>{
    try {
        //fetch email from request.body
        const {email } = req.body

        //check if user already exists or not 
        const checkUserPresent = await User.findOne({email})

        // if user already exist , then return a response 
        if(checkUserPresent){
            return res.status(401).json({
                success:false,
                message:'User already exists'
            })
        }

        //generate-otp
        var otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
           
        })
        console.log("OTP generated", otp)

        //check unique otp or not 
        const result = await Otp.findOne({ otp });

        while(result){
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
               
            })
        }


        //otp entry in database
        const payload = {email,otp}
        const otpBody = await Otp.create(otpPayload)
        console.log(otpBody)

        //return a success response
        return res.status(200).json({
          success: true,
          message: "OTP sent successfully",
          otp
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
          success: false,
          error: error.message,
          message: "Something went wrong while sending OTP",
        });
    }
}


//signup handler
const signUp = async (req,res) =>{
    try {
        //data fetch from req ki body 
        const {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          accountType,
          contactNumber,
          otp,
        } = req.body;

        //validate the data 
        if(!firstName || !lastName || !email || !password || !confirmPassword){
          return res.status(403).json({
            success: false,
            message: "Please enter all the required fields",
          });
        }

        //match the pwd and confirm pwd
        if(password !== confirmPassword){
          return res.status(403).json({
            success: false,
            message: "Passwords and confirmPassword value does not match",
          });
        }

        //check user already exist or not 
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(403).json({
              success: false,
              message: "User already registered So Please Login",
            });
        }

        //find most recent otp stored for the user 
        const recentOtp = await Otp.findOne({email}).sort({createdAt:-1}).limit(1)
        console.log("recent otp",otp)
        //validate otp 
        if(recentOtp.length ==0){
            //otp not found
            return res.status(401).json({
                success:false,
                message:"OTP not found"
            })
        }
        else if(otp !== recentOtp.otp){
            //invalid otp
            return res.status(401).json({
                success:false,
                message:"Invalid OTP"
            })
        }

        //Hash password
       const hashedPassword = await bcrypt.hash(password,10)


        //create entry in DATABASE
        const profileDetails = await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            conatctNumber:null
        })

        const User = await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            accountType,
            additionalDetails:profileDetails._id,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        })

        //return success response 
        return res.status(200).json({
            success:true,
            message:"User registered Successfully",
            user,
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          error: error.message,
          message: "Something went wrong while signing up | Please try again",
        });
    }
}

//login
const login = async (req,res) =>{
    try {
        //getting email and password req ki body
        const {email,password} =- req.body 
        //validation of the data
        if(!email || !password){
            return res.status(402).json({
                success:false,
                message:"All fields are required , please try again "
            })
        }
        //check if user exists or not , if not tell him to sign up 
        const existingUser = await User.findOne({email})
        if(!existingUser){
            return res.status(402).json({
                success:false,
                message:"User is not registered, Please Sign Up First"
            })
        }

        //match the password
        const isPasswordMatched = await bcrypt.compare(password,existingUser.password)

       if(isPasswordMatched){
            // create jwt token
            const payload = {
                firstName:existingUser.firstName,
                lastName:existingUser.lastName,
                email:existingUser.email,
                accountType:existingUser.accountType,
        
            }

        
            const token = await jwt.sign(payload, process.env.JWT_SECRET,{
                expiresIn:"1d"
            })

            existingUser.password = undefined

            const options = {
                expires:new Date(Date.now() + 3 * 60 * 60 * 24*1000),
                httpOnly:true
            }

            //create cookie and sent it 
            res.cookie('token',token,options).status(200).json({
                success:true,
                token,
                existingUser,
                message:"Logged In Successfully"
            })

       }

        //send the response
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Something went wrong while loggin in"
        })
    }
}

//Change password
const changePassword = async (req,res)=>{
    try {
      //getting the newPassword , oldPassword and confirmNewPassword from request.body
      const { email, oldPassword, newPassword, confirmNewPassword } = req.body;

      //validation
      if (!email || !oldPassword || !newPassword || !confirmNewPassword) {
        return res.status(400).json({
          success: false,
          message: 'Please enter all the fields',
        });
      }
      if (newPassword !== confirmNewPassword) {
        return res.status(401).json({
          success: false,
          message: "New password and confirm new password don't match ",
        });
      }

      //finding the user with email
      const user = await User.findOne({ email });
      const isOldPasswordValid = await bcrypt.compare(oldPassword,user.password)
      if(!isOldPasswordValid){
        return res.status(401).json({
          success: false,
          message: "Old password is incorrect",
        });
      }

      //old password is matched and its valid 
      //hashing the newPassword
      const hashedNewPassword = await bcrypt.hash(newPassword,10)

      //update password in database
      const updatedUser = await User.findByIdAndUpdate(user._id,{
        password:hashedNewPassword
      },{new:true})

      //send mail --> password updated
       // 📧 4. Send confirmation email
    const subject = '🔒 Your password has been changed';
    const body = `
      <p>Hello ${user.firstName || user.email},</p>
      <p>This is a confirmation that your password was recently changed.</p>
      <p>If this wasn’t you, please contact support immediately.</p>
    `;
    await mailSender(email, subject, body);
      
      //returning successful response
      return res.status(200).json({
        success: true,
        message: "password updated successfully",
      });
    } catch (error) {
        console.error(error)
        res.status(500).json({
          success: false,
          error: error.message,
          message: "Something went wrong while changing password",
        });
    }
}

module.exports = {
  sendOtp,
  changePassword,
  login,
  signUp

};
