const usersContainer = document.getElementById('usersContainer')
const changeRolBtn = document.getElementById('changeRol')
const deleteUserBtn = document.getElementById('deleteUser')

const changeRolFunction = (id) => {
    fetch(`/api/users/premium/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(result => {
        if(result.status == 200) {
            window.location.replace('/users')
        }
    })
}

const deleteUserFunction = (email) => {
    fetch(`/api/users/${email}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        if(result.status == 200) {
            window.location.replace('/users')
        }
    })
}