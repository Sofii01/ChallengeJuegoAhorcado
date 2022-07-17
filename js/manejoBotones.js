

let contenedor = document.querySelector("#conteiner");
contenedor.classList.add("invisible");

let botonIniciaar = document.querySelector("#botonIniciarJuego");
botonIniciaar.addEventListener("click", function(){
    //remuevo el invisible de contenedor del juego
    contenedor.classList.remove("invisible");
    //pongo invisible a la parte de agregar palabra

    // let boxAgregarPalabra = document.querySelector("#conteinerAgregarPalabra");
    // boxAgregarPalabra.classList.add("invisible");
    let textoArea = document.getElementById("textAreaPalabra");
    textoArea.classList.add("invisible");
    let boxbotones  = document.getElementById("conteinerAvisoBotones");
    boxbotones.classList.add("invisible");
    //pongo invisible los botones de entrada
    let boxbotonesApertura = document.querySelector(".botonesInicio");
    boxbotonesApertura.classList.add("invisible");
});

let botonAgregarPalabra = document.querySelector("#botonAgregar");
let boxJuego = document.getElementById("conteinerJuego");
botonAgregarPalabra.addEventListener("click", function(){
    //remuevo el invisible de contenedor del juego
    contenedor.classList.remove("invisible");
    //pongo invisible los botones de entrada
    let boxbotonesApertura = document.querySelector(".botonesInicio");
    boxbotonesApertura.classList.add("invisible");
    
    
    boxJuego.classList.add("invisible");
}) 


let botonNuevoJuego = document.querySelector("#botonNuevoJuego");
botonNuevoJuego.addEventListener("click", function(){
    window.location.reload(); 
});

let botonDesistir = document.querySelector("#botonDesistir");
botonDesistir.addEventListener("click", function(){
    window.location.reload();
});

let botonGuardarEmpezar = document.querySelector("#botonGuardarEmpezar");
botonGuardarEmpezar.addEventListener("click", function(){
    let textoArea = document.querySelector("#textAreaPalabra");
    textoArea.classList.add("invisible");

    let boxbotones  = document.querySelector("conteinerAvisoBotones");
    boxbotones.classList.add("invisible");
    //pongo invisible los botones de entrada
    
    let boxbotonesApertura = document.querySelector(".botonesInicio");
    boxbotonesApertura.classList.add("invisible");
    
    boxJuego.classList.remove("invisible");

    // let text = textoArea.value;
    
    // agregarPalabra(text);
    
});

let botonCancelar = document.querySelector("#botonCancelar");
botonCancelar.addEventListener("click", function(){
    window.location.reload();
});

