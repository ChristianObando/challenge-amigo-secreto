// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
let listaSorteo = [];
let i = 0;


function agregarAmigo(){
    let nuevoNombre = document.querySelector('input').value;
    nuevoNombre ? nombresAmigos.push(nuevoNombre) : alert("debes escribir un nombre");
    document.querySelector('input').value = "";
    tablaNombres();
}

function tablaNombres(){
    let tabla = document.getElementById('listaAmigos');
    tabla.innerHTML ="";

    for(i = 0 ; i < nombresAmigos.length ; i++){

        let agregarNombre = document.createElement('li');
        agregarNombre.textContent = nombresAmigos[i];
        tabla.appendChild(agregarNombre)

    }
}

function deshabilitarBoton(){
    estadoBoton = document.querySelector('.button-draw'); 
    if (nombresAmigos.length === listaSorteo.length) {
        alert("sorteo Finalizado");   
        estadoBoton.disabled = true            
    }
}

function sortearAmigo(){        

    if(nombresAmigos.length > 0){

        let elegido = Math.floor(Math.random () * nombresAmigos.length ); // genera el nuemro aleatorio para elegir nombre

            if(listaSorteo.includes(elegido)){
                return sortearAmigo();
            }else{
                let resultado = document.getElementById('resultado');
                resultado.innerHTML = "";

                let agregarResultado = document.createElement('li');
                agregarResultado.textContent = nombresAmigos[elegido];
                resultado.appendChild(agregarResultado);
                
                listaSorteo.push(elegido);
                deshabilitarBoton();        
            }
    }else{
        alert("debe registrar almenos 1 nombre para realizar el sorteo")       
    }
}

