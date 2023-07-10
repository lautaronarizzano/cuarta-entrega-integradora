import Router from 'express'
import { rolHandler, getUsers, getUsersDto, getUserById, insertDocuments, deleteUserByEmail, deleteUsers } from '../../controllers/users.controller.js'
import { cdUpload, uploader } from '../../middlewares/multer.js'
import { authenticateToken, authorizeRol } from '../../utils/utils.js'

const router = Router()

router.get('/', getUsersDto)

router.get('/all', authenticateToken, authorizeRol(['admin']), getUsers)

router.get('/:uid', authenticateToken, authorizeRol(['admin']), getUserById)

router.get('/premium/:uid', authenticateToken, authorizeRol(['admin']), rolHandler)

router.post('/:uid/documents', cdUpload, insertDocuments)

router.delete('/',authenticateToken, authorizeRol(['admin']), deleteUsers)

router.delete('/:email', authenticateToken, deleteUserByEmail)

export default router