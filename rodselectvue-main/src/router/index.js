import Vue from 'vue'
import VueRouter from 'vue-router'

function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/VistaGeneral.vue')
  },
  {
    path: '/cotizador',
    name: 'Cotizador',
    component: () => import('../views/Cotizador.vue')
  },
  {
    path: '/cotizador-2',
    name: 'Cotizador-2',
    component: () => import('../views/Cotizador-2.vue')
  },
  {
    path: '/cotizador-3',
    name: 'Cotizador-3',
    component: () => import('../views/Cotizador-3.vue')
  },
  {
    path: '/cotizador-4',
    name: 'Cotizador-4',
    component: () => import('../views/Cotizador-4.vue')
  },
  {
    path: '/cotizador-5',
    name: 'Cotizador-5',
    component: () => import('../views/Cotizador-5.vue')
  },
  {
    path: '/cotizador-6',
    name: 'Cotizador-6',
    component: () => import('../views/Cotizador-6.vue')
  },
  {
    path: '/cotizador-7',
    name: 'Cotizador-7',
    
    component: () => import('../views/Cotizador-7.vue')
  },
  {
    path: '/cotizador-8',
    name: 'Cotizador-8',
    component: () => import('../views/Cotizador-8.vue')
  },
  {
    path: '*',
    redirect:{
      name:'Home'
    }
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return{ left: 100, top: 100}
  }
  
})

export default router
