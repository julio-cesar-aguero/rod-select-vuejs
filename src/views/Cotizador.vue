<template>
  <div class="general__section">
    <!-- pagina 1 -->
    <section id="#cotizador">
      <div class="cotizador__portada">
        <div class="bacground-image__container">
          <img
            class="background-image"
            src="../assets/img/cotizador/reloj.png"
            alt=""
          />
        </div>
        <div class="card__information">
          <small>Inicia a crear tu</small>
          <h2>regalo corporativo ideal</h2>
          <p>
            Consiente atus clientes, trabajadores y socios comerciales con un
            regalo altamente personalizado de acuerdo atus necesidades y
            presupuesto.
          </p>
          <div class="buttons">
            <a class="next-button">E-mail corporativo</a>
            <a class="next-button" href="#cotizador-2">Iniciar</a>
          </div>
        </div>
      </div>
    </section>
    <!-- pagina 2 -->
    <section id="cotizador-2">
      <div class="container__cotizador-2">
        <h2>¿Cual es tu presupuesto?</h2>
        <div class="cards">
          <div class="box">
            <img
              class="box-img"
              src="../assets/img/icon/calculator.png"
              alt=""
            />
            <span>MENOS DE $80,000 MXN</span>
          </div>
          <div class="box">
            <img
              class="box-img"
              src="../assets/img/icon/calculator.png"
              alt=""
            />
            <span>DE $80,000 MXN A 150,000 MXN</span>
          </div>
          <div class="box">
            <img
              class="box-img"
              src="../assets/img/icon/calculator.png"
              alt=""
            />
            <span>DE $150,000 A 500,000 MXN</span>
          </div>
          <div class="box">
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
          <button class="white-button">Contacta un asesor</button>
        </div>
      </div>
    </section>
    <!-- pagina 3 -->
    <section id="cotizador-3">
      <div class="container__cotizador-2">
        <h2>¿Para cuántas personas es este regalo?</h2>
        <div class="cards">
          <div class="box">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>Colaboradores</span>
          </div>

          <div class="box">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>DE 10,000 A 100,000</span>
          </div>

          <div class="box">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>DE 100,000 A 500,000</span>
          </div>

          <div class="box">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>MÁS DE 500,000</span>
          </div>
        </div>
        <div class="contact__container">
          <h3>¿Quieres desarrollar un proyecto personalizado?</h3>
          <button class="white-button">Contacta un asesor</button>
        </div>
      </div>
    </section>
    <!-- pagina 4 -->
    <section id="cotizador-4">
      <div class="date__container">
        <h2>¿En qué fecha entregaras este regalo?</h2>
        <button class="white-button">Selecciona una fecha</button>
        <button class="white-button">Siguiente</button>
      </div>
      <div class="contact__container">
        <h3>¿Quieres atención personalizada?</h3>
        <button class="white-button">Contacta un asesor</button>
      </div>
    </section>
    <!-- pagina 5 -->
    <section id="cotizador-5">
      <div class="container__cotizador-2">
        <h2>¿Cual es tu presupuesto?</h2>
        <div class="cards">
          <div class="box">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>Colaboradores</span>
          </div>

          <div class="box">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>Clientes</span>
          </div>
          <div class="box">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>Socios</span>
          </div>

          <div class="box">
            <img class="box-img" src="../assets/img/icon/people.png" alt="" />
            <span>Otros</span>
          </div>
        </div>
        <div class="contact__container">
          <h3>¿Quieres desarrollar un proyecto personalizado?</h3>
          <button class="white-button">Contacta un asesor</button>
        </div>
      </div>
    </section>
    <!-- pagina 6 -->
    <section id="cotizador-6">
      <div class="column__left">
        <div class="contact__container">
          <h2>¿Qué tipos de regalos quieres dar?</h2>
          <p>
            Encuentra una gran variedad de regalos para otorgar una experiencia
            inolvidable y reforzar tu imagen corporativa.
          </p>
        </div>
        <div class="contact__container">
          <h2>Quiero desarrollar mi propio regalo</h2>
          <button class="white-button">Contacta un asesor</button>
        </div>
      </div>
      <div class="column__right">
        <div class="box-boxs">
          <div class="box-child"></div>
          <div class="box-child"></div>
          <div class="box-child"></div>
          <div class="box-child"></div>
          <div class="box-child"></div>
          <div class="box-child"></div>
          <div class="box-child"></div>
          <div class="box-child"></div>
          <div class="box-child"></div>
        </div>
      </div>
    </section>
    <!-- Pagina 7 -->
    <section id="cotizador-7">
      <span>¡MUCHAS GRACIAS POR LLEGAR HASTA AQUÍ!</span>
      <h3>
        Apoyanos dejando tus datos para hacerte llegar tu cotizacion
        personalizada
      </h3>
      <div class="container__form">
        <form>
          <label for="name">Nombre:</label>
          <input type="text" name="name" />
          <label for="lastname">Apellido:</label>
          <input type="text" name="lastname" />
          <label for="email">E-mail corporativo:</label>
          <input type="text" name="email" />
          <label for="phone">Telefono:</label>
          <input type="text" name="phone" />
          <label for="empresa">Empresa:</label>
          <input type="text" name="empresa" />
          <label for="empresa"
            >¿Deseas agregar una personalizacion? Cuentanos
          </label>
          <input type="text" name="empresa" />
          <button type="submit" class="white-button">Enviar</button>
        </form>
      </div>
    </section>
    <!-- Pagina 8 -->
    <section id="cotizador-8">
      <div class="column__left">
        <h2>¡Felicidades!</h2>
        <p>
          Cada vez estás más cerca de iniciar contu gran regalo corporativo y
          otorgar una experiencia única a tus clientes, colaboradores y socios.
        </p>
        <h3>¿Por qué son importantes los regalos corporativos?</h3>
        <ul>
          <li>Mejora la imagen de la empresa.</li>

          <li>Genera un mayor compromiso de parte de los trabajadores.</li>

          <li>Mayor rendimiento laboral.</li>

          <li>Ayuda en la genración de nuevas ídeas.</li>

          <li>Menores inconvenientes laborales.</li>

          <li>Mayor competitividad empresarial.</li>

          <li>Menos fugas de cerebros.</li>
        </ul>
      </div>
      <div class="column__right">
        <img src="" alt="" />
        <div class="advice__container">
          <h3>¿Sabias que?</h3>
          <ul>
            <li>
              80% de los compradores indican que el dar incentivos a sus
              trabajadores
            </li>
            <li>
              56% de los compradores indican que el dar un regalo personalizado
              ayudaria en el posicionamiento e imagen de su marca.
            </li>
            <li>
              Más del 60% de los consumidores agradecen recibir un obsequio
              funcional para su uso diario
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Formulario from "../components/Formulario.vue";
export default {
  name: "Cotizador",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
body {
  font-family: "Roboto", sans-serif;
  background-color: #f2f2f2;
}
section {
  width: 100%;
  margin-top: 100px;
}
h3 {
  font-size: 19px;
  font-weight: 400;
}
/* pagina 1 */
#cotizador {
  width: 100vw;
  margin-top: 100px;
}
.cotizador__portada {
  display: grid;
  background-color: #f2f2f2;
  margin-top: 50px;
  position: relative;
}
.background-image {
  position: absolute;
  width: 90%;
  height: 90vh;
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
/* pagina 2 */
.container__cotizador-2 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1em;
}
.cards {
  width: 95%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 4em 2em;
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
  padding: 3em;
  border-radius: 2px 80px 2px;
}
.box:hover {
  scale: (1.2);
}
.box-img {
  width: 100px;
  height: 100px;
  margin: 2em;
}
.box span {
  font-weight: 600;
  font-size: 1.2em;
}
.contact__container {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 100vh;
  display: flex;
  justify-content: center;

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
  align-items: center;
}
#cotizador-7 span {
  font-size: 20px;
  font-weight: 700;
}
#cotizador-7 h3 {
  font-size: 23px;
  font-weight: 400;
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
  background-color: white;
  border-radius: 100px;
}
/* 8 */
#cotizador-8 {
  display: flex;
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
</style>