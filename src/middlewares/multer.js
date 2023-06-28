import multer from 'multer'
import __mainDirname from '../utils/utils.js'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        switch (file.fieldname) {
            case 'profile':
                cb(null, `${__mainDirname}/public/img/profile`)
                break
            case 'products':
                cb(null, `${__mainDirname}/public/img/products`)
                break
            case 'documents':
                cb(null, `${__mainDirname}/public/img/documents`)
                break
            case 'identification':
                cb(null, `${__mainDirname}/public/img/documents/identification`)
                break
            case 'proofAdress':
                cb(null, `${__mainDirname}/public/img/documents/proofAdress`)
                break
            case 'accountStatusVoucher':
                cb(null, `${__mainDirname}/public/img/documents/accountStatusVoucher`)
                break
            default:
                req.logger.error('Invalid key')
                break
        }
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

export const uploader = multer({
    storage,
    onError: (err, next) => {
        console.log(err)
        next()
    }
})


export const cdUpload = uploader.fields([{
        name: 'profile',
        maxCount: 1
    }, {
        name: 'products',
        maxCount: 7
    }, {
        name: 'documents'
    },
    {
        name: 'identification'
    },
    {
        name: 'proofAdress'
    },
    {
        name: 'accountStatusVoucher'
    }
])