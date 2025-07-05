const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

const createComment = async (req,res) =>{
    try {
        const {postId,user,body} = req.body
        //creating object
        const newComment = new Comment({
            postId,
            user,
            body
        })

        // storing the obj in db
        const savedComment = await newComment.save()

        //accordingly updating the post comment 
        // how ? = > fidning the post by id  , add the new Comment to its comment
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            {$push:{comments:savedComment._id}},
            {new:true}
        ).populate("comments").exec() //populate the comments array with comments documents

        res.json({
            success:true,
            data:updatedPost,
            message:"Comment created Successfully"
        })

        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error while creating comment"+error });
    }
}

module.exports ={createComment}