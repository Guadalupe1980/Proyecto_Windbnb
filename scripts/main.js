
import { apartmentSearch, filteredRooms, searchInput } from "./searchCity";

/*INTERACCION CON EL MENU PRINCIPAL*/
/* MANDAMOS A LLAMAR EL ID DE LOS PRIMEROS ELEMENTOS DEL MENU*/
const mainAction = document.querySelector("#mainAction");
let mainLocationP = document.querySelector("#mainLocationP");
let mainGuestP = document.querySelector("#mainGuestP");
let mainButtonP = document.querySelector("#mainButtonP");
let mainXs = document.querySelector("#mainXs");
let btnsearchS = document.querySelector("#btn-searchS");


function actionMain(){
    mainAction.classList.toggle("hidden")
}


/*SE CREA UN EVENTO DE INTERACCION DE CADA UNA DE LAS VARIABLES DEL MENU*/
mainLocationP.addEventListener("click", actionMain);
mainGuestP.addEventListener("click", actionMain);
mainButtonP.addEventListener("click", actionMain);
mainXs.addEventListener("click", actionMain);
btnsearchS.addEventListener("click", actionMain);

