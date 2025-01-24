// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo(){

    let nuevoNombre = document.querySelector('input').value;
    nuevoNombre ? nombresAmigos.push(nuevoNombre) : alert("debes escribir un nombre");
    document.querySelector('input').value = "";
    console.log(nombresAmigos);
    
}