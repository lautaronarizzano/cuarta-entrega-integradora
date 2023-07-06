import { Router } from 'express'
import { authorizeRol, authenticateToken } from '../../utils/utils.js'

const router = Router()

router.get('/', (req, res) => {
    res.render('chat2')
})
// router.get('/', authenticateToken, authorizeRol('user'), (req, res) => {
//     res.render('index')
// })

export default router;