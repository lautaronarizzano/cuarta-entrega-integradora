import { createMailHtml } from "../utils/customHtml.js"
import {transporter} from './mail.service.js'
import Users from "../dao/dbManagers/users.js";

const usersManager = new Users()


export const sendEmailResetPassword = async (email, token) => {
    try {
        const user = await usersManager.getByEmail(email)
        const html = createMailHtml(user, token)
        await transporter.sendMail({from:`Ecommerce burguers <${process.env.APP_FROM_EMAIL}>`,
        to: email,
        subject: "Reset Password",
        html: html
    })
    } catch (error) {
        console.log(error)
    }
}
