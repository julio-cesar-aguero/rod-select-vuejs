<template>
  <div class="general__section">
    <!-- pagina 4 -->
    <section id="cotizador-4">
      <div class="date__container">
        <h2>¿En qué fecha entregaras este regalo?</h2>
        <div>
          <date-picker
            v-model="time1"
            valueType="format"
            :disabled-date="notBeforeToday"
          ></date-picker>
        </div>
        <div class="advice" v-show="message">
          <span>Ingresa una fecha !</span>
        </div>
        <button class="white-button" @click="handleOption(5)">Siguiente</button>
      </div>
      <div class="contact__container">
        <h3>¿Quieres atención personalizada?</h3>
        <Asesor />
      </div>
    </section>
  </div>
</template>

<script>
import Asesor from "../components/Asesor.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/es";
export default {
  name: "Cotizador-4",
  components: {
    Asesor: Asesor,
    DatePicker,
  },
  data() {
    return {
      option: true,
      time1: null,
      message: false,
    };
  },
  methods: {
    handleOption(option) {
      this.message = false;
      if (this.time1 != null) {
        console.log("Fecha", this.time1);
        this.$router.push("./cotizador-5");
      } else {
        this.message = true;
      }
    },
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    },
    selectDate(date) {},
  },
};
</script>

<style scoped>
.general__section {
  background-color: #f2f2f2;
  height: 100vh;
}
/* button */

.white-button {
  background-color: white;
  color: black;
  padding: 0.6em 0.9em;
  border: none;
  border-radius: 10px;
  font-weight: 800;
}

.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin: 0.2em 0.5em;
  padding: 0.5em 0.7em;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 240px;
  height: 300px;
  transition: all 0.3s;
  padding: 2em;
  border-radius: 2px 80px 2px;
}
.box:hover {
  transform: scale(0.8);
}
.box-img {
  width: 100px;
  height: 100px;
  margin-top: 2em;
}
.box span {
  font-weight: 600;
  font-size: 1.2em;
  text-align: center;
}
.contact__container {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact__container h3 {
  font-size: 1em;
  margin: 1.7em;
}
.date__container {
  margin: 100px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.advice {
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  margin: 0.5em;
  font-size: 1em;
  font-weight: 300;
}
.date__container button {
  margin: 1.5em;
}
.form__information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  width: 400px;
  margin: 0 auto;
}
form {
  display: flex;
  flex-flow: column;
  flex-direction: column;
  justify-content: center;
  color: black;
  width: 400px;
  margin: 0 auto;
}
.container__form form label {
  color: black;
  font-weight: 800;
}
.container__form form input {
  height: 40px;
  padding: 1em;
  font-weight: 700;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.726);
  background: rgba(228, 228, 228, 0.911);
  color: white;
  font-size: 12px;
}
/* responsive */
@media (max-width: 1200px) {
  .cards {
    grid-template-columns: repeat(2, 2fr);
    align-self: center;
  }
  .box {
    width: 200px;
    height: 260px;
    margin: 0 auto;
  }
  .box span {
    font-size: 0.9em;
  }
}
@media (max-width: 520px) {
  .cards {
    grid-template-columns: repeat(1, 4fr);
  }
  .box {
    width: 160px;
    height: 200px;
  }
  .box span {
    font-size: 0.7em;
  }
}
</style>