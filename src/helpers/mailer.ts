import nodemailer from 'nodemailer'
import User from '@/models/userModels'
import bcrypt from 'bcryptjs'
import { verify } from 'jsonwebtoken'

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        //created hashed token
        const hashedToken = bcrypt.hash(userId.toString(), 10)

        // await User.findByIdAndDelete(userId,
        //     {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})

        if (emailType === "VERIFY") {
            await User.findByIdAndDelete(userId,
                {
                    verifyToken: hashedToken,
                    verifyTokenExpiry: Date.now() + 3600000
                })
        } else if (emailType === "RESET") {
            await User.findByIdAndDelete(userId,
                {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                })
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "044d1b0774b074",
                pass: "52f60a2dc80868"
            }
        });

        const mailOptions = {
            from: 'mehedynoman11@gmail.com',
            to: email,
            html: `<p>Click < a href="${process.env.domain}/
          verifyemail?token=${ hashedToken }">here</a> to ${emailType === "VERIFY" ? "verify your email" : "Reset Your Password"}</p>`
    }

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
          

    } catch (error: any) {
    throw new Error(error.message);
}
}