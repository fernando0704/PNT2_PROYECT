<template>
  <div>
    <h2>Lista para confirmar turnos</h2>
    {{listaTurnos}}
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
