<template>
  <div>
    <h2>Lista para confirmar turnos</h2>
    {{ listaVacunacion }}
  </div>
</template>

<script>
import { useStore } from "../store/storeVacunacion.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useStore();
    const { listaVacunacion } = storeToRefs(store);
    return {
      store,
      listaVacunacion,
    };
  },
};
</script>

<style></style>
