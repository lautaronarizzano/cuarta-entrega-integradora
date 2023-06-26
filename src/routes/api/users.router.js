import Router from 'express'
import { rolHandler, getUsers, getUserById, insertDocuments, deleteUserByEmail } from '../../controllers/users.controller.js'

const router = Router()

router.get('/', getUsers)

router.get('/:uid', getUserById)

router.get('/email/:uemail')

router.get('/premium/:uid', rolHandler)

router.post('/:udi/documents', insertDocuments)

router.delete('/:email', deleteUserByEmail)

export default router