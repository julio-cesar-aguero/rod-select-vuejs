import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // informacion general
    immersiveMode : true,
    emailCorporativo: 'Michi'
  },
  mutations: {
    // modificadores de estado
    addEmail( state, payload ) {
      console.log("Payload-2"+payload)
      state.emailCorporativo = payload
    }
  },
  actions: {
    // llamado a las mutaciones 
    addEmailAction( { commit } ,payload){
      console.log("Payload-1"+payload)
      commit('addEmail',payload)
    }
  },
  getters:{
    getEmail(state){
      return state.emailCorporativo
    }
  }
  ,
  modules: {
    // modulos 
  }
})
