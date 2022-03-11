import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // informacion general
    immersiveMode : true,
    emailCorporativo: ''
  },
  mutations: {
    // modificadores de estado
    addEmail( state ) {
      state.emailCorporativo = state
    }
  },
  actions: {
    // llamado a las mutaciones 
  },
  modules: {
    // modulos 
  }
})
