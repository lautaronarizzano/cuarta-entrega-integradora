import * as usersService from '../services/users.service.js'

export const getUsersDto = async (req, res) => {
    try {
        const result = await usersService.getAllDto()
        return res.status(200).send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        req.logger.fatal(error)
        res.status(500).send({status:'error', error: error})
    }
}

export const getUsers = async (req, res) => {
    try {
        const result = await usersService.getAll()
        return res.status(200).send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        req.logger.fatal(error)
        res.status(500).send({status:'error', error: error})
    }
}

export const getUserById = async (req, res) => {
    try {
        const uid = req.params.uid

        const result = await usersService.getById(uid)
        return res.status(200).send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        req.logger.fatal(error)
        res.status(500).send({status:'error', error: error})
    }
}

export const insertDocuments = async (req, res) => {
    try {
        const uid = req.params.uid
        const files = req.files
        const result = await usersService.insertDocuments(uid, files)
        res.status(200).send({status: 'success', payload: result.documents})
    } catch (error) {
        console.log(error)
        req.logger.fatal(error)
        res.status(500).send({status:'error', error: error})
    }
}

export const deleteUserByEmail = async (req, res) => {
    const email = req.params.email
    try {
        const result = await usersService.deleteUser(email) 
        res.status(200).send({status: 'success', payload: result})
    } catch (error) {
        req.logger.fatal(error)
        res.status(500).send({status:'error', error: error})
    }
}

export const gerUserByEmail = async (req, res) => {
    try {
        const uemail = req.params.uemail

        const result = await usersService.getByEmail(uemail)
        return res.status(200).send({
            status: 'success',
            payload: result
        })
    } catch (error) {
        req.logger.fatal(error)
        res.status(500).send({status:'error', error: error})
    }
}

export const rolHandler = async (req, res) => {
    const uid = req.params.uid

    try {
        const user = await usersService.getById(uid)

    if (user.rol == 'premium') {
        await usersService.changeRolToUser(user)
        res.status(200).send({
            status: 'success',
            result: `user ${user.first_name} ${user.last_name} changed rol to 'user'`
        })
    } else if (user.rol == 'user') {
        let array = []
        user.documents.forEach(file => file.fieldname && array.push(file.fieldname))
        if(!array.includes('identification') || !array.includes('proofAdress') || !array.includes('accountStatusVoucher')) {
            req.logger.error(`User haven't the needed documents`)
            return res.status(400).send({status: 'error', error: `User haven't the needed documents`})
        }
        await usersService.changeRolToPremium(user)
        res.status(200).send({
            status: 'success',
            result: `user ${user.first_name} ${user.last_name} changed rol to 'premium'`
        })
    } else {
        res.status(400).send({
            status: 'error',
            result: `user's rol isn't premium or user`
        })
    }
    } catch (error) {
        console.log(error)
        req.logger.fatal(error)
        res.status(500).send({status:'error', error: error})
    }

}

export const deleteUsers = (req, res) => {
    try {
        const result = usersService.deleteUsers()
        res.status(200).send({ status: 'success', payload: result })
    } catch (error) {
        req.logger.fatal(error)
        res.status(500).send({status:'error', error: error})
    }
}