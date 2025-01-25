function AvanzaMoto(Jugador, MtsMoto, img, fin){
    var i = 0;
    document.getElementById(MtsMoto).style="font-size:20px";
    while (i<=fin) {
        document.getElementById(MtsMoto).value = parseInt(i) + "mts";
        document.getElementById(img).style.paddingLeft = parseInt(i) + "px";
        i=i+Math.random()*20;
        Concurrent.Thread.sleep(Math.random()*50);
    }

    nombre = document.getElementById(Jugador).value;
    document.getElementById(MtsMoto).style="font-size:30px background-color: #fcff00";
    document.getElementById(MtsMoto).value=parseInt(i) + "mts";
    alerta ("Gano la moto" + nombre);
    Concurrent.Thread.stop(AvanzaMoto);
}

function Iniciar(){
    document.getElementById("motoanim1").style.display="inline";
    document.getElementById("motoanim2").style.display="inline";
    document.getElementById("motoanim3").style.display="inline";
    document.getElementById("motoanim4").style.display="inline";
    document.getElementById("motoestatica1").style.display="none";
    document.getElementById("motoestatica2").style.display="none";
    document.getElementById("motoestatica3").style.display="none";
    document.getElementById("motoestatica4").style.display="none";

    Concurrent.Thread.create(AvanzaMoto, "Jugador1", "MtsMoto1", "motoanim1",1900);
    Concurrent.Thread.create(AvanzaMoto, "Jugador2", "MtsMoto2", "motoanim2",1900);
    Concurrent.Thread.create(AvanzaMoto, "Jugador3", "MtsMoto3", "motoanim3",1900);
    Concurrent.Thread.create(AvanzaMoto, "Jugador4", "MtsMoto4", "motoanim4",1900);
}

//holi