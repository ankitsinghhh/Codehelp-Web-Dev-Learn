const jwt = require("jsonwebtoken")
require("dotenv").config()

const User = require("../models/User")

//auth
const auth =  (req,res,next) =>{
    try {
        //extract token 
        const token = req.cookies.token
        
        // if token missing
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is Missing"
            })
        }

        //verify the token 
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode)
            req.user = decode
            
        }catch(err){
            //verification issue
            console.log("Error in verfying the token")
            return res.status(401).json({
                success:false,
                message:"Token is not valid"
            })
        }

        next()

     


    } catch (error) {
        console.error(error)
        return res.status(401).json({
            success:false,
            message:"Something went wrong while verifying the token",
            error:error.message
        })
    }
}


//isStudent
const isStudent =  (req,res,next) =>{
    try {
        
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for students only"
            })
        }

        next()

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"Something went wrong while User Role Verification",
            error:error.message

        })
    }
}

// /isInstructor 
const isInstructor =  (req,res,next) =>{
    try {
        
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Instructors only"
            })
        }

        next()

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"Something went wrong while User Role Verification",
            error:error.message

        })
    }
}

//isAdmin
const isAdmin =  (req,res,next) =>{
    try {
        
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Admin only"
            })
        }

        next()

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"Something went wrong while User Role Verification",
            error:error.message

        })
    }
}

module.exports = {
    auth,
    isInstructor,
    isAdmin,
    isStudent
}
