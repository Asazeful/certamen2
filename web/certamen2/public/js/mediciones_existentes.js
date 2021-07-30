
const iniciarEliminacion = async function(){
    let id = this.idLectura;
    let resp = await Swal.fire({title:"Esta seguro?", text:"Esta operacion es irreversible"
    , icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarLectura(id)){
            let consolas = await getLecturas();
            cargarLecturas(consolas);
            Swal.fire({
                icon: 'success',
                title: 'Lectura eliminada',
                text: 'Todo correcto',
              })
        }else {
        
            Swal.fire("Error", "Algo salió mal", "error");
        }
    } else {
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
};


const cargarLecturas = (lecturas)=>{
    let tbody = document.querySelector("#tbody-consola");
    tbody.innerHTML = "";
    for(let i=0; i < lecturas.length; ++i){
        let tr = document.createElement("tr");

        let tdFecha = document.createElement("td");
        tdFecha.innerText = lecturas[i].fecha;
        let tdHora = document.createElement("td");
        tdHora.innerText = lecturas[i].hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText  = lecturas[i].medidor;
        //
        let tdValor = document.createElement("td");
        if (lecturas[i].medida == "KiloWatts"){
            tdValor.innerText  = (lecturas[i].valor+" KW");}
        if (lecturas[i].medida == "Watts"){
            tdValor.innerText  = (lecturas[i].valor+" W");}
        if (lecturas[i].medida == "Temperatura"){
            tdValor.innerText  = (lecturas[i].valor+" C");}
            if (lecturas[i].valor > 60){
                tdValor.innerText.classList.add("fas", "fa-fire", "text-danger","fa-3x")
            }
        //
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText= "Descartar lectura";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idLecturas = lecturas[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        //5. Agregar los td al tr
        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdAcciones);
        //6. Agregar el tr al cuerpo de la tabla
        tbody.appendChild(tr);
    }

};

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let lecturas = await getLecturas(filtro);
    cargarTabla(lecturas);
});