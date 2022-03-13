<template>
  <div class="general__section">
         <!-- Pagina 7 -->
    <section id="cotizador-7">
      <div class="form__information">
        <h1>{{this.$store.state.emailCorporativo}}</h1>
        <span>¡MUCHAS GRACIAS POR LLEGAR HASTA AQUÍ!</span>
        <p>
          Apoyanos dejando tus datos para hacerte llegar tu cotizacion
          personalizada
        </p>
      </div>

      <div class="container__form">
        <form>
          <label for="name">Nombre:</label>
          <input v-model="formData.name" type="text" name="name" />
          <label for="lastname">Apellido:</label>
          <input v-model="formData.lastname" type="text" name="lastname" />
          <label for="email">E-mail corporativo:</label>
          <input v-model="this.email" type="text" name="email" disabled
          />
          <label for="phone">Telefono:</label>
          <input v-model="formData.telefono" type="text" name="phone" />
          <label for="empresa">Empresa:</label>
          <input v-model="formData.empresa" type="text" name="empresa" />
          <label for="empresa"
            >¿Deseas agregar una personalizacion? Cuentanos
          </label>
          <input v-model="formData.extra" type="text" name="empresa" />
          <button @click="greet" type="submit" class="white-button">Enviar</button>
        </form>
      </div>
    </section>
 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Cotizador-7',
  data(){
    return{
      email: '',
      formData: new Object(),
      mensaje: new String,
      showMensaje : false
    }
  },
  mounted(){
    this.email = this.$store.getters.getEmail;
    console.log('Zoe',this.email);
  },
  watch:{
    email(newEmail) {
      localStorage.email = newEmail;
    }
  }
  ,methods:{
    submit(){
      this.$router.push('./Cotizador-8')
    },
    register(){
      var data = {
        name: this.formData.name,
        lastname: this.formData.lastname,
        email: this.formData.email,
        telefono: this.formData.telefono,
        empresa: this.formData.Empresa,
        extra: this.formData.extra
      
      }
      let exp = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
      let expdominio = /(gmail)|(hotmail)|(outlook)|(yahoo)/;
      
      if(expdominio.test(data.email)){
        this.mensaje = "Ingresa un correo corporativo";
        this.showMensaje = true;
      }else{
        if(!exp.test(data.email)){
          this.mensaje = "Ingresa un correo valido";
        }
        else{
          //enviarDatos(cotizacion);
                axios.post('http://localhost:3000/api/rodselect/cotizacion',data)
                .then(res => {
                    console.log(res);
                    this.mensaje=" Muchas felicidades "+data.email+", te haz registrado correctamente, espera a que te contactemos.";
                    this.showMensaje = true;
                    this.resetForm()
                    this.$router.push('./Cotizador-8')
                    
                })
                .catch(err => {
                    console.log(err.response);
                    this.mensaje='Este correo ya fue registrado, espera a que te contactemos.';
                });

        }
      }

    },
    greet(event) {
      event.preventDefault();
      this.register();
    },
    resetForm () {
      this.formData.name = ''
      this.formData.email = '' 
      this.formData.telefono = ''
    } 
  }
}
</script>

<style scoped>
.general__section{
  background-color: #f2f2f2;
  width: 100%;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#cotizador-7{
  background-color: #f2f2f2;
}
.form__information{
  padding: 1.9em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.form__information span{
  font-weight: 800;
  padding: 0.5em;
}
.form__information p{
  font-size: 1em;
  font-weight: 100;
}
.container__form{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__form form{
  width: 30%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;

}
.container__form form input{
  margin: 0.4em;
  height: 35px;
  border: none;
  background-color: antiquewhite;
  border-radius: 20px;
}
.white-button {
  background-color: white;
  color: black;
  margin: 1.5em;
  padding: 0.6em 0.9em;
  border: none;
  border-radius: 10px;
  font-weight: 800;
}
@media (max-width: 739px) {
  .container__form form{
    width: 80%;
  }
}
</style>