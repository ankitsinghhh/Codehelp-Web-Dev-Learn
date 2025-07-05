const Post = require('../models/postModel')

const createPost = async (req,res)=>{
    try {
        const {title,body} = req.body
        const post = new Post({
            title,
            body
        })
        const savedPost = await post.save()
        res.status(200).json({
            success:true,
            message:"Post created Successfuly",
            data:savedPost
        })
    } catch (error) {
        console.error(error)
        res.status(400).json(
            {
                success:false,
                error:error.message,
                message:"Error in creating Post"
            }
        )
    }
}

const getPosts = async (req,res) =>{
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec()
        if(!posts){
            return res.status(500).json({
                success:false,
                message:"No Posts Found",
                
            })
        }
        res.status(200).json({
            success:true,
            message:"Posts fetched Successfully",
            data:posts
        })
        
    } catch (error) {
        console.error(error)
        res.status(400).json({
            success:false,
            error:error.message,
            message:"Error in Getting Posts"
        })
    }
}

module.exports = {
    createPost,
    getPosts
}