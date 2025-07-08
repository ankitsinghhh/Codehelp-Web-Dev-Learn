const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connected to DB Successfully");
    } catch (error) {
        console.log(error," ERROR in Connecting to DB ")
        process.exit(1)
    }
}

module.exports = connectDB;