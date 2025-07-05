const Like = require("../models/likeModel")
const Post = require("../models/postModel")

const likePost = async (req,res)=>{
 try {
    const {postId,user} = req.body
    const like = new Like({
        postId,
        user
    })
    // isko like collection me store krlo 
    const savedLike = await like.save()

    //then we have to update in the post collection also
     const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $push: {likes: savedLike._id}},
        {new:true} // to get updated document otherwise it will return the old document
     )
     .populate("likes")
     .populate("comments")

    res.status(200).json({
      success: true,
      message: "Post Liked Successfully",
      data: updatedPost,
    });
 } catch (error) {
    console.error(error)
    res.status(400).json({
        success:false,
        error:error.message,
        message:"Error while liking a post"
    })
 }
}

const unlikePost = async (req,res)=>{
    try {
        const {postId,likeId} = req.body
        console.log(postId, likeId);
        const deletedLike = await Like.findOneAndDelete({_id:likeId})

        //updating the post collection
        const updatedPost = await Post.findByIdAndUpdate(postId,{$pull:{likes:deletedLike._id}},{new:true})
        res.status(200).json({
            success:true,
            message:"Post Unliked Successfully",
            data:updatedPost
        })
         
    } catch (error) {
       console.error(error)
       res.status(400).json({
           success:false,
           error:error.message,
           message:"Error while unliking a post"
       })
    }
}

module.exports = {
    likePost,
    unlikePost
}

