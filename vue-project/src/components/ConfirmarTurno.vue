<template>
  <div>
    <h2>Lista para confirmar turnos</h2>
    {{store}}
    {{listaTurnos}}
    <li v-for="turno in listaTurnos" :key="turno.codigo"> 
        {{ turno.centro }} {{ turno.fecha}}
        {{ turno.vacuna }} {{ turno.codigo }}
        <button @click="borrarTurno(turno.codigo)">Anular turno</button>
      </li>
  </div>
</template>

<script>
import { useStore } from "../store/storeTurnos.js";
import { storeToRefs } from "pinia";

//no muestra los turnos para confirma, es necesario esta pagina? podriamops borrarla
//averiguemos como funciona pinia
export default {

  setup() {
    const store = useStore();
    const { listaTurnos } = storeToRefs(store);
    return {
      store,
      listaTurnos,
    };
  },
};
</script>

<style></style>
