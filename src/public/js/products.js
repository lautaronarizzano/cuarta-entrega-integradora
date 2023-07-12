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
    }).then(response => {
        if (response.status == 200) {
            Swal.fire({
                icon: 'success',
                text: 'Product added to cart',
                toast: true,
                position: 'bottom-right',
                timer: 2000,
                timerProgressBar: true
            })
        }
    })
}
