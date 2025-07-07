//auth , isStudent , isAdmin

const jwt = require("jsonwebtoken")

const auth = (req,res,next) =>{
    try {
        //extract JWT token 
        const token = req.cookies.token     

        //extracting jwt token from the request header - safest way
        // const token = req.header("Authorization").replace("Bearer ", "");

        // console.log(token)
        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token is Missing "
                
            })
        }

        //verifying token 
        try {
            const payload = jwt.verify(token,process.env.JWT_SECRET)
            console.log(payload)
            req.user = payload
         
        } catch (error) {
            console.error(error)
            res.status(401).json({
                success:false,
                message:"Token is Invalid ",
                error:error.message,
            })

        }

        next()

   
    } catch (error) {
        console.error(error)
        res.status(401).json({
            message:"Unauthorized",
            error:error.message,
            success:true
        })
    }
}

const isStudent = (req,res,next) =>{
    try {
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for students, You cannot access it "
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User Role is not matching"
        })
    }
}

const isAdmin = (req,res,next) =>{
    try {
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin, You cannot access it "
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User Role is not matching"
        })
    }
}

module.exports = {
    auth,
    isStudent,
    isAdmin
}