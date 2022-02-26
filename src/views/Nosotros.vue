<template>
  <div class="general__section">
      
        <section id="nosotros" >
            <img id="img-mesa-trabajo" loading="lazy" src="../assets/img/principal/mesa_trabajo.jpg" alt="Mesa de Trabajo" title="Mesa de Trabajo">
            <div id="descripcion-mesa">
                <h3>Más de 15 años de experiencia en la elaboración de regalos corporativos en proyectos nacionales e internacionales.</h3>
                <ul>
                    <li>Regalos Corporativos</li>
                    <li>Regalos para eventos corporativos</li>
                    <li>Regalos de aniversario laboral</li>
                    <li>Reconocimientos laborales </li>
                    <li>Regalos de fin de año</li>
                    <li>Regalos para empleados</li>
                    <li>Regalos para incentivar a tus clientes</li>
                </ul>
                <p>Nos especializamos en la creacion de regalos comporativos utilizando marcas premium.</p>
            </div>
        </section>
  </div>
</template>
<style>
#nosotros{
    padding: 40px;
    display: grid;
    grid-template-areas: "imagen desc";
    padding-top: 100px;
}

#img-mesa-trabajo{
    grid-area: imagen;
    width: 90%;
}
#descripcion-mesa{
    display: grid;
    grid-area: desc;
    font-size: 20px;
    place-content: center;
}

#descripcion-mesa h3{
    font-size: 35px;
}
#descripcion-mesa ul li{
    margin-top: 10px;
}
#descripcion-mesa ul li:hover{
    text-decoration: underline;
}
/* Responsive */

</style>