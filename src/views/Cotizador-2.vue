.<template>
  <div class="general__section">

    <!-- pagina 2 -->
    <section id="cotizador-2">
      <div class="container__cotizador-2">
        <h2>¿Cual es tu presupuesto?</h2>
        <div class="cards">
          <div class="box" @click="handleOption(1)">
            <img
              class="box-img"
              src="../assets/img/icon/calculator.png"
              alt=""
            />
            <span>MENOS DE $80,000 MXN</span>
          </div>
          <div class="box"
          @click="handleOption(2)">
            <img
              class="box-img"
              src="../assets/img/icon/calculator.png"
              alt=""
            />
            <span>DE $80,000 MXN A 150,000 MXN</span>
          </div>
          <div class="box"
          @click="handleOption(3)">
            <img
              class="box-img"
              src="../assets/img/icon/calculator.png"
              alt=""
            />
            <span>DE $150,000 A 500,000 MXN</span>
          </div>
          <div class="box"
          @click="handleOption(4)">
            <img
              class="box-img"
              src="../assets/img/icon/calculator.png"
              alt=""
            />
            <span>MÁS DE $500,000 MXN</span>
          </div>
        </div>
        <div class="contact__container">
          <h3>¿Quieres desarrollar un proyecto personalizado?</h3>
          <!-- <a href="https://api.whatsapp.com/send?phone=+523318954279&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20regalos%20corporativos" target="_blank"> <i class="fab fa-whatsapp"></i> 33 1895 4279</a>-->
          <a @click="enable = true" class="white-button">Contacta un asesor</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Cotizador-2',
  data(){
    return{
        option: true
    }
  },
  methods:{
    handleOption(option){
      console.log("Option selected",option)
      this.$router.push('./cotizador-3')
    }
  }
}
</script>

<style scoped>
/* button */

.white-button {
  background-color: white;
  color: black;
  padding: 0.6em 0.9em;
  border: none;
  border-radius: 10px;
  font-weight: 800;
}
.general__section{
  background-color: #f2f2f2;
}
/* pagina 2 */
.container__cotizador-2 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 100px;
  padding: 0.5em;
  
}
.container__cotizador-2 h2{
  font-size: 1em;
  font-weight: 800;
}
.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin: 0.2em 0.5em;
  padding: 0.5em 0.7em;
  gap: 10px;
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