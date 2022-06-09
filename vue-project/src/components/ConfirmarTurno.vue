<template>
  <div>
    <h2>Lista para confirmar turnos</h2>
    {{ listaTurnos }}
  </div>
</template>

<script>
import { useStore } from "../store/storeTurnos.js";
import { storeToRefs } from "pinia";

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
