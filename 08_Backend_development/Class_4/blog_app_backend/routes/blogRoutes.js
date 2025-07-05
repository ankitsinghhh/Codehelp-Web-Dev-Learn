const express = require('express');
const router = express.Router();

const {createPost,getPosts} = require("../controllers/postController")
const{likePost,unlikePost} = require("../controllers/likeController")
const {createComment} = require("../controllers/commentController")

router.post("/comment/create",createComment)
router.post("/posts/create",createPost)
router.get("/posts/view",getPosts)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)

module.exports = router;