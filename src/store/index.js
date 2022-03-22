import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // informacion general
    immersiveMode : false,
    emailCorporativo: new String,
    cotizacion:{
      email:     '',
      nombre:    '',
      apellidos: '',
      telefono:  '',
      date:      '',
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
      console.log("mochi",payload.name)
    },
    CotizacionForm(state,payload){
      console.log(payload)
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
      commit('addEmail',payload)
    },
    cotizacionAction({commit} ,payload){
      console.log("michi",payload.name)
      commit('Cotizacion',payload)
    },
    cotizacionFormAction({commit} ,payload){
      for (const property in payload) {
        var dataView = {
          name: property,
          cantidad : payload[property]
        }
        console.log(`${property}: ${payload[property]}`);
        console.log("popis",dataView)
        commit('Cotizacion',dataView)
      }
      console.log("popis")
      commit('CotizacionForm',payload)
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
