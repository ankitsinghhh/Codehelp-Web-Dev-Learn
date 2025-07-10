const mongoose = require('mongoose');
const { ModuleCacheMap } = require('vite/runtime');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim:true
    },
    lastName: {
      type: String,
      required: true,
      trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    accountType:{
        type:String,
        enum:["Admin","Student","Instructor"],
        required:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Profile'
    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    courses:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
        }
    ],
    image:{
        type:String,
        default:"https://cdn.vectorstock.com/i/750p/92/16/default-profile-picture-avatar-user-icon-vector-46389216.avif"
    },
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'CourseProgress'
        }
    ]

  },
  { timestamps: true }
);

const User = mongoose.model('User',userSchema)

module.exports = User;