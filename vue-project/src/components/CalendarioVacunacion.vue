<template>
  <div>
    <h2>Calendario de Vacunacion</h2>
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
      // you can return the whole store instance to use it in the template
      store,
      listaVacunacion,
    };
  },
};
</script>

<style></style>
