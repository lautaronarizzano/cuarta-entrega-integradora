import UserDto from "../dao/DTOs/user.dto.js"

export default class UsersRepository {
    constructor(dao) {
        this.dao = dao
    }

    getAllDto = async () => {
        const users = await this.dao.getAll()
        const result = users.map(user => new UserDto(user))
        return result
    }

    getAll = async () => {
        const result = await this.dao.getAll()
        return result
    }

    getAllPaginated = async () => {
        const result = await this.dao.getAllPaginated()
        return result
    }

    save = async (product) => {
        const result = await this.dao.save(product)
        return result
    }

    getById = async (uid) => {
        const result = await this.dao.getById(uid)
        return result
    }

    getByEmail = async (email) => {
        const result = await this.dao.getByEmail(email)
        return result
    }

    updateById = async (id, user) => {
        const result = await this.dao.updateById(id, user)
        return result
    }

    saveNewPassword = async (newUser) => {
        const result = await this.dao.saveNewPassword(newUser)
        return result
    }

    delete = async (email) => {
        const result = await this.dao.delete(email)
        return result
    }

}