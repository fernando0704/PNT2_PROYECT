<template>
  <div>
      <h2>Gestion Vacunas</h2>
      <li v-for="vacuna in listaVacunas" :key="vacuna.codigoVacuna"> 
        {{ vacuna.nombre }}
        {{ vacuna.codigoVacuna }}
        <button @click="borrarVacuna(vacuna.codigoVacuna)">Borrar Vacuna</button>
      </li>
      <p>
        Nombre <input type="text" v-model="vacuna.nombre">
        Codigo <input type="text" v-model="vacuna.codigoVacuna">
        <button @click="agregarVacuna">Agregar Vacuna</button>
      </p>
      {{ mensajeError }}
  </div>
</template>

<script>
import apiVacuna from '../services/apiVacuna.js'
export default {
  data() {
    return {
      vacuna:{nombre:"",codigoVacuna:""},
      listaVacunas : [],
      mensajeError : ''
    }
  },
  created: async function () {
      try {        
        const rta = await apiVacuna.getListaVacunas();
        this.listaVacunas = rta.data;
      } catch( error ) {
        console.log(error);
        this.mensajeError = 'Se produjo un error en la conexion'
      }
  },
  methods: {
    async agregarVacuna() {
      try {        
        const obj = {...this.vacuna}
        const rta = await apiVacuna.setVacuna(obj);
        console.log("agregado") 
        console.log(rta);
        this.listaVacunas.push(obj);
      } catch( error ) {
        console.log(error);
        this.mensajeError = 'Se produjo un error en la conexion'
      }
    },
    async borrarVacuna(codigoVacuna) {
      try {
        console.log("paso1")        
        const rta = await apiVacuna.deleteVacuna(codigoVacuna);
        console.log("paso2") 
        console.log(rta);
        console.log(codigoVacuna);
        const listaCodigosVacunas = this.listaVacunas.map(e => {return e.codigoVacuna} )
        console.log(listaCodigosVacunas);
        const indiceVacunas = listaCodigosVacunas.indexOf(codigoVacuna);
        console.log(indiceVacunas);
        this.listaVacunas.splice(indiceVacunas,1);
      } catch( error ) {
        console.log(error);
        this.mensajeError = 'Se produjo un error en la conexion'
      }
      
    }
  }
}
</script>

<style>

</style>