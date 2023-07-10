// import {messageModel} from '../dao/models/messageModel.js'

import {
    postService,
    getLastService
} from "../services/chat.service.js"

export default class messageManager {
    constructor() {

    }

    getLast5 = () => {
        let messages = getLastService(5);
        return messages;

    }

    post = (data) => {
        postService(data);
    }


}


// export const getAll = async () => {
//     try {
//         const messages = await messageModel.find()
//         return messages.map( (message) => message.toObject() )
//     } catch (error) {
//         // req.logger.fatal(error)
//         console.log(error)
//     }
// }

// export const addMessage = async (user, message) => {
//     try {
//         const result = await messageModel.create({user, message})
//         return result
//     } catch (error) {
//         // req.logger.fatal(error)
//         console.log(error)
//     }
// }

// export default class Messages {
//     constructor() {
//         console.log("Working messages with DB in mongoDB")
//     }

//     getAll = async () => {
//         try {
//             const messages = await messageModel.find()
//             return messages.map( (message) => message.toObject() )
//         } catch (error) {
//             req.logger.fatal(error)
//         }
//     }

//     addMessage = async (user, message) => {
//         try {
//             const result = await messageModel.create({ user, message })
//             return result
//         } catch (error) {
//             req.logger.fatal(error)
//         }
//     }
// }