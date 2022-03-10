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
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaGeneral.vue')
  },
  {
    path: '/cotizador',
    name: 'Cotizador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cotizador.vue')
  },
  {
    path: '/cotizador-2',
    name: 'Cotizador-2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cotizador-2.vue')
  },
  {
    path: '/cotizador-3',
    name: 'Cotizador-3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cotizador-3.vue')
  },
  {
    path: '/cotizador-4',
    name: 'Cotizador-4',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cotizador-4.vue')
  },
  {
    path: '/cotizador-5',
    name: 'Cotizador-5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cotizador-5.vue')
  },
  {
    path: '/cotizador-6',
    name: 'Cotizador-6',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cotizador-6.vue')
  },
  {
    path: '/cotizador-7',
    name: 'Cotizador-7',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cotizador-7.vue')
  },
  {
    path: '/cotizador-8',
    name: 'Cotizador-8',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cotizador-8.vue')
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
