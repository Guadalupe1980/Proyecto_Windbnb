
import { stayWindbnb } from "./dataApi";
import { showRooms, cardBox } from "./bucleCards";

/*LLAMAMOS EL ID DEL INPUT*/
let searchInput = document.querySelector("#locationInput");

/*LE CREAMOS UN EVENTO AL INPUT*/
searchInput.addEventListener("input", apartmentSearch)


/* CREAMOS LA FUNCION DE BUSQUEDA */

function apartmentSearch(){
    let search = searchInput.value.toLowerCase();
    let filteredRooms = stayWindbnb
    
    filteredRooms = filteredRooms.filter(stay => stay.city.toLowerCase().includes(search))

    cardBox.innerHTML= ""
    showRooms(filteredRooms);
}

apartmentSearch()

/*EXPORTAMOS EL OBJETO AL LLAMADO GLOBAL*/
//export{apartmentSearch, filteredRooms}
