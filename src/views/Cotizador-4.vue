<template>
  <div class="general__section">
    <!-- pagina 4 -->
    <section id="cotizador-4">
      <div class="date__container">
        <h2>¿En qué fecha entregaras este regalo?</h2>
        <button class="white-button">Selecciona una fecha</button>
        <button 
        class="white-button"
        @click="handleOption(5)"
        >Siguiente</button>
      </div>
      <div class="contact__container">
        <h3>¿Quieres atención personalizada?</h3>
        <button class="white-button">Contacta un asesor</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {

  name: 'Cotizador-4',
  data(){
    return{
        option: true
    }
  },
  methods:{
    handleOption(option){
      console.log("Option selected",option)
      this.$router.push('./cotizador-5')
    }
  }
}
</script>

<style scoped>

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
.contact__container h3{
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
.form__information{
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
  .column__left,
  .column__right {
    width: 100%;
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