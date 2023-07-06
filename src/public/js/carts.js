const totalPrice = document.getElementById('totalPrice')
const buyCartBtn = document.getElementById('buyCart')
const backBtn = document.getElementById('backBtn')

const url = window.location.href;
const parts = url.split('/')
const id = parts.pop()

const showAmount = (id) => {
    return fetch(`/api/carts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        return result.json()
    }).then(data => {
        const products = data.payload.products
        let total = 0
        for (let k = 0; k < products.length; k++) {
            const product = products[k].product
            const quantity = products[k].quantity;
            const subtotal = product.price * quantity;
            total += subtotal;
        }
        return total
    })
}
const deleteProduct = async (pid) => {
    await fetch(`/api/carts/${id}/products/${pid}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(setTimeout(() => {
        window.location.reload()
    }, '1000'))
}
showAmount(id)
.then(total => {
    totalPrice.innerHTML = `$${total}`
})

buyCartBtn.addEventListener('click', () => {
    window.location.href = `/payment/${id}`
})

backBtn.addEventListener('click', () => {
    window.location.href = `/products`
})
