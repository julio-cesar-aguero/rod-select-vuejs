<template>
        <section id="banner-principal">
            <div id="primario">
                <div id="registro">                
                <div class="formulario">
                    <form id="form"> 
                        
                        <h1>Cotiza tu proyecto con nosotros:</h1> <hr>
                        <label for="nombre" class="form-label"> <i class="fas fa-user"></i> Nombre:</label>
                        <input type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre*" required>

                        <label for="correo" class="form-label"> <i class="fas fa-envelope"></i> Correo:</label>
                        <input type="email" name="correo" id="correo" placeholder="Correo Corporativo*" required>


                        <label for="nombre" class="form-label"> <i class="fab fa-whatsapp"></i> Teléfono:</label>
                        <input  type="text" name="nombre" id="telefono" placeholder="Ingresa tu teléfono de contacto">
                        
                        <button type="submit" id="enviar" class="btn btn-dark">Enviar</button>
                        <p id="mensaje-validacion"></p>
                    </form>
                    </div>
                </div>
                </div>
        </section>
</template>

<script>
</script>

<style>

#banner-principal{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 990px;
    background: url(../assets/img/carousel_principal/setup-balamrush.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-attachment: fixed;
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
  color: white;
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