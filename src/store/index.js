import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // informacion general
    immersiveMode : false,
    emailCorporativo: new String,
    cotizacion:{
      nombre: '',
      apellidos: '',
      email: '',
      date: '',
      telefono: '',
      empresa: '',
      presupuesto: '10,000',
      personas: '',
      entrega: '',
      receptor: '',
      regalo: '',
      comentario: '',
      activo: ''
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
