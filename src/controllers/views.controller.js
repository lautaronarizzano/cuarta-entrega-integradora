import { productModel } from '../dao/models/productModel.js'
import UserDto from '../dao/DTOs/current.dto.js'
import * as usersServices from '../services/users.service.js'
import * as cartsServcies from '../services/carts.service.js'


const register = async (req, res) => {
    res.render('register')
}

const login = async (req, res) => {
    res.render('login')
}

const resetPassword = async (req, res) => {
    res.render('resetPassword')
}

const changePassword = async (req, res) => {
    res.render('changePassword')
}

const products = async (req, res) => {
    const { limit = 10, page = 1, query , sort } = req.query
    
    try {        
        const userDto = new UserDto(req.user.user)

        if (query == undefined || query == '') {
            const productsPaginates = await productModel.paginate({ }, {limit: limit, page: page, sort:{ price: sort}, lean:true})
            res.render('products', {productsPaginates, user: req.user.user, query: query})
            
        } else {
            if(query == "comida" || query == "bebida" || query == "complemento") {
                const productsPaginates = await productModel.paginate({ category: query }, {limit: limit, page: page, sort:{ price: sort}, lean:true})
            res.render('products', {productsPaginates, user: req.user.user, query: query})
            }
            else if(query == "true" || query == "false"){
                const productsPaginates = await productModel.paginate({ status: query }, {limit: limit, page: page, sort:{ price: sort}, lean:true})
            res.render('products', {productsPaginates, user: req.user.user, query: query})
            }
            else{
                req.logger.error('query is not valid')
                res.send({status: error, payload: 'query is not valid'})
            }
        }

    } catch (error) {
        req.logger.fatal(error)
        res.status(500).send({ error })
    }
}

const carts = async (req, res) => {
    const {cid} = req.params;
    try {
        let cartProm = await cartsServcies.getByIdPopulated(cid); 
    const cartArray = cartProm.products; 
    const cartProducts = cartArray.map(function(productObj){
        // validarUrlIndividual(productObj.product);
        return productObj = {title:productObj.product.title, description:productObj.product.description,
            code:productObj.product.code, quantity:productObj.quantity, price:productObj.product.price, stock:productObj.product.stock,category:productObj.product.category,thumbnail:productObj.product.thumbnail, _id:productObj.product._id}
    })
    res.render('carts',{cart: cartProducts})
    } catch (error) {
        console.log(error)
        req.logger.fatal(error)
        res.status(500).send({ error })
    }

}

const users = async (req, res) => {
    try {
        const users = await usersServices.getAllDto()
        res.render('users', {users: users})
    } catch (error) {
        req.logger.fatal(error)
        res.status(500).send({ error })
    }
}

const payment = async (req, res) => {
    try {
        res.render('payment')
    } catch (error) {
        req.logger.fatal(error)
        res.status(500).send({ error })
    }
}

const ticket = async (req, res) => {
    const cid = req.params.cid
    try {
        const ticket = await cartsServcies.purchaseCart(cid)
        console.log(ticket)
        res.render('ticket', ticket)
    } catch (error) {
        req.logger.fatal(error)
        res.status(500).send({ error })
    }
}


export{
    register,
    login,
    products,
    carts,
    resetPassword,
    changePassword,
    users,
    payment,
    ticket
}