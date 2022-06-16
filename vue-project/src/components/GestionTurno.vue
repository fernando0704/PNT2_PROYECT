<template>
  <div>
      <h2>Gestion Turno</h2>
      <li v-for="turno in listaTurnos" :key="turno.codigo"> 
        {{ turno.centro }} {{ turno.fecha}}
        {{ turno.vacuna }} {{ turno.codigo }}
        <button @click="borrarTurno(turno.codigo)">Anular turno</button>
      </li>
      <p>
        Centro <input type="text" v-model="turno.centro">
        Fecha <input type="text" v-model="turno.fecha">
        Vacuna <input type="text" v-model="turno.vacuna">
        Codigo <input type="text" v-model="turno.codigo">
        <button @click="agregarTurno">Agregar Turno</button>
      </p>
      {{ mensajeError }}
  </div>
</template>

<script>
import apiTurno from '../services/apiTurno.js'
export default {
  data() {
    return {
      turno:{centro:"",fecha:'',vacuna:'',codigo:""},
      listaTurnos : [],
      mensajeError : ''
    }
  },
  created: async function () {
      try {        
        const rta = await apiTurno.getListaTurnos();
        this.listaTurnos = rta.data;
      } catch( error ) {
        console.log(error);
        this.mensajeError = 'Se produjo un error en la conexion'
      }
  },
  methods: {
    async agregarTurno() {
      try {        
        const obj = {...this.turno}
        const rta = await apiTurno.setTurno(obj);
        console.log("agregado") 
        console.log(rta);
        this.listaTurnos.push(obj);
      } catch( error ) {
        console.log(error);
        this.mensajeError = 'Se produjo un error en la conexion'
      }
    },
    async borrarTurno(codigo) {
      try {
        console.log("paso1")        
        const rta = await apiTurno.deleteTurno(codigo);
        console.log("paso2") 
        console.log(rta);
        console.log(codigo);
        const listaCodigos = this.listaTurnos.map(e => {return e.codigo} )
        console.log(listaCodigos);
        const indice = listaCodigos.indexOf(codigo);
        console.log(indice);
        this.listaTurnos.splice(indice,1);
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