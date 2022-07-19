
tablero.lineWidth = "6";
tablero.lineCap = "round";

// base
function dibujarBase(){
    tablero.fillStyle = "black";
    tablero.fillRect(250,400,200, 10);
}
//columna
function dibujarColumna(){
    tablero.fillStyle = "black"
    tablero.fillRect(290,150,10, 250);
}
// horca
function dibujarHorca(){
    tablero.fillStyle ="black";
    tablero.fillRect(300,150,150,10);
}
//cuerda
function dibujarCuerda(){
    tablero.fillStyle = "black";
    tablero.fillRect(450,150,10,50);
}
// cabeza
function dibujarCabeza(){
    tablero.beginPath();
    tablero.arc(457, 233, 35, 0, 2*3.14);

    tablero.strokeStyle = "black";
    tablero.stroke();
}
//cuerpo
function dibujarCuerpo(){
    tablero.fillStyle = "black";
    tablero.fillRect(450,265,10,80);
}
//brazo izquierdo
function dibujarBrazoIzquierdo(){
    tablero.beginPath();
    tablero.moveTo(455,265);
    tablero.lineTo(400,295);
    tablero.strokeStyle = "black";
    tablero.stroke();
}
// brazo derecho
function dibujarBrazoDerecho(){
    tablero.beginPath();
    tablero.moveTo(455,265);
    tablero.lineTo(505,295);
    tablero.strokeStyle = "black";
    tablero.stroke();
}
//pie izquierdo
function dibujarPieIzquierdo(){
    tablero.beginPath();
    tablero.moveTo(455,345);
    tablero.lineTo(400,380);
    tablero.strokeStyle = "black";
    tablero.stroke();
}
//pie derecho
function dibujarPieDerecho(){
tablero.beginPath();
tablero.moveTo(455,345);
tablero.lineTo(505,380);
tablero.strokeStyle = "black";
tablero.stroke();
}

function dibujoAhorcado(){
    switch (true) {
        case errores === 9:
            dibujarBase();
            break;
        case errores === 8:
            dibujarColumna();
            break;
        case errores === 7:
            dibujarHorca();
            break;
        case errores === 6:
            dibujarCuerda();
            break;
        case errores === 5:
            dibujarCabeza();
            break;
        case errores === 4:
            dibujarCuerpo();
            break;
        case errores === 3:
            dibujarBrazoIzquierdo();
            break;
        case errores === 2:
            dibujarBrazoDerecho();
            break;
        case errores === 1:
            dibujarPieIzquierdo();
            break;
        case errores === 0:
            dibujarPieDerecho();
            break;
        default:
            break;
    }
}