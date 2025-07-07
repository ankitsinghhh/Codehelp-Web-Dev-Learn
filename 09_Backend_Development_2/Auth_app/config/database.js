const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Successfully Connected to DATABASE");
    } catch (error) {
        console.error("Error Connecting to DATABASE",error)
        process.exit(1)
    }
}

module.exports = connectDB