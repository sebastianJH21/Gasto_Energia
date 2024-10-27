import { login } from "../controllers/controllerLogin.js";

let btnLogin = document.getElementById('btnLogin');
if (btnLogin) {
    btnLogin.addEventListener('click', login)
}