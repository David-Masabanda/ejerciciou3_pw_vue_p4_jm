<template>
    <div class="Tabla">
        <th>
            <td >Id: {this.id}</td>
            <td>Placa {this.placa}</td>
            <td>Marca {this.marca}</td>
            <td>Modelo {this.modelo}</td>
            <td>Pais {this.pais}</td>
            <button>Visualizar</button>
        </th>

    </div>
  
</template>

<script>
import { obtenerVehiculoFachada,obtenerVehiculosFachada } from "../helpers/ClienteVehiculo"
export default {
  data() {
    return {
      id: null,
      placa: null,
      marca: null,
      modelo: null,
      pais: null
    };
  },

  methods: {
    async consultarVehiculos() {
      const data=await obtenerVehiculoFachada(this.placa);
      this.id=data.id;
      this.placa=data.placa;
      this.marca=data.marca;
      this.pais=data.pais;
      console.log(data);
    },


  },

}
</script>

<style>

</style>