<template>
  <div class="general__section">
      
        <section id="clientes">
            <h2>Algunos de Nuestros Clientes</h2>
            <p>Durante nuestra trayectoria, hemos tenido el placer de colaborar y brindar soluciones nacionales e internacionales,
                <br>siempre haciendo de sus regalos corporativos algo único y especial.</p>
            <div class="img-client">
                <img loadinf="lazy" src="../assets/img/clientes/dhl.png" alt="dhl" title="DHL">
                <img loading="lazy" src="../assets/img/clientes/akron.png" alt="akron" title="Akron">
                <img loading="lazy" src="../assets/img/clientes/omnilife.jpg" alt="omnilife" title="Omnilife">
                <img loadinf="lazy" src="../assets/img/clientes/tupperware.png" alt="tupperware" title="Tupperware">
                <img loading="lazy" src="../assets/img/clientes/femsa.png" alt="femsa" title="FEMSA">
                <img loading="lazy" src="../assets/img/clientes/ferrero_rocher.png" alt="ferrero_rocher" title="Ferrero Rocher">
                <img loading="lazy" src="../assets/img/clientes/herbalife.png" alt="herbalife" title="Herbalife">
            </div>
        </section>
  </div>
</template>
<style>

#clientes{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
}
#clientes h2{
    font-size: 40px;
    font-weight: bold;
}
#clientes p{
    font-size: 24px;
}
#clientes img{
    transition: all 300ms;
}
#clientes img:hover{
    transform: scale(1.1);
}
#clientes .img-client{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}
#clientes .img-client img{
    width: 20%;
    margin-left: 10px;
    margin-right: 10px;
}

</style>