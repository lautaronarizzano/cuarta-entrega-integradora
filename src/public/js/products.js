const addProductBtn = document.getElementById('addProductBtn')
const prevPageBtn = document.getElementById('prevPageBtn')
const nextPageBtn = document.getElementById('nextPageBtn')
const pageQuantity = document.getElementById('pageQuantity')



const addProductToCart = async (cid, pid) => {
    await fetch(`/api/carts/${cid}/products/${pid}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// const getProducts = async (page) => {
//     const response = await fetch(`/api/getProductsServices?page=${page}`)
//     const data = await response.json()
//     return data
// }

// const getProductsUpdate = async (page) => {
//     const products = await getProducts(page)
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const urlParams = new URLSearchParams(window.location.search)
//     const actualPage = parseInt(urlParams.get('page')) || 1

//     getProductsUpdate(actualPage)
// })
