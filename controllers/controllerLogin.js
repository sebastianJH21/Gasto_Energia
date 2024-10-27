import { users } from "../models/modelLogin.js";

export function login() {
    let loginUser = document.getElementById('user').value
    let loginPassword = document.getElementById('password').value
    if (users.find(user => user.user === loginUser) ) {
        if (users.find(user => user.password === loginPassword)) { 
            window.location.href = './views/home.html'
        } else {
            alert("Contraseña Incorrecto")
        }
    } else {
        alert("Usario Incorrecto")
    }
}
