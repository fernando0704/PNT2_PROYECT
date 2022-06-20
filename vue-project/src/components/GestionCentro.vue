<template>
  <div>
      <h2>Gestion de Centros</h2>
      <li v-for="centro in listaCentros" :key="centro.codigoCentro"> 
        {{ centro.nombre }} {{ centro.direccion}}
        {{ centro.codigoCentro }}
        <button @click="borrarCentro(centro.codigoCentro)">Borrar centro</button>
      </li>
      <p>
        Nombre <input type="text" v-model="centro.nombre">
        Direccion <input type="text" v-model="centro.direccion">
        codigoCentro <input type="text" v-model="centro.codigoCentro">
        <button @click="agregarCentro">Agregar Centro</button>
      </p>
      {{ mensajeError }}
  </div>
</template>

<script>
import apiCentro from '../services/apiCentro.js'
export default {
  data() {
    return {
      centro:{nombre:"",direccion:'',codigoCentro:""},
      listaCentros : [],
      mensajeError : ''
    }
  },
  created: async function () {
      try {        
        const rta = await apiCentro.getListaCentros();
        this.listaCentros = rta.data;
      } catch( error ) {
        console.log(error);
        this.mensajeError = 'Se produjo un error en la conexion'
      }
  },
  methods: {
    async agregarCentro() {
      try {        
        const obj = {...this.centro}
        const rta = await apiCentro.setCentro(obj);
        console.log("agregado") 
        console.log(rta);
        this.listaCentros.push(obj);
      } catch( error ) {
        console.log(error);
        this.mensajeError = 'Se produjo un error en la conexion'
      }
    },
    async borrarCentro(codigoCentro) {
      try {
        console.log("paso1")        
        const rta = await apiCentro.deleteCentro(codigoCentro);
        console.log("paso2") 
        console.log(rta);
        console.log(codigoCentro);
        const listaCodigosCentro = this.listaCentros.map(e => {return e.codigoCentro} )
        console.log(listaCodigosCentro);
        const indiceCentro = listaCodigosCentro.indexOf(codigoCentro);
        console.log(indiceCentro);
        this.listaCentros.splice(indiceCentro,1);
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