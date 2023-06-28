import Router from 'express'
import { rolHandler, getUsers, getUserById, insertDocuments, deleteUserByEmail } from '../../controllers/users.controller.js'
import { cdUpload, uploader } from '../../middlewares/multer.js'
// import { cdUpload } from '../../utils/utils.js'

const router = Router()

router.get('/', getUsers)

router.get('/:uid', getUserById)

router.get('/email/:uemail')

router.get('/premium/:uid', rolHandler)

router.post('/:uid/documents', cdUpload, insertDocuments)

// router.post('/prueba', uploader.single('file'), (req, res) => {
//     try {
//         const file = req.file
//     if(!file) return res.send({status: 'error'})
//     const user = req.body
//     user.profile = req.file.path
//     res.send({status: 'success', paylaod: user})
//     } catch (error) {
//         console.log(error)
//         res.send(error)
//     }
// })

router.delete('/:email', deleteUserByEmail)

export default router