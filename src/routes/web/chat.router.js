import { Router } from 'express'

const router = Router()


router.get('/', (req, res) => {
    res.render('chat2')
})

export default router