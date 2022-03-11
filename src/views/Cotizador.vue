<template>
  <div class="general__section">
    <!-- pagina 1 -->
    <section id="#cotizador">
      <div class="cotizador__portada">
        <div class="card__information">
          <small>Inicia a crear tu</small>
          <h2>regalo corporativo ideal</h2>
          <p>
            Consiente atus clientes, trabajadores y socios comerciales con un
            regalo altamente personalizado de acuerdo atus necesidades y
            presupuesto.
          </p>
          <div class="buttons">
            <input 
              type="email" 
              name="email" 
              id="email" 
              v-model="email"
              placeholder="ingresa un correo valido"
              >
              <span>{{mensaje}}</span>
            <button class="next-button" @click="validar">Iniciar</button>
          </div>
        </div>
        <div class="bacground-image__container">
          <img
            class="background-image"
            src="../assets/img/cotizador/reloj.png"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Cotizador",
  data(){
    return{
      mensaje: new String,
      showMensaje : false,
      email: '',
      isValid: true
    }
  },
  methods:{
    validar(){
      this.register();
    },
    next(){
      this.$router.push('/cotizador-2')
    },

    register(){
      var emailData = this.email;
      console.log("Max"+emailData);
      
      let exp = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
      let expdominio = /(gmail)|(hotmail)|(outlook)|(yahoo)/;
      
      if(expdominio.test(this.email)){
        this.mensaje = "Ingresa un correo corporativo";
      }else{
        if(!exp.test(this.email)){
          this.mensaje = "Ingresa un correo valido";
        }
        else{
          this.mensaje = "Correo valido";
          this.next();
        }
      }

    }
    
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
body {
  font-family: "Roboto", sans-serif;
  background-color: #f2f2f2;
}
.general__section section {
  background-color: #f2f2f2;
  width: 100%;
  padding-top: 50px;
  overflow: hidden;
}
h3 {
  font-size: 19px;
  font-weight: 400;
}
/* pagina 1 */
#cotizador {
  width: 100vw;
  
  margin-top: 50px;
}
.cotizador__portada {
  height: 80vh;
  display: grid;
  background-color: #f2f2f2;
  margin-top: 20px;
  position: relative;
  margin-bottom: 300px;
}
.background-image__container{
  width: 100%;
  height: 80vh;
}
.background-image {
  width: 90%;
  background-color: transparent;
}
.card__information {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 2.5em;
  padding: 2em;
  height: 90vh;
  z-index: 10;
  position: absolute;
}
.card__information small {
  font-size: 2em;
  font-weight: 500;
}
.card__information h2 {
  font-size: 3em;
  font-weight: 800;
}
.card__information p {
  letter-spacing: 0.05em;
  font-size: 1.2em;
  font-weight: 200;
}
.buttons {
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.buttons .next-button {
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 0.6em;
  margin: 0.9em;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}
.white-button {
  background-color: white;
  color: black;
  padding: 0.6em 0.9em;
  border: none;
  border-radius: 10px;
  font-weight: 800;
}


@media (max-width: 845px) {
  .card__information {
    width: 90%;
    padding: 2.2em;
    margin: 2.3em;
    font-size: 0.9em;
  }
  .cotizador__portada {
    margin-bottom: 900px;
  }
  .background-image {
    opacity: 0.5;
  }
}
@media (max-width: 739px) {
  .cotizador__portada {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 300px;
  }
  .card__information {
    width: 90%;
    padding: 2.2em;
    margin: 2.3em;
    font-size: 0.8em;
  }
  .background-image {
    max-width: 40vw;
    max-height: 20vh;
    transform: scale(2.8);
  }
}

</style>