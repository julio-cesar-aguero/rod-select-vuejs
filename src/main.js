import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Cabecera from './components/Cabecera'
import PieDePagina from './components/PieDePagina'



Vue.component('Cabecera', Cabecera)
Vue.component('PieDePagina', PieDePagina)
Vue.config.productionTip = false

import vueScrollBehavior from 'vue-scroll-behavior'

Vue.use(vueScrollBehavior, { router: router })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
