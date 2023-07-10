// const socket = io();

// let user;
// const chatBox = document.querySelector("#chatBox");
// const userName = document.querySelector("#userName");
// chatBox.focus();

// Swal.fire({
//     title: "Identificate",
//     input: "text",
//     text: "Ingresa un nombre de usuario",
//     inputValidator: (value) =>
//         !value && "Necesitas escribir un nombre de usuario",
//     allowOutsideClick: false,
//     allowEscapeKey: false,
// }).then((result) => {
//     user = result.value;
//     userName.innerHTML = user;
//     socket.emit("authenticated", user);
// });

// chatBox.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") {
//         if (chatBox.value.trim().length > 0) {
//             socket.emit("message", {
//                 user,
//                 message: chatBox.value,
//             });
//             chatBox.value = "";
//             chatBox.focus();
//         }
//     }
// });

// socket.on("messageLogs", (data) => {
//     if (!user) return;
//     let log = document.querySelector("#messageLogs");
//     let messages = "";
//     data.forEach((message) => {
//         messages += `
//     <div class="card mb-3">
//     <div class="card-body">
//     <h5 class="card-title">${message.user}</h5>
//     <p class="card-text">${message.message}</p>
//     <p class="card-text text-muted text-end m-0">
//     </div>
// </div>`;
//     });
//     log.innerHTML = messages;
// });

// socket.on("newUserConnected", (data) => {
//     if (!user) return;
//     Swal.fire({
//         toast: true,
//         position: "top-end",
//         showConfirmButton: false,
//         timer: 3000,
//         title: `${data} se ha unido al chat`,
//         icon: "success",
//     });
// });

const socket = io();
const coloresChat =["#C1666B","green","slateblue","#48A9A6","red","blue","aliceblue"]
let user;
let color;

Swal.fire({
    title: "Identificacion",
    input: "text",
    text: "Ingresa tu usuario para identificarte en el chat",
    inputValidator: (value) => {
        return !value && "Necesitas escribir un nombre de usuario"
    },
    allowOutsideClick: false
}).then((result) => {
    user = result.value;
    color =  coloresChat[Math.floor(Math.random() * coloresChat.length)];
    socket.emit("authenticated",user);
});


const chatbox = document.getElementById("chatbox");

chatbox.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        if (chatbox.value.trim().length > 0){
            socket.emit("message",{user , message: chatbox.value})
            chatbox.value = "";
        }
    }
})

const enviar = () => {
    if (chatbox.value.trim().length > 0){
        socket.emit("message",{user , message: chatbox.value})
        chatbox.value = "";
    }
}

socket.on("message_logs", (data) => {
    if(!user){
        return;
    }
    else {
        let log = document.getElementById("messagelogs");
        let messages = "";
        data.forEach(message => {
            if (message.user === user ) {
                messages+= "<em style=color:"+ color + ">"
            }
            else {
                messages+= "<em>"
            }
            messages+=  message.user + " dice: " +  message.message +"</em><br>"
        });
        log.innerHTML = messages;
    }
})

socket.on("new_user_connected", newUser => {
    if (!user) return;
    if (newUser != user) {
    Swal.fire({
        title: `${newUser}`,
        toast: true,
        icon:"success",
        text: `${newUser} se ha unido al chat.`,
        position:"top-end",
        showConfirmButton: false,
        timer:3000
    })
}
})
