

import {createRouter,createWebHashHistory} from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'
import Centros from '../components/Centros.vue'
import Centro from '../components/Centro.vue'
import ConfirmarTurno from '../components/ConfirmarTurno.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'
import Usuario from '../components/Usuario.vue'
import GestionTurno from '../components/GestionTurno.vue'




//const Home = { template: '<div>Home</div>' }
//const About = { template: '<div>About</div>' }


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/centros', component: Centros },
  { path: '/centro', component: Centro },
  { path: '/gestionturno', component: GestionTurno , meta: {requiresAuth:true}},
  { path: '/confirmarturno', component: ConfirmarTurno , meta: {requiresAuth:true}},
  { path: '/:pathmatch(.*)*', component: NotFound },
  { path: '/login', component: Login },
  //{ path: '/usuario/:id', component: Usuario  , meta: {requiresAuth:true}},
  { path: '/usuario', component: Usuario  , meta: {requiresAuth:true}},
  { path: '/logout', component: Logout  , meta: {requiresAuth:true}},


]




const router = createRouter({
  
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(  (to, from, next) => {

  const login = localStorage.getItem('usuario')
  const obj = JSON.parse(login)

  if( to.matched.some(record => record.meta.requiresAuth ) && !login ) {
      next('/')
  } else {
      next()
  }

})

export default router;