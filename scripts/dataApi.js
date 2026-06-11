
 /*CONSUMIENDO API*/
async function bringStays() {
    try {
        let response = await fetch("/stays.json");
        let data = await response.json();
        return data;
    }catch(error){
        console.log("Algo salio mal en el consumo de la API", error);
    }
    
}

let stayWindbnb = await bringStays();


/*EXPORTAMOS EL OBJETO AL LLAMADO GLOBAL*/
export{stayWindbnb}
