<template>
        <section id="banner-principal">
            <div id="primario">
                <div id="registro">                
                <div class="formulario">
                    <form id="form"> 
                        
                        <h1>Cotiza tu proyecto con nosotros:</h1> <hr>
                        <label for="nombre" class="form-label"> <i class="fas fa-user"></i> Nombre:</label>
                        <input 
                          type="text" 
                          name="nombre" 
                          id="nombre" placeholder="Ingresa tu nombre*" 
                          v-model="formData.name"
                        required
                        >
                        <label for="correo" class="form-label"> <i class="fas fa-envelope"></i> Correo:</label>
                        <input 
                          v-model="formData.email"
                          type="email" name="correo" 
                          id="correo" placeholder="Correo Corporativo*" 
                        required>


                        <label for="nombre" class="form-label"> <i class="fab fa-whatsapp"></i> Teléfono:</label>
                        <input  
                          v-model="formData.telefono"
                          type="text" 
                          name="nombre" id="telefono" placeholder="Ingresa tu teléfono de contacto">
                        
                        <button                          
                          @click="greet"
                          id="enviar" 
                          class="btn btn-dark">Enviar
                        </button>

                        <p id="mensaje-validacion">{{mensaje}}</p>
                    </form>
                    </div>
                </div>
                </div>
        </section>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      formData: new Object(),
      mensaje: new String

    }
  },methods:{
    register(){
      var data = {
        name: this.formData.nombre,
        email: this.formData.email,
        telefono: this.formData.telefono
      
      }
      let exp = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
      let expdominio = /(gmail)|(hotmail)|(outlook)|(yahoo)/;
      
      if(expdominio.test(data.email)){
        this.mensaje = "Ingresa un correo corporativo";
      }else{
        if(!exp.test(data.email)){
          this.mensaje = "Ingresa un correo valido";
        }
        else{
          //enviarDatos(prospecto);
                axios.post('https://sistemasrod.herokuapp.com/api/rodselect/prospecto',data)
                .then(res => {
                    console.log(res);
                    this.mensaje=`Muchas felicidades ${data.name}, te haz registrado correctamente, espera a que te contactemos.`;
                    this.resetForm()
                    
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

<style>


#banner-principal{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 990px;
    /*background: url(../img/principal/banner_principalv3.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;*/
    animation: transiciones 40s infinite;
}
@keyframes transiciones{
    0%{
        background: url(../assets/img/carousel_principal/reloj_bulova.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
    }
    40%{
        background: url(../assets/img/carousel_principal/1d50.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
    }
    60%{
        background: url(../assets/img/carousel_principal/reloj_victorinox.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
    }
    80%{
        background: url(../assets/img/carousel_principal/setup-balamrush.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
    }
    
    100%{
        background: url(../assets/img/carousel_principal/reloj_ck.webp);
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
    }
}


#primario {
  width: 50%;
  height: 95%;
  background: rgba(0, 0, 0, 0.5);
}
#registro {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  padding-top: 20px;
}

.formulario {
  width: 80%;
}
form {
  display: flex;
  flex-flow: column;
  margin-top: 70px;
}
h1{
  padding-bottom: 1em;
}
form label,
form h1 {
  font-size: 25px;
  color: white;
}
#mensaje-validacion,
hr {
  color: red;
}
input::placeholder {
  color: white;
}

form input {
  border-radius: 5px;
  border: 1px solid white;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 22px;
}
label,
input,
button {
  margin: 15px;
}
form button {
  width: 100px;
  margin: 0 auto;
}

.form__container {
  position: relative;
  background-color: blue;
  width: 50vw;
  padding: 0 0.5em;
}
form {
  top: 50%;
  left: 50%;
}
@media (max-width: 739px) {
  #primario{
    width: 100%;
  }
}
</style>