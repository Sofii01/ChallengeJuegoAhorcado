let palabras = ['ALURA', 'HTML', 'CSS', 'JAVASCRIPT', 'ORACLE', 'AHORCADO'];
let tablero = document.getElementById("pizarra").getContext("2d");

let letras = [];
let palabraCorrecta = "";
let errores = 10;

let palabraSecreta = escojerPalabraSecreta();

function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    console.log(palabra);
    return palabra;
}

function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    let ancho = 600/palabraSecreta.length;
    for(let i = 0; i< palabraSecreta.length; i++){
        tablero.moveTo(220+(ancho*i),640);
        tablero.lineTo(270+(ancho*i),640);
    }
    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = "bold 52px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    let ancho = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],225+(ancho*index),620);

}
function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = "bold 40px Inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    tablero.fillText(letra, 255+(40*(10-errorsLeft)),710,40);

}

function verificarLetra(key){
    if (letras.length<1 || letras.indexOf(key) < 0) {
        letras.push(key);
        return false;
    } else {
        letras.push(key);
        return true;
    }
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
    // console.log(palabraCorrecta);
}

function adicionarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<=0){
        errores -= 1;
        dibujoAhorcado();
    }
}
function validarLenght(){
    if(palabraCorrecta.length == palabraSecreta.length){
        return true;
    }else{
        return false;
    }
}

function empiezaJuego(){
    document.onkeydown = (e) =>{
        let confirmacion; 
        let letra = e.key.toUpperCase();
        if(!verificarLetra(e.key)){
            if(palabraSecreta.includes(letra)){
                // console.log(letra);
                
                for(let i=0; i< palabraSecreta.length; i++){
                    if(palabraSecreta[i] == letra){
                        escribirLetraCorrecta(i);
                        adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
                        // console.log(palabraSecreta.indexOf(letra), i);
                    }
                }
                if(validarLenght()){
                    for(let i =0; i< palabraSecreta.length;i++){
                        if(palabraCorrecta.includes(palabraSecreta[i])){
                            confirmacion = true;
                            
                        }
                    }
                    if(confirmacion){
                        alert("Ganaste");
                        window.location.reload(); 
                    }
                }
            }
            else{
                if (!verificarLetra(e)) {
                    adicionarLetraIncorrecta(letra);
                    escribirLetraIncorrecta(letra, errores);
                    //console.log(errores);
                }
                if(errores == 0){
                    alert("Perdiste");
                    window.location.reload(); 
                }
                    
            }
            
    
            
        }
    }
}

botonIniciarJuego.addEventListener("click", function(){
    dibujarLineas()
    empiezaJuego()

});

function agregarPalabra(){
    let botonGuardarEmpezar = document.querySelector("#botonGuardarEmpezar");
    botonGuardarEmpezar.addEventListener("click", function(){
        
        let nuevaPalabra = textoArea.value.toUpperCase();

        palabraSecreta = nuevaPalabra;
        dibujarLineas();
        empiezaJuego();

    })
    
    
        
}agregarPalabra()
