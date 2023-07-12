import {
    Router
} from 'express'
import {
    generateProduct
} from '../../utils/utils.js'


const router = Router()

router.get('/', async (req, res) => {
    let users = []
    for (let i = 0; i < 100; i++) {
        users.push(generateProduct())
    }

    res.send({
        count: users.length,
        data: users
    })
})


export default router