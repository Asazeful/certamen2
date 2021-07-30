document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let fecha = document.querySelector("#fecha-txt").value.trim();
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value;
    let direccion = document.querySelector("#direccion-txt").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let medida = document.querySelector("#medida-select").value;

    
    hv = validarHoras(hora);
    dv = validarDireccion(direccion);
    fv = validarFecha(fecha);
    vv = validarValor(valor);
    
    if (hv == 1 && dv == 1 && fv == 1 && vv == 1){
        let lectura = {};
        lectura.fecha = fecha;
        lectura.hora = hora;
        lectura.medidor = medidor;
        lectura.direccion = direccion;
        lectura.valor = valor;
        lectura.medida = medida;
        await crearLectura(lectura);
        Swal.fire({
            title: 'Correcto!',
            text: 'Se ha ingresado la lectura',
            imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.cl%2Fpin%2F705305991636056154%2F&psig=AOvVaw1X36djjAJHedfYAWAg0dCH&ust=1627691967068000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCLiAkqDHifICFQAAAAAdAAAAABAD',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Waifu aprobes',
          })
    }else{
        msg_error = "Se han ingresado de forma erronea los lisguientes valores ->";
        if (hv ==0){
            msg_error = msg_error + " |Hora| ";
        }
        if (dv ==0){
            msg_error = msg_error + " |Direccion| ";
        }
        if (fv ==0){
            msg_error = msg_error + " |Fecha| ";
        }
        if (vv ==0){
            msg_error = msg_error + " |Valor| ";
        }
        msg_error = msg_error + ".";
        
        Swal.fire({
            icon: 'error',
            title: 'Vaya...',
            text: msg_error,
          })
    }
});