/*IMPORTAMOS LAS CLASES A USAR*/
import {stayWindbnb} from "./dataApi";

/*LLAMAMOS EL ID DEL SECTION*/
let cardBox = document.querySelector("#CardsContainer");

function showRooms(groupOfStays) {
  for (let i = 0; i < groupOfStays.length; i++) {

    // verificamos si el dato es true
    let superHostBadge = "";
    if (groupOfStays[i].superHost) {
      superHostBadge = `<span class="border border-gray-700 text-gray-700 text-xs font-bold px-2 py-1 rounded-full uppercase mr-2">Superhost</span>`;
    }

    let bedsText = groupOfStays[i].beds ? `. ${groupOfStays[i].beds} beds` : "";

    cardBox.innerHTML += `
        <article class="flex flex-col mb-8">
            <img src="${groupOfStays[i].photo}" alt="Estancia en ${groupOfStays[i].city}" class="rounded-4xl w-full object-cover aspect-4/3">
        
            <div class="flex justify-between items-center mt-3 px-1">
            <p class="text-md font-semibold text-[#82888a] flex items-center">
            ${superHostBadge} 
            <span>${groupOfStays[i].type} ${bedsText}</span>
            </p>

            <div class="flex items-center gap-1 text-gray-700 text-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current text-[#EB5757]">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>

            <span class="font-medium">${groupOfStays[i].rating}</span>
            </div>
            </div>
            
            <h2 class="font-semibold text-gray-800 text-xl tracking-tight mt-1 px-1">${groupOfStays[i].title}</h2>
        </article>
        `;
  }
}

/*EXPORTAMOS EL OBJETO AL LLAMADO GLOBAL*/
export{showRooms, cardBox}
