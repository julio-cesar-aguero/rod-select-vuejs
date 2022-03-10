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
          <button @click="submit" type="submit" class="white-button">Enviar</button>
        </form>
      </div>
    </section>
 
  </div>
</template>

<script>
export default {
  name: 'Cotizador-7'
  ,methods:{
    submit(){
      this.$router.push('./Cotizador-8')
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

</style>