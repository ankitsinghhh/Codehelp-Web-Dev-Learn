const mongoose = require('mongoose')

const connectDB = async () =>{
   try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connected to database");
   } catch (error) {
        console.error("Database Connection Failed "+error)
        process.exit(1)
   }
}

module.exports = connectDB;