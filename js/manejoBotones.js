

let contenedor = document.querySelector("#conteiner");
contenedor.classList.add("invisible");

let textoArea = document.getElementById("textAreaPalabra");
let boxbotones  = document.getElementById("conteinerAvisoBotones");

let boxbotonesApertura = document.querySelector(".botonesInicio");

let botonIniciar = document.querySelector("#botonIniciarJuego");
botonIniciar.addEventListener("click", function(){
    //remuevo el invisible de contenedor del juego
    contenedor.classList.remove("invisible");
    
    textoArea.classList.add("invisible");
    
    boxbotones.classList.add("invisible");
    
    boxbotonesApertura.classList.add("invisible");
});

let botonAgregarPalabra = document.querySelector("#botonAgregar");
let boxJuego = document.getElementById("conteinerJuego");
botonAgregarPalabra.addEventListener("click", function(){
    //remuevo el invisible de contenedor del juego
    contenedor.classList.remove("invisible");
    //pongo invisible los botones de entrada
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
   
    textoArea.classList.add("invisible");
    boxbotones.classList.add("invisible");  
    boxbotonesApertura.classList.add("invisible");
    boxJuego.classList.remove("invisible");

    
});

let botonCancelar = document.querySelector("#botonCancelar");
botonCancelar.addEventListener("click", function(){
    window.location.reload();
});



