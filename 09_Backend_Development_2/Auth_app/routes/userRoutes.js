const express = require('express')
const router = express.Router()

const { signUp, login } = require("../controller/auth");
const {auth ,isStudent, isAdmin} =require("../middlewares/auth")

router.post("/signup",signUp)
router.post("/login",login)

//protected Routes
router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected Route for TESTSSSSSSSSSSSS"
    })
})

router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected Route for Students"
    })
})

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
      success: true,
      message: "Welcome to the Protected Route for Admin",
    });
})

module.exports = router 