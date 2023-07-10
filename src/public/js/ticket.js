const ticket = document.getElementById('ticket')
const backBtn = document.getElementById('backBtn')

// const url = window.location.href;
// const parts = url.split('/')
// const id = parts.pop()

// fetch(`/api/carts/${id}/purchase`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(result => result.json())
// .then(data => {
//     ticket.innerHTML = `
//     <h2>Thanks you for your purchase</h2>
//         <div>
//             <h3>Ticket</h3>
//             <p>amount: ${data.payload.amount}</p>
//             <p>purchase datetime: ${data.payload.purchase_datetime}</p>
//             <p>id of purchase: ${data.payload._id}</p>
//         </div>
//     `
// })

backBtn.addEventListener('click', () => {
    window.location.href = `/products`
})