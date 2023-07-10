import config from '../config/config.js';
let persMode;
const persistance = process.env.PERSISTENCE;
switch (persistance) {
    case "MONGO":
        const {
            default: messageMongo
        } = await import('../dao/dbManagers/chat.js');
        persMode = new messageMongo;

        break;
    case "FILE":
        const {
            default: messageFile
        } = await import('../dao/file/message.file.js');;
        persMode = new messageFile;
    default:
        break;
}

export const getLastService = (quantity) => {
    let messages = [];
    messages = persMode.getLast(quantity);
    return messages;

};

export const postService = (data) => {
    let newMessage = {
        user: data.user,
        message: data.message
    };
    persMode.create(newMessage);
};