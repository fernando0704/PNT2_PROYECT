

import {createRouter,createWebHashHistory} from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import NotFound from '../components/NotFound.vue'
import Centros from '../components/Centros.vue'
import CalendarioVacunacion from '../components/CalendarioVacunacion.vue'
import ConfirmarTurno from '../components/ConfirmarTurno.vue'



//const Home = { template: '<div>Home</div>' }
//const About = { template: '<div>About</div>' }


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/centros', component: Centros },
  { path: '/calendarioVacunacion', component: CalendarioVacunacion },
  { path: '/confirmarTurno', component: ConfirmarTurno },
  { path: '/:pathMatch(.*)*', component: NotFound },
]




const router = createRouter({
  
  history: createWebHashHistory(),
  routes,
})

export default router;