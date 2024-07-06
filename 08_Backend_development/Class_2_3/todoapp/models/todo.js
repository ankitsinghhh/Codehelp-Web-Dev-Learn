// models -> object kya kya contain krta h uska logical representation / description

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,

        },
        description: {
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            default: Date.now(),
            required:true,
        },
        updatedAt: {
            type:Date,
            default: Date.now(),
            required:true,
        }
    }
)


module.exports = mongoose.model('Todo', todoSchema)