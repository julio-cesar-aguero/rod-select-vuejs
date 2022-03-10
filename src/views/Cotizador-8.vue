<template>
  <div class="general__section">

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
export default {

}
</script>

<style scoped>

/* 8 */
#cotizador-8 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 3.5em;
}
.column__left,.column__right{
  width: 40%;
}
#cotizador-8 .column__left {
  margin: 1em;
  padding: 1.4em;
}
#cotizador-8 .column__right {
  padding: 1.4em;
  border-radius: 2px;
  background-color: rgba(110, 110, 110, 0.3);
}
#cotizador-8 .column__left h2,
h3 {
  font-weight: 800;
  margin: 0.2em;
}
#cotizador-8 .column__left p {
  font-weight: 300;
  padding: 0.5em;
  margin: 1.2em;
}
.column__right{
  max-height: 400px;
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
  #cotizador-8{
    flex-direction: column;
  }
  .column__left,.column__right{
    width: 95vw;
    padding: 0.2em;
    margin: 0.1em;
    height: auto;
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