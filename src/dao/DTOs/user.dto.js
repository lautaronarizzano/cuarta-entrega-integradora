export default class UserDto {
    constructor(user) {
        this.name = `${user.first_name} ${user.last_name}`
        this.email = user.email
        this.rol = user.rol
        this._id = user._id
    }
}