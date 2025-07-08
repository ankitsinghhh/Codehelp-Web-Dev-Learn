const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
})

//post middlware 
fileSchema.post('save',async function(doc){
    try {
        console.log("DOC -----------------> ",doc) // jo v entry database me create ho rhi hai usiko hi doc bol rhe hai 
        
        //creating transporter
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        let info = await transporter.sendMail({
            from:process.env.MAIL_USER,
            to:doc.email,
            subject:"New File Uploaded",
            text:"You have a new file uploaded",
            html:`<h1>New File Uploaded</h1>
            <p>Hi, <b>${doc.name}</b> has been uploaded.</p>`
        })
        console.log("info -----------",info)
      


    } catch (error) {
        console.log(error)
    }
})

const File = mongoose.model('File',fileSchema)

module.exports = File