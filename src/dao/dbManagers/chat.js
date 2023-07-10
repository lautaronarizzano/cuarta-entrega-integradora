// import messageModel from '../models/messageModel.js'

// export default class Message{
//     constructor() {
//         console.log('working messages with DB on mongoDB')
//     }

//     getAll = async () => {
//         const messages = await messageModel.find()
//         return messages
//     }
//     addMessage = async (user, message) => {
//         const result = await messageModel.create({user, message})
//         return result
//     }
// }
import {
    messageModel
} from "../models/messageModel.js";

export const getLast = (limit) => {
    let messages = messageModel.find().limit(limit).sort({
        "_id": -1
    });
    return messages;

}

export const create = (newMessage) => {
    messageModel.create(newMessage);
}

export default class Message {
    constructor() {

    }

    getLast = (limit) => {
        let messages = messageModel.find().limit(limit).sort({
            "_id": -1
        });
        return messages;

    }

    create = (newMessage) => {
        messageModel.create(newMessage);
    }
}