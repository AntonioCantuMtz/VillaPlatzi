var vp = document.getElementById("Villa_platzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", controlGranjero);//esto sirve para mover al granjero cuando oprima una tecla de las flechitas del teclado

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
    cargaOK: false,
};
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
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

granjero.imagen = new Image();
granjero.imagen.src = granjero.url;
granjero.imagen.addEventListener("load", cargarGranjero);


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

function cargarGranjero()
{
    granjero.cargaOK = true;
    dibujar();
}

function dibujar()
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
    if(granjero.cargaOK)
    {
        var x = 400, y = 390;
        console.log("Granjero dibujado");
        papel.drawImage(granjero.imagen, x, y);//Esto viene ciendo el punto inicial donde se dibuja el granjero
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

//Funcion para que cuando precione una flechita ocurra algo que en este caso es que el grnajero se mueva
function controlGranjero(evento)
{
    var movimiento = 5;
    switch(evento.keyCode)
    {
        case teclas.DOWN:
            y = y + movimiento;
        break;
        case teclas.UP:
            y = y - movimiento;
        break;
        case teclas.RIGHT:
            x = x + movimiento;
        break;
        case teclas.LEFT:
            x = x - movimiento;
        break;
        default:
        break;
    }
}