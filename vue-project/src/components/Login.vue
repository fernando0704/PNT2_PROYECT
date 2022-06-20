<template>
  <div>
    <h2>Ingresar</h2>
    <form @submit.prevent="login">
      Email <input type="text" v-model="usuario.email" /> Contraseña
      <input type="text" v-model="usuario.password" />
      <button type="submit">Ingresar</button>
      {{ mensajeDeError }}
    </form>
  </div>
</template>

<script>
import { usuarioStore } from "../store/usuarioStore.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = usuarioStore();
    const { estaLogeado } = storeToRefs(store);
    const { registerUser } = store;
    return {
      store,
      registerUser,
      estaLogeado,
    };
  },
  data() {
    return {
      usuario: { email: "", password: "" },
      mensajeDeError: "",
    };
  },
  methods: {
    async login() {
      try {
        await this.registerUser({ ...this.usuario });
        if (this.estaLogeado) {
          this.$router.push("/usuario");
        } else {
          this.mensajeDeError = "Usuario o password inconrrecto";
        }
      } catch (e) {
        this.mensajeDeError = "Se produjo un error";
      }
    },
  },
};
</script>

<style></style>
