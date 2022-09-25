var vp = document.getElementById("Villa_platzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "img/tile.png",
    cargaOK: false
};
var vaca = {
    url: "img/vaca.png",
    cargaOK: false
};
var cerdo = {
    url: "img/cerdo.png",
    cargaOK: false
};
var pollo = {
    url: "img/pollo.png",
    cargaOK: false
};
var granjero = {
    url: "img/granjero.png",
    cargaOK: false
};


var cantidadDeVacas = aleatorio(2, 8);
var cantidadDeCerdos = aleatorio(1, 5);
var cantidadDePollos = aleatorio(4, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar(evento)
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        console.log("Cantidad de vacas: " +cantidadDeVacas);
        for(var v = 0; v < cantidadDeVacas; v++)
        {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK)
    {
        console.log("Cantidad de cerdos: " +cantidadDeCerdos);
        for(var c = 0; c < cantidadDeCerdos; c++)
        {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOK)
    {
        console.log("Cantidad de pollos: " +cantidadDePollos);
        for(var p = 0; p < cantidadDePollos; p++)
        {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}
