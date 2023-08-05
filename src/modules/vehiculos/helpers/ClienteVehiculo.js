


export const obtenerVehiculoFachada= async(placa)=>{
    console.log("Obtener Vehiculo")
    return await obtenerVehiculoAPI(placa);
}




export const obtenerVehiculoAPI = async (placa) => {
    const data = await fetch(`http://localhost:8080/API/v1.0/Inventario/vehiculos/${placa}`).then(r => r.json());
    console.log(data);
    return data;
}

export const obtenerVehiculosAPI = async () => {
    const data = await fetch(`http://localhost:8080/API/v1.0/Inventario/vehiculos`).then(r => r.json());
    console.log(data);
    return data;
}
