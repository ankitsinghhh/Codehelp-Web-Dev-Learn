const express = require("express");
const router = express.Router()

const {localFileUpload,imageUpload,videoUpload,imageSizeReducer} = require("../controllers/fileUpload")

//api routes
router.post("/imageUpload",imageUpload)
router.post("/videoUpload",videoUpload)
router.post("/imageSizeReducer",imageSizeReducer)
router.post("/localFileUpload",localFileUpload)

module.exports = router;