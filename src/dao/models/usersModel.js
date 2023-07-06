import mongoose from 'mongoose'

const userCollection = 'users'

const userSchema = new mongoose.Schema({
    first_name: {
        type:String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
    },
    password: {
        type: String,
        required:true
    },
    carts: {
        type: [
            {
                cart: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'carts'
                }
            }
        ],
        default: []
    },
    rol: {
        type: String,
        required: true,
        default: 'user'
    },
    documents: [
        {
            name: {
                type: String,
            },
            fieldname: {
                type: String
            },
            reference: {
                type: String
            }
        }
    ],
    last_connection: {
        type: String
    }
})


userSchema.pre('find', function() {
    this.populate('carts.cart')
})

const usersModel = mongoose.model(userCollection, userSchema)

export default usersModel