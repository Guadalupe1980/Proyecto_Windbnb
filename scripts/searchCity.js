
import { stayWindbnb } from "./dataApi";
import { showRooms, cardBox } from "./bucleCards";


/*LLAMAMOS EL ID DEL INPUT*/
let searchInput = document.querySelector("#locationInput");
let staysCounter = document.querySelector("#stays-counter");
let suggestionsBox = document.querySelector("#suggestionsBox");

/*LE CREAMOS UN EVENTO AL INPUT*/
searchInput.addEventListener("input", apartmentSearch)


/*CONTENEDOR GLOBAL*/
let filteredRooms = stayWindbnb

/* CREAMOS LA FUNCION DE BUSQUEDA DE CIUDAD Y PAIS */
function apartmentSearch(){
    let search = searchInput.value.toLowerCase();
    filteredRooms = stayWindbnb;

    //Capturar cuántos adultos y niños hay en ese instante:
    let totalGuests = parseInt(document.querySelector("#counterAdults")?.textContent || 0) + 
                       parseInt(document.querySelector("#counterChildren")?.textContent || 0);

    //Validacion(Ciudad Y Huéspedes):
    filteredRooms = filteredRooms.filter(stay => {
        const fullLocation = `${stay.city}, ${stay.country}`.toLowerCase(); 
        return fullLocation.includes(search) && stay.maxGuests >= totalGuests;
    });

    cardBox.innerHTML= ""
    showRooms(filteredRooms);


    /*Contador en tiempo real de las sugerencias*/
    if(filteredRooms.length > 0){
       staysCounter.textContent = `${filteredRooms.length}+ stays`
    }else{
        staysCounter.textContent = "0";
    }

    // SUGERENCIA. Controlar Dropdown de sugerencias
    if(!search) return suggestionsBox.classList.add("hidden");

    // Extraer ubicaciones únicas ("Ciudad, País") en una sola línea
    const uniqueLocations = Array.from(new Set (filteredRooms.map(uniqueLocs => `${uniqueLocs.city}, ${uniqueLocs.country}`)))

    // 1. Verifica si lo que escribió el usuario coincide exactamente con una ciudad
    const exactMatch = uniqueLocations.some(loc => loc.toLowerCase() === search);
    if (uniqueLocations.length === 0 || exactMatch) {
        return suggestionsBox.classList.add("hidden");
    }

    // Renderizar todas las sugerencias juntas
    suggestionsBox.classList.remove("hidden");
    suggestionsBox.innerHTML = uniqueLocations.map(locs => `
        <div class="suggestion-item flex items-center gap-3 cursor-pointer py-1 text-sm text-gray-600 hover:text-gray-900 transition" data-value="${locs}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-[#eb5757]">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
            </svg>
            <span>${locs}</span>
        </div>
        `).join('');
}

//Delegación de eventos para el click (Escucha el contenedor, no cada hijo)
suggestionsBox.addEventListener("click", (event) => {
  const item = event.target.closest(".suggestion-item");
  if (item) {
    searchInput.value = item.dataset.value;
    suggestionsBox.classList.add("hidden");
    apartmentSearch();
  }
});


apartmentSearch()

/*EXPORTAMOS EL OBJETO AL LLAMADO GLOBAL*/
export{apartmentSearch, filteredRooms, searchInput}
