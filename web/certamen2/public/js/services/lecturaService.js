const crearLectura = async (lectura)=>{ 
    let resp = await axios.post("api/lectura/post", lectura, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return resp.data;
};

const eliminarLectura = async(id)=>{
    try{
        let resp = await axios.post("api/lecturas/delete", {id}, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
    
};

const getLecturas = async()=>{
    let resp = await axios.get("api/lecturas/get");
    return resp.data;
};