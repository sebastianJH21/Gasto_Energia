import { login } from "../controllers/controllerLogin.js";
import { singOut } from "../controllers/controllerLogin.js";
import { captureEnergyConsumption } from "../controllers/controllerHome.js";


let btnLogin = document.getElementById('btnLogin');
if (btnLogin) {
    btnLogin.addEventListener('click', login)
}
let btnConsumption = document.getElementById('btnCalculate');
if (btnConsumption) {
    btnConsumption.addEventListener('click', captureEnergyConsumption)
}
let btnSingOut = document.getElementById('btnSingOut');
if (btnSingOut) {
    btnSingOut.addEventListener('click', singOut)
}