
import { apartmentSearch, filteredRooms, searchInput } from "./searchCity";

/*INTERACCION CON EL MENU PRINCIPAL*/
/* MANDAMOS A LLAMAR EL ID DE LAS VARIABLES A USAR*/
const mainAction = document.querySelector("#mainAction");
let guestsInput = document.querySelector("#guestsInput");
let btnSearch = document.querySelector("#btn-search");


function actionMain(){
    mainAction.classList.toggle("hidden")
}

/*SE CREA UN EVENTO DE INTERACCION CON EL MENU*/
searchInput.addEventListener("click", actionMain);
guestsInput.addEventListener("click", actionMain);
btnSearch.addEventListener("click", actionMain);


