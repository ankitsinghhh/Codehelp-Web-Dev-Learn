const nodemailer = require("nodemailer");

const mailSender = async (email, title , body )=>{
    try {
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASSWORD
            }
        })

        let info = await transporter.sendMail({
            from:process.env.MAIL_USER,
            to:email,
            subject:title,
            html:body
        })
        console.log("Mail Sent successfully to : ",email)
        console.log(info)
        return info
 
            
    } catch (error) {
        console.log("Error in Sending Mail : ",error.message)
    }
}

module.exports = mailSender;
