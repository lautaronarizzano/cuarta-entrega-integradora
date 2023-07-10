// import {
//     Router
// } from 'express'
// import {
//     authorizeRol,
//     authenticateToken
// } from '../../utils/utils.js'
// import Message from '../../dao/models/messageModel.js';

// const router = Router()

// router.get('/messages', (req, res) => {
//     Message.find({}, (err, messages) => {
//         if (err) {
//             console.error('Error al obtener los mensajes:', err);
//         } else {
//             res.json(messages);
//         }
//     });
// });


// router.get('/', (req, res) => {
//     res.render('chat')
// })
// // router.get('/', authenticateToken, authorizeRol('user'), (req, res) => {
// //     res.render('index')
// // })

// export default router;

import { Router } from 'express'
// import messageManager from '../../controllers/chat.controller'

const router = Router()

// const messageManager = new messageManager()

router.get('/', (req, res) => {
    res.render('chat')
})

export default router