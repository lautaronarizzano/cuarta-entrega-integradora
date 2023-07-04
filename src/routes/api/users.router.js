import Router from 'express'
import { rolHandler, getUsers, getUsersDto, getUserById, insertDocuments, deleteUserByEmail, deleteUsers } from '../../controllers/users.controller.js'
import { cdUpload, uploader } from '../../middlewares/multer.js'
import { authenticateToken, authorizeRol } from '../../utils/utils.js'

const router = Router()

router.get('/', getUsersDto)

router.get('/all', getUsers)

router.get('/:uid', getUserById)

router.get('/email/:uemail')

router.get('/premium/:uid', rolHandler)

router.post('/:uid/documents', cdUpload, insertDocuments)

// router.delete('/',authenticateToken, authorizeRol(['admin']), deleteUsers)
router.delete('/', deleteUsers)

router.delete('/:email', deleteUserByEmail)

export default router