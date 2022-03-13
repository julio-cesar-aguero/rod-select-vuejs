import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // informacion general
    immersiveMode : false,
    emailCorporativo: 'Michi'
  },
  mutations: {
    // modificadores de estado
    changeMode(state){
      state.immersiveMode = !(state.immersiveMode);
    },
    changeMode(state,payload){
      state.immersiveMode = payload
    },
    addEmail( state, payload ) {
      console.log("Payload-2"+payload)
      state.emailCorporativo = payload
    }
  },
  actions: {
    // llamado a las mutaciones 
    changeModeAction({commit}){
      commit('changeMode')
    },
    changeModeAction({commit}, payload){
      commit('changeMode',payload)
    }
    ,
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
