// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
let i = 0;

function agregarAmigo(){

    let nuevoNombre = document.querySelector('input').value;
    nuevoNombre ? nombresAmigos.push(nuevoNombre) : alert("debes escribir un nombre");
    document.querySelector('input').value = "";
    tablaNombres()
    
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

