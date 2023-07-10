import { Users } from "../dao/factory.js";
import UsersRepository from "../repository/users.repository.js";
import {transporter as sendEmail, transporter} from "./mail.service.js";
import __mainDirname, {
} from "../utils/utils.js"
import {
    createMailHtml, deleteUsersHtml
} from "../utils/customHtml.js";

const users = new Users();
const usersRepository = new UsersRepository(users)

export const getAllDto = async () => {
    const result = await usersRepository.getAllDto()
    return result
}
export const getAll = async () => {
    const result = await usersRepository.getAll()
    return result
}

export const getByEmail = async (uemail) => {
    const result = await usersRepository.getByEmail(uemail)
    return result
}

export const getById = async (uid) => {
    const result = await usersRepository.getById(uid)
    return result
}

export const updateById = async (uid, user) => {
    const result = await usersRepository.updateById(uid, user)
    return result
}

export const deleteUser = async (email) => {
    const result = await usersRepository.delete(email)
    return result
}

export const changeRolToUser = async (user) => {
    user.rol = 'user'
    const result = await usersRepository.updateById(user._id, user)
    return result
}

export const changeRolToPremium = async (user) => {
    user.rol = 'premium'
    const result = await usersRepository.updateById(user._id, user)
    return result
}

export async function ForgotPassword(email) {
    let userExist = await usersRepository.getByEmail(email);

    if (userExist) {
        let user = userExist;
        try {
            const email = {
                to: user.email,
                subject: "Reset Password",
                html: createMailHtml
            }

            await sendEmail(email)
        } catch (error) {
            console.log(error)
        }
    }
}

export const insertDocuments = async (uid, files) => {
    const user = await usersRepository.getById(uid)
        files.profile && files.profile.forEach(file => user.documents.push({name: file.originalname, fieldname: file.fieldname, reference: file.path}))
        files.products && files.products.forEach(file => user.documents.push({name: file.originalname, fieldname: file.fieldname, reference: file.path}))
        files.documents && files.documents.forEach(file => user.documents.push({name: file.originalname, fieldname: file.fieldname, reference: file.path}))
        files.identification && files.identification.forEach(file => user.documents.push({name: file.originalname, fieldname: file.fieldname, reference: file.path}))
        files.proofAdress && files.proofAdress.forEach(file => user.documents.push({name: file.originalname, fieldname: file.fieldname, reference: file.path}))
        files.accountStatusVoucher && files.accountStatusVoucher.forEach(file => user.documents.push({name: file.originalname, fieldname: file.fieldname, reference: file.path}))
        const result = await usersRepository.updateById(user._id, user)
        return result
}

export const deleteUsers = async () => {
    try {
        const users = await usersRepository.getAll()
    const usersFilter = users.map(user => ({"email": user.email, "last_connection": user.last_connection ?? 0}))
    const limitDays = Date.now() - 172800000
    const userDelete = usersFilter.filter(user => user.last_connection < limitDays)
    console.log(usersFilter[0].last_connection > limitDays)

    const result = userDelete.forEach( async u => {
        await usersRepository.delete(u.email)
        const email = {
            to: u.email,
            subject: "Account deleted",
            html: deleteUsersHtml()
        }
        await transporter.sendMail(email)
    })
    return result
    } catch (error) {
        console.log(error)
    }
}