<template>
  <div id="marcas" class="general__section">
      
        <section id="marcas" >
            <h2>Marcas Premium</h2>
            <img loading="lazy" src="../assets/img/distribuidores/oe_logo.png" alt="Ortiz Espinosa" title="Ortiz Espinosa">
            <div class="img-dist">
                <img loading="lazy" src="../assets/img/distribuidores/acteck.jpg" alt="acteck" title="Acteck">
                <img loading="lazy" src="../assets/img/distribuidores/balam_rush.jpg" alt="balam_rush" title="Balam Rush">
                <img loading="lazy" src="../assets/img/distribuidores/bulova.png" alt="Bulova" title="Bulova">
                <img loading="lazy" src="../assets/img/distribuidores/calvin_klein.png" alt="Calvin Klein" title="Calvin Klein">
                <img loading="lazy" src="../assets/img/distribuidores/citizen.png" alt="Citizen" title="Citizen">
                <img loading="lazy" src="../assets/img/distribuidores/victorinox.png" alt="Victorinox" title="Victorinox">
                <img loading="lazy" src="../assets/img/distribuidores/slazenger.png" alt="Slazenger" title="Slazenger">
                <img loading="lazy" src="../assets/img/distribuidores/swissbrand.png" alt="swissbrand" title="Swissbrand">
                <img loading="lazy" src="../assets/img/distribuidores/mont_blanc.png" alt="mont_blanc" title="Mont Black">
                <img loading="lazy" src="../assets/img/distribuidores/umbro.png" alt="umbro" title="Umbro">
            </div>
            <img src="../assets/img/distribuidores/uno50.png" alt="uno_de_50" title="Uno de 50">
        </section>

  </div>
</template>
<style>

#marcas{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
}
#marcas h2{
    font-size: 40px;
    margin-bottom: 40px;
}
#marcas img{
    width: 20%;
    
    transition: all 300ms;
}
#marcas img:hover{
    transform: scale(1.1);
}
#marcas .img-dist{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
#marcas .img-dist img{
    width: 15%;
    margin: 15px;
}

</style>