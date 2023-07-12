const form = document.getElementById('loginForm')

form.addEventListener('submit', async e => {
    e.preventDefault()

    const datos = {
        email: form[0].value,
        password: form[1].value,
    }

    const respuesta = await fetch('/api/sessions/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    if (respuesta.status === 200) {
        await Swal.fire({
            icon: 'success',
            title: 'Login was succesfully',
        })
        location.href = "/products"
    } else {
        console.log('hola')
        await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid credentials',
        })
        location.href = "/login"
    }
})