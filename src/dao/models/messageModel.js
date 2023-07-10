// import mongoose from "mongoose";

// const messageCollection = 'message'

// const messageSchema = new mongoose.Schema({
//     username:{
//             type: String,
//         },
//         message: {
//             type: String,
//         },
//         timestamp: {type: Date, default: Date.now}
//     })

// const messageModel = mongoose.model(messageCollection, messageSchema)

// export default messageModel
// const mongoose = require('mongoose');

// const messageCollection = 'message';

// const messageSchema = new mongoose.Schema({
//     username: {
//         type: String,
//     },
//     message: {
//         type: String,
//     },
//     timestamp: {
//         type: Date,
//         default: Date.now
//     }
// });

// const Message = mongoose.model(messageCollection, messageSchema);

// module.exports = Message;

import mongoose from "mongoose";

const messageCollection = 'messages';
const messageSchema = mongoose.Schema({
    username:String, 
    message: String
})

export const messageModel = mongoose.model(messageCollection,messageSchema)