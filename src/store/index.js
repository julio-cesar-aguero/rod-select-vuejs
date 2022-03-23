import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // informacion general
    immersiveMode : false,
    emailCorporativo: new String,
    cotizacion:{
      nombre:    '',
      apellidos: '',
      email:     '',
      telefono:  '',
      empresa:   '',
      presupuesto: '',
      personas:  '',
      entrega:   '',
      receptor:  '',
      regalo:    '',
      comentario:'',
      activo: true
    }
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
      state.emailCorporativo = payload
      state.cotizacion.email = state.emailCorporativo
    },
    Cotizacion(state,payload){
      var option = payload.name
      state.cotizacion[option] = payload.cantidad
    },
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
      commit('addEmail',payload)
    },
    cotizacionAction({commit} ,payload){
      commit('Cotizacion',payload)
    },
    cotizacionFormAction({commit} ,payload){
      for (const property in payload) {
        var dataView = {
          name: property,
          cantidad : payload[property]
        }
        commit('Cotizacion',dataView)
      }
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
