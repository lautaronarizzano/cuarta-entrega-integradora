const addProductBtn = document.getElementById('addProductBtn')


const addProductToCart = async (cid, pid) => {
    await fetch(`/api/carts/${cid}/products/${pid}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}