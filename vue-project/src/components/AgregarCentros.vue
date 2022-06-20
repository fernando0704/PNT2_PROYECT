<template>
  <div>
    <h2>Agregar Centros</h2>

    <p v-for="centro in listaCentros" :key="centro.codigo">
      {{ centro.nombre }} {{ centro.direccion }}
      {{ centro.codigo }}
      <button @click="borrarCentro(centro.codigo)">Borrar Centro</button>
    </p>

    <p>
      Nombre <input type="text" v-model="centro.nombre" /> Direccion
      <input type="text" v-model="centro.direccion" /> Codigo
      <input type="text" v-model="centro.codigo" />
      <button @click="agregarCentro">Agregar Centro</button>
    </p>
    {{ mensajeError }}
  </div>
</template>

<script>
import apiCentro from "../services/apiCentro.js";
export default {
  data() {
    return {
      centro: { direccion: "", nombre: "", codigo: "" },
      listaCentros: [],
      mensajeError: "",
    };
  },
  created: async function () {
    try {
      const rta = await apiCentro.getListaCentros();
      this.listaCentros = rta.data;
    } catch (error) {
      console.log(error);
      this.mensajeError = "Se produjo un error en la conexion";
    }
  },
  methods: {
    async agregarCentro() {
      try {
        const obj = { ...this.centro };
        const rta = await apiCentro.setcentro(obj);
        console.log(rta);
        this.listaCentros.push(obj);
      } catch (error) {
        console.log(error);
        this.mensajeError = "Se produjo un error en la conexion";
      }
    },
    async borrarCentro(codigo) {
      try {
        const rta = await apiCentro.deleteCentro(codigo);
        console.log(rta);
        console.log(codigo);
        const listaCodigos = this.lista.map((e) => {
          return e.codigo;
        });
        console.log(listaCodigos);
        const indice = listaCodigos.indexOf(codigo);
        console.log(indice);
        this.lista.splice(indice, 1);
      } catch (error) {
        console.log(error);
        this.mensajeError = "Se produjo un error en la conexion";
      }
    },
  },
};
</script>

<style></style>
