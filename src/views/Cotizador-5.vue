<template>
  <div class="general__section">
    <!-- pagina 5 -->
    <section id="cotizador-5">
      <div class="container__cotizador-5">
        <h2>¿A quién entregarás estos regalos?</h2>
        <div class="cards">
          <div class="box" @click="handleOption(1)">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>Colaboradores</span>
          </div>

          <div class="box" @click="handleOption(2)">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>Clientes</span>
          </div>
          <div class="box" @click="handleOption(3)">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>Socios</span>
          </div>

          <div class="box" @click="handleOption(4)">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>Otros</span>
          </div>
        </div>
        <div class="contact__container">
          <h3>¿Quieres desarrollar un proyecto personalizado?</h3>
          <Asesor />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Asesor from "../components/Asesor.vue";
export default {
  name: "Cotizador-5",
  components: {
    Asesor: Asesor,
  },
  data() {
    return {
      dataView: {
        name: 'receptor',
        personas: ''
      },
      option: true,
    };
  },
  methods: {
    handleOption(option) {
      switch (option) {
        case 1:
          this.dataView.cantidad = 'COLABORADORES'
        break;
        case 2:
          this.dataView.cantidad = 'CLIENTES'
        break;
        case 3:
          this.dataView.cantidad = 'SOCIOS'
        break;
        case 4:
          this.dataView.cantidad = 'OTROS'
        break;      
        default:
          break;
      }
      this.$store.dispatch("cotizacionAction", this.dataView);
      this.$router.push("./cotizador-6");
    },
  },
};
</script>
<style scoped>
section {
  background-color: #f2f2f2;
}
.general__section {
  padding-top: 150px;
  background-color: #f2f2f2;
  height: 100vh;
}
.container__cotizador-5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
.date__container button {
  margin: 1.5em;
}
#cotizador-6 {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 4em 2em;
}
.column__left,
.column__right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.column__left {
  flex-direction: column;
}
.column__left .contact__container {
  margin: 1em 2em;
  padding: 0.6em 1.4em;
}
.box-boxs {
  width: 360px;
  height: 360px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 3fr);
}
.box-child {
  background-color: red;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
/* 7 */
#cotizador-7 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#cotizador-7 span {
  font-size: 20px;
  font-weight: 700;
}
#cotizador-7 p {
  font-size: 20px;
  font-weight: 500;
  text-align: center;
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
/* 8 */
#cotizador-8 {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3.5em;
}
#cotizador-8 .column__left {
  margin: 1em;
  padding: 1.4em;
}
#cotizador-8 .column__right {
  padding: 1.4em;
  height: 50%;
  border-radius: 2px;
  background-color: rgba(110, 110, 110, 0.3);
}
#cotizador-8 .column__left h2,
h3 {
  font-weight: 600;
}
#cotizador-8 .column__left p {
  font-weight: 300;
}

#cotizador-6 {
  display: flex;
  flex-direction: column;
}

#cotizador-8 {
  flex-direction: column;
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
@media (max-width: 739px) {
  .container__cotizador-2 {
    height: 100%;
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