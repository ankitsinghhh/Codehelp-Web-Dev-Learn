const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("dotenv").config()


const signUp = async(req,res) =>{
    try {
        const {name, email,password ,role} = req.body

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        };
        //Hashing the password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10)
        }catch(error){
            return res.status(400).json({
                success:false,
                error:error.message,
                message:"Error While Hashing Password"
            })
        }

        //creating entry for user in DATABASE
        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            role
        })

        return res.status(200).json({
            success:true,
            message:"user created Successfully",
            data:user
        })

    } catch (error) {
        console.error(error)
        res.status(400).json({
            success:false,
            error:error.message,
            message:"Error While Sign Up"
        })
    }
    
}

const login = async (req,res) =>{
    try {
        // data fetch
        const {email,password} = req.body

        //validating the email and the password 
        if(!email || !password){
            return res.status(400).json({
                sucess:false,
                message:"Please Enter Email and Password to Login | dont leave them blank"
            })
        }

        //finding if email exists in db or not 
        let existingUser = await User.findOne({email})
        if(!existingUser){
            return res.status(401).json({
                success:false,
                message:"User not Registered | You need to SignUp first to Login"
            })
        };
        //checking if password matches or not 
        if(await bcrypt.compare(password,existingUser.password)){
            //password matched
            //if password matches , then we will proceed to create a jwt token 
            // create a payload
            const payload = {
                email:existingUser.email,
                id:existingUser._id,
                role:existingUser.role
            };
            //create a token 
            let token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn:"2h"})
            existingUser = existingUser.toObject()
            existingUser.token = token;
            existingUser.password = undefined;
            const options = {
                expires:new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true
            }
         
            res.cookie("token",token,options ).status(200).json({
                success:true,
                message:"Login Successful",
                data:existingUser,
                token
            })


        }else{
            //password didnt match
            return res.status(401).json({
                success:false,
                message:"Invalid Password"
            })

        }

        
        
        
    } catch (error) {
        console.error(error)
        res.status(400).json({
            success:false,
            error:error.message,
            message:"Error while Login"
        })
    }
    
}


module.exports = { signUp, login }