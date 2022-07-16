

let contenedor = document.querySelector("#conteiner");
contenedor.classList.add("invisible");

let botonIniciaar = document.querySelector("#botonIniciarJuego");
botonIniciaar.addEventListener("click", function(){
    //remuevo el invisible de contenedor del juego
    contenedor.classList.remove("invisible");
    //pongo invisible a la parte de agregar palabra

    // let boxAgregarPalabra = document.querySelector("#conteinerAgregarPalabra");
    // boxAgregarPalabra.classList.add("invisible");
    let textoArea = document.querySelector("#textAreaPalabra");
    textoArea.classList.add("invisible");
    let boxbotones  = document.querySelector("#conteinerAvisoBotones");
    boxbotones.classList.add("invisible");
    //pongo invisible los botones de entrada
    let boxbotonesApertura = document.querySelector(".botonesInicio");
    boxbotonesApertura.classList.add("invisible");
});

let botonAgregarPalabra = document.querySelector("#botonAgregar");
botonAgregarPalabra.addEventListener("click", function(){
    //remuevo el invisible de contenedor del juego
    contenedor.classList.remove("invisible");
    //pongo invisible los botones de entrada
    let boxbotonesApertura = document.querySelector(".botonesInicio");
    boxbotonesApertura.classList.add("invisible");
    
    let boxJuego = document.querySelector("#conteinerJuego")
    boxJuego.classList.add("invisible");
}) 
