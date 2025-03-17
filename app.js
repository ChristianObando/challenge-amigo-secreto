let arrayNombres = []
let arrayResultados = []

// alimnetar el array:
document.addEventListener("keydown",function(event){
    if(event.key === 'Enter'){
        agregarAmigo()
    }
})
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    arrayNombres.push (nombre);
    console.log(arrayNombres);
    document.getElementById('amigo').value = "";
    listaAmigos();    
};
// crear lista
function listaAmigos(){
    let lista = document.getElementById('listaAmigos');
    let item = document.createElement("li");

     for (i = 0; i < arrayNombres.length; i++){         
        item.textContent = arrayNombres[i];
        lista.appendChild(item);
    }
}
//sortear amigo
function sortearAmigo(){ 
    
   if(arrayNombres.length === arrayResultados.length){
        alert("sorteo finalizado")
   } else{

    if(arrayNombres.length > 0){

        let resultadoSorteo = Math.floor(Math.random()* arrayNombres.length );        
            
        if(arrayResultados.includes(resultadoSorteo)){
            sortearAmigo()
        }else{
            arrayResultados.push(resultadoSorteo)
            
            let lista = document.getElementById ('resultado')
            let item = document.createElement('li')    
    
            for (i = 0; i < arrayNombres.length; i++){         
                item.textContent = arrayNombres[resultadoSorteo];
                lista.appendChild(item);
            }
        }
    }else{
        alert("debe registrar almenos un nombre para poder realizar un sorteo");
        
        }
    }
}
