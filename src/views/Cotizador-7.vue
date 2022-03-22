<template>
  <div class="general__section">
    <!-- Pagina 7 -->
    <section id="cotizador-7">
      <div class="form__information">
        <span>¡MUCHAS GRACIAS POR LLEGAR HASTA AQUÍ!</span>
        <p>
          Apoyanos dejando tus datos para hacerte llegar tu cotizacion
          personalizada
        </p>
      </div>

      <div class="container__form">
        <form>
          <label for="name">Nombre:</label>
          <input v-model.trim="formData.nombre" type="text" name="name" required/>
          <label for="lastname">Apellido:</label>
          <input v-model.trim="formData.apellidos" type="text" name="lastname" />
          <label for="email">E-mail corporativo:</label>
          <input v-model.trim="this.email" type="text" name="email" disabled />
          <label for="phone">Telefono:</label>
          <input v-model.trim="formData.telefono" type="text" name="phone" />
          <label for="empresa">Empresa:</label>
          <input v-model.trim="formData.empresa" type="text" name="empresa" />
          <label for="empresa"
            >¿Deseas agregar una personalizacion? Cuentanos
          </label>
          <textarea
            class="boxText"
            v-model="formData.comentario"
            name="comentarios"
            rows="10"
            cols="40"
          ></textarea>
          <div class="message__container" v-show="showMensaje">
              <p id="mensaje-validacion">
                <i class="fas fa-exclamation-triangle"></i> {{ mensaje }}
              </p>
            </div>
          <button @click="enviar" type="button" class="white-button">
            Enviar
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Cotizador-7",
  data() {
    return {
      active: false,
      email: "",
      formData: new Object(),
      mensaje: new String(),
      showMensaje: false,
    };
  },
  created() {
    this.email = this.$store.getters.getEmail;
  },
  computed: {
    ...mapState(["cotizacion"]),
  },
  watch: {
    email(newEmail) {
      localStorage.email = newEmail;
    },
  },
  methods: {

    enviar(){
      var numero = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(this.formIsValid()){
          if (!numero.test(this.formData.telefono)) {
            
          }else{
        alert("correcto")
        this.$store.dispatch("cotizacionFormAction", this.formData);
        this.register()
        }
      }
    },
    formIsValid(){
      if(this.formData.nombre != undefined && this.formData.apellidos != undefined && this.formData.telefono != undefined && this.formData.empresa != undefined ){  
        return true
      }else{
        this.mensaje = 'Completa el formulario'
      }
    },
    register() {
      console.log("REGISTER")
            this.axios
              .post("/rodselect/nueva-cot", this.cotizacion)
              .then((res) => {
                this.mensaje =
                  " Muchas felicidades " +
                  data.email +
                  ", te haz registrado correctamente, espera a que te contactemos.";
                this.showMensaje = true;
                this.resetForm();
                this.$router.push("./Cotizador-8");
              })
              .catch((err) => {
                this.showMensaje = true;
                console.log(err.response);
                this.mensaje =
                  "Este correo ya fue registrado, espera a que te contactemos.";
              });
    },
    submit() {
      this.$router.push("./Cotizador-8");
    },
    resetForm() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.telefono = "";
    },
  },
};
</script>

<style scoped>
.general__section {
  background-color: #f2f2f2;
  width: 100%;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#cotizador-7 {
  background-color: #f2f2f2;
}
.form__information {
  padding: 1.9em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.form__information span {
  font-weight: 800;
  padding: 0.5em;
}
.form__information p {
  font-size: 1em;
  font-weight: 100;
}
.container__form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__form form {
  width: 30%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
}
.container__form form input {
  margin: 0.4em;
  height: 35px;
  border: none;
  background-color: antiquewhite;
  border-radius: 20px;
}
.boxText {
  height: 200px;
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
.message__container {
  height: 55px;
  margin: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 0.4em;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.637);
}
#mensaje-validacion,
hr {
  font-size: 0.7em;
  font-weight: 800;
  color: white;
  text-align: center;
}
.message__container i {
  color: yellow;
  font-size: 1.5em;
}
@media (max-width: 739px) {
  .container__form form {
    width: 80%;
  }
}
</style>