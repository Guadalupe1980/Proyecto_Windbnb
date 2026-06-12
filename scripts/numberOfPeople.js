
import { showRooms, cardBox } from "./bucleCards";
import { stayWindbnb } from "./dataApi";
import { apartmentSearch, filteredRooms, searchInput } from "./searchCity";

//ID DEL INPUT
let guestsInputMain2 = document.querySelector("#guestsInput");

//ID DE LOS OPERADORES DE ADULTO
let buttonA = document.querySelector("#btnRestaAdls1");
let buttonB = document.querySelector("#btnSumaAdls2");

//ID DE LOS OPERADORES DE NIÑOS
let buttonC = document.querySelector("#btnResChildren1");
let buttonD = document.querySelector("#btnSumaChildren2");
 
//ID DE LOS CONTADORES DE LOS OPERADORES(SPAN)
let textAdults = document.querySelector("#counterAdults");
let textChildren = document.querySelector("#counterChildren"); 

//CONTADOR EN TIEMPO REAL
let countAdults = 0;
let countChildren = 0;

function maxPeopleFilter(){
    let totalGuests = countAdults + countChildren;

    //verificará si llegamos al tope
    if(totalGuests > 0){
        guestsInputMain2.value = `${totalGuests} guests`
    }else {
        guestsInputMain2.value = "Add guests";
    }

    apartmentSearch()

    cardBox.innerHTML = "";
    showRooms(filteredRooms)

}

//CONTROL DE SUMA Y RESTA EN TIEMPO REAL
//BOTON DE RESTAR(ADULTO)
buttonA.addEventListener("click", () => {
    if(countAdults > 0){
        countAdults--;
        textAdults.textContent = countAdults;
        maxPeopleFilter();
    }
});

//BOTON DE SUMAR(ADULTO)
buttonB.addEventListener("click", () => {
    if(countAdults + countChildren < 10){
        countAdults++;
        textAdults.textContent = countAdults;
        maxPeopleFilter();
    }
});

//BOTON DE RESTAR(NIÑO)
buttonC.addEventListener("click", () => {
    if(countChildren > 0){
        countChildren--;
        textChildren.textContent = countChildren;
        maxPeopleFilter();
    }
});

//BOTON DE SUMAR(NIÑO)
buttonD.addEventListener("click", () => {
    if(countChildren + countAdults < 10){
        countChildren++;
        textChildren.textContent = countChildren;
        maxPeopleFilter();
    }
});





