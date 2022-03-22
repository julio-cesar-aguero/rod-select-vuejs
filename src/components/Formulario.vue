<template>
  <section id="banner-principal">
    <div id="primario">
      <div id="registro">
        <div class="formulario">
          <form id="form">
            <h1>Cotiza tu proyecto con nosotros:</h1>
            <hr />
            <label for="nombre" class="form-label">
              <i class="fas fa-user"></i> Nombre:</label
            >
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Ingresa tu nombre*"
              v-model.trim="formData.name"
              required
            />
            <label for="correo" class="form-label">
              <i class="fas fa-envelope"></i> Correo:</label
            >
            <input
              v-model.trim="formData.email"
              type="email"
              name="correo"
              id="correo"
              placeholder="Correo Corporativo*"
              required
            />

            <label for="nombre" class="form-label">
              <i class="fab fa-whatsapp"></i> Teléfono:</label
            >
            <input
              v-model.trim="formData.telefono"
              type="text"
              name="nombre"
              id="telefono"
              placeholder="Ingresa tu teléfono de contacto"
            />
            <select name="categoria" id="categoria" v-model="selected">
              <option value="Regalos dia de las madres">
                Regalos corporativos día de las madres
              </option>
              <option value="Regalos dia del padre">
                Regalos corporativos día del padre
              </option>
              <option value="Reconocimientos">
                Reconocimientos corporativos
              </option>
              <option value="Quinquenios">Quinquenios</option>
              <option value="Regalos de a clientes">Regalos a clientes</option>
              <option value="Convenciones de viaje">
                Convenciones de viaje
              </option>
              <option value="Giveaways">Giveaways</option>
              <option value="OTROS">Otros</option>
            </select>
            <button @click="greet" id="enviar" class="btn btn-dark">
              Enviar
            </button>
            <div class="message__container" v-show="showMensaje">
              <p id="mensaje-validacion">
                <i class="fas fa-exclamation-triangle"></i> {{ mensaje }}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: new Object(),
      mensaje: new String(),
      showMensaje: false,
      selected: "",
    };
  },
  methods: {
    register() {
      var data = {
        date: Date.now(),
        name: this.formData.name,
        email: this.formData.email,
        telefono: this.formData.telefono,
        categoria: this.selected,
      };
      console.log(data);
      let exp = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
      let expdominio = /(gmail)|(hotmail)|(outlook)|(yahoo)/;
      let expnumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

      if (expdominio.test(data.email)) {
        this.mensaje = "Ingresa un correo corporativo";
        this.showMensaje = true;
      } else {
        if (!exp.test(data.email)) {
          this.mensaje = "Ingresa un correo valido";
        } else {
          if(expnumber.test(this.formData.telefono)){
          }else{
          //enviarDatos(prospecto);
          this.axios
            //.post("/rodselect/prospecto", data)
            .post("/rodselect/prospecto", data)
            .then((res) => {
              console.log(res);
              this.mensaje =
                " Muchas felicidades " +
                data.email +
                ", te haz registrado correctamente, espera a que te contactemos.";
              this.showMensaje = true;
              this.resetForm();
            })
            .catch((err) => {
              console.log(err.response);
              this.mensaje =
                "Este correo ya fue registrado, espera a que te contactemos.";
            });
          }
        }
      }
    },
    greet(event) {
      event.preventDefault();
      this.register();
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
#banner-principal {
  font-weight: 200;
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
@keyframes transiciones {
  0% {
    background: url(../assets/img/carousel_principal/reloj_bulova.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
  }
  40% {
    background: url(../assets/img/carousel_principal/1d50.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
  }
  60% {
    background: url(../assets/img/carousel_principal/reloj_victorinox.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
  }
  80% {
    background: url(../assets/img/carousel_principal/setup-balamrush.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
  }

  100% {
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
  padding-top: 10px;
}

.formulario {
  width: 80%;
}
form {
  display: flex;
  flex-flow: column;
  margin-top: 70px;
}
form label,
form h1 {
  font-size: 15px;
  color: white;
}
.message__container {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  border-radius: 10px;
  background: linear-gradient(to bottom, #f2f2f21f, #11111198);
}
#mensaje-validacion,
hr {
  color: white;
}
input::placeholder {
  color: white;
}

form input,
select {
  height: 40px;
  padding: 1em;
  font-weight: 700;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.726);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
}
form select {
  width: 90%;
  margin: 1em 2em;
}
form select option {
  padding: 1.5em;
}
label,
input,
button {
  margin: 10px;
}
form button {
  width: 100px;
  margin: 0 auto;
}

.form__container {
  position: relative;
  width: 50vw;
  padding: 0 0.5em;
}
.message__container i {
  color: yellow;
}
form {
  top: 50%;
  left: 50%;
}
@media (max-width: 739px) {
  #primario {
    width: 100%;
  }
}
</style>