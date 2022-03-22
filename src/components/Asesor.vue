<template>
  <a type="button" @click="mensajeW()">
    Contacta un Asesor
  </a>
</template>

<script>
export default {
    name: 'Asesor',
    data(){
        return{
            name: 'Chinese',
            mensaje: true
        }
        
      },
    computed: {
        mensajeC: function(){
          console.log("MensajeComputed")
          window.open("https://api.whatsapp.com/send?phone=+523318954279&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20regalos%20corporativos");
        }
    },
    methods:{
        mensajeW(){
            console.log("MensajeW")
            this.mensajeC
        }
    }

}
</script>

<style>

</style>