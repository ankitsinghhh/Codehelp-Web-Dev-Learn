//configuration for connecting the database


const mongoose = require('mongoose')

require('dotenv').config() //.env file me data load krta hai
// upr wali line se jo v hamne data feed kiya hoga .env me , vo sara ka sara load hojaega process object me  ==> and those data can be fetched from process object

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    } )
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch((error)=>{
        console.log("issue in db connection")
        console.error(error.message)
        process.exit(1)  // 1 means error exit
    })
}

module.exports = dbConnect;

// is file ka kaam bs connection ensure krna h between your node js application and  your database
