const buyBtn = document.getElementById('buy')

const url = window.location.href;
const parts = url.split('/')
const id = parts.pop()

buyBtn.addEventListener('click', () => {
    window.location.href = `/ticket/${id}`
})