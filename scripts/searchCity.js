
import { stayWindbnb } from "./dataApi";
import { showRooms, cardBox } from "./bucleCards";

/*LLAMAMOS EL ID DEL INPUT*/
let searchInput = document.querySelector("#locationInput");
let staysCounter = document.querySelector("#stays-counter");

/*LE CREAMOS UN EVENTO AL INPUT*/
searchInput.addEventListener("input", apartmentSearch)


/*CONTENEDOR GLOBAL*/
let filteredRooms = stayWindbnb

/* CREAMOS LA FUNCION DE BUSQUEDA */
function apartmentSearch(){
    let search = searchInput.value.toLowerCase();
    filteredRooms = stayWindbnb;

    filteredRooms = filteredRooms.filter(stay => stay.city.toLowerCase().includes(search))

    cardBox.innerHTML= ""
    showRooms(filteredRooms);

    if(filteredRooms.length > 0){
       staysCounter.textContent = `${filteredRooms.length}+ stays`
    }else{
        staysCounter.textContent = "0";
    }
}

apartmentSearch()

/*EXPORTAMOS EL OBJETO AL LLAMADO GLOBAL*/
export{apartmentSearch, filteredRooms}
