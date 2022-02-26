<template>
<div class="footer__container">
<footer id="pie">
            <div id="encabezado-pie">
                <h3>Cóntactanos con un click</h3>
                <span>Un asesor te brindará atencion personalizada.</span>
                <div class="iconos">
                    <a href="mailto:marketing@rodaccesorios.com"> <i class="far fa-envelope"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=+523318954279&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20regalos%20corporativos" target="_blank"> <i class="fab fa-whatsapp"></i></a>
                </div>
                <a href="assets/documentos/PoliticasPrivacidadRodSelect.pdf" target="_blank">Consulta Nuestras Politicas de Privacidad</a>
            </div>
            <div id="info">
                <span>Rod Accesorios SAPI de C.V.</span>
                <h4>Contacto:</h4>
                <a href="mailto:marketing@rodaccesorios.com"> <i class="far fa-envelope"></i> marketing@rodaccesorios.com</a> <br>
                <a href="https://api.whatsapp.com/send?phone=+523318954279&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20regalos%20corporativos" target="_blank"> <i class="fab fa-whatsapp"></i> 33 1895 4279</a>
                <h4>Ubicacion:</h4>
                <span>México</span>
                <h4>Servicio:</h4>
                <span>Nacional e internacional</span>
            </div>
            <div id="redes">
                <h4>Siguenos en nuestras redes sociales</h4>
                <div class="network">
                <a href="https://www.linkedin.com/company/rodselect-regaloscorporativos" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.pinterest.com.mx/regaloscorporativosrodselect" target="_blank"><i class="fab fa-pinterest-square"></i></a>
                </div>
            </div>
        </footer>
</div>
  
</template>

<script>
export default {
name: 'Footer'
}
</script>

<style>
.footer__container{
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 0;
    z-index: 150;
}

#pie{
    /*background: #C6BFC2;*/
    background: url(../assets/img/principal/white_carbon.png);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 30px;
    font-size: 20px;
}
#pie a{
    text-decoration: none;
    color: black;
}
#encabezado-pie{
    margin: 20px;
}
#encabezado-pie .iconos{
    display: flex;
    justify-content: space-around;
}
#encabezado-pie i{
    font-size: 3em;
}

#info{
    margin: 20px;
    text-align: center;
}
#redes{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.network{
    display: flex;
    justify-content: space-around;
}

.network a{
    font-size: 3em;
    transition: all 300ms;
}
.network a:hover{
    transform: scale(1.1);
}

</style>