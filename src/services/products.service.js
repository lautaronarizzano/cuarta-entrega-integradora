import { Products } from "../dao/factory.js"
import ProductsRepository from "../repository/products.repository.js"
import { transporter } from "./mail.service.js"
import { generateDeleteProductMail } from "../utils/customHtml.js"
import config from "../config/config.js"

const products = new Products()
const productsRepository = new ProductsRepository(products)

export const getAll = async () => {
    const products = await productsRepository.getAll()
    return products
}

export const getProductById = async (id) => {
    const product = await productsRepository.getProductById(id)
    return product
}

export const createProduct = async (product) => {
    const result = await productsRepository.createProduct(product)
    return result
}

export const update = async (pid, product) => {
    const result = await productsRepository.updateProduct(pid, product)
    return result
}

export const deleteProduct = async (pid) => {
    const result = await productsRepository.deleteProduct(pid)
    return result
}

export const deleteProductMail = async (user, product) => {
    try {
        const html = await generateDeleteProductMail(user, product)
        const mail = await transporter.sendMail({from:`Ecommerce burguers <${config.fromEmail}>`,
        to: user.email,
        subject: "Product deleted",
        html: html
    })
    return mail
    } catch (error) {
        console.log(error)
    }
}