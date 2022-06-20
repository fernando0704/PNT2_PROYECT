<template>
  <div>
    <div class="navbar">
      <div v-if="!estaLogeado">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/login">Ingresar</router-link></li>
          <li><router-link to="/centros">Centros</router-link></li>
        </ul>
      </div>
      <div v-if="estaLogeado">
        <ul>
          <li><router-link to="/gestionTurno">Agregar Turnos</router-link></li>
          <li><router-link to="/gestionCentro">Agregar Centro</router-link></li>
          <li>
            <router-link to="/gestionVacuna">Agregar Vacunas</router-link>
          </li>
          <li><router-link to="/logout">Logout</router-link></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { usuarioStore } from "../src/store/usuarioStore.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = usuarioStore();
    const { estaLogeado } = storeToRefs(store);
    return {
      store,
      estaLogeado,
    };
  },
};
</script>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0;
  padding: 1rem;
  font-weight: normal;
  background-color: #95c1e4;
}

.navbar {
  background-color: rgb(20, 18, 54);
  margin-bottom: 0%;
}
.contenido {
  color: rgb(20, 18, 54);
}
.titulo {
  color: rgb(20, 18, 54);
  text-align: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.navbar li {
  float: left;
  border-style: solid;
  border-color: aliceblue;
  border-width: 1px;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
