import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
  
    state: () => {
        return { listaVacunacion: [{id:1,desc:"algo", fecha:"1/1/1"},{id:2,desc:"algo2", fecha:"1/1/1"}] }
    },
  
    // other options...
})