<template>
  <div>
    <h2>Calendario de Vacunacion</h2>
    {{ listaVacunacion }}
    <button @click="agregar">Agregar turno</button>
    <p>
      Fecha<input type="date" v-model="turno.fecha" /> Centro
      <input type="text" v-model="turno.centro" />
      <!--Poner como lista-->
      Vacuna <input type="text" v-model="turno.vacuna" />
    </p>
  </div>
</template>

<script>
import { useStore } from "../store/storeVacunacion.js";
import { storeToRefs } from "pinia";

console.log("prueba conexion")

export default {
  setup() {
    const store = useStore();
    const { listaVacunacion } = storeToRefs(store);
    return {
      // you can return the whole store instance to use it in the template
      store,
      listaVacunacion,
    };
  },

  data(){
    return{
      turno:{fecha:'',centro:'',vacuna:''}
    }
  },
  methods:{
    agregar(){
      this.store.agregarTurno({...this.turno});
    }
  }
};
</script>

<style></style>
