const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60
    }
})

// function to send mails 
async function sendVerificationEmail(email,otp){
    try {
        //send mail to user
        const mailResponse = mailSender(email,"Verification Email from StudyNotion" , otp)
        console.log("Email Sent Successfully",mailResponse)

    } catch (error) {
        console.error("Error while sending mail ",error)
        throw error;
    }

}

otpSchema.pre("save",async function(next){
    await sendVerificationEmail(this.email,this.otp)
    next();
})

const Otp = mongoose.model('Otp',otpSchema)

mdoule.exports = Otp;