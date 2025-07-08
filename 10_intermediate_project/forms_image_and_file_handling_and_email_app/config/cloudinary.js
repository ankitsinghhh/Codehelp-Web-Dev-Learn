const cloudinary = require('cloudinary').v2;


const cloudinaryConnect = async () =>{
    try {
        await cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        })
        console.log("connected to cloudinary successfully");
    } catch (error) {
        console.log(error)
        console.log("failed to connect to cloudinary");
    }
}

module.exports = cloudinaryConnect;