import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import header from './components/Header'
import footer from './components/Footer'



Vue.component('Header', header)
Vue.component('Footer', footer)
Vue.config.productionTip = false

import vueScrollBehavior from 'vue-scroll-behavior'

Vue.use(vueScrollBehavior, { router: router })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
