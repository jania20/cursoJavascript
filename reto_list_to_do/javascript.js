
/*--------- OBTNECION DE INFO ----------------------*/
let input_lista = document.getElementById("input-list");
let boton_agregar = document.querySelector("button");
let lista = document.getElementById("lista");


function agregar_lista(){
    let nuevo_elemento = document.createElement("li");
    nuevo_elemento.textContent = input_lista.value;
    lista.appendChild(nuevo_elemento);

    input_lista.value = "";
} 

/* ------ EVENTO PARA AGREGAR LA LISTA EN EL CONTENEDOR DANDOLE CLIK AL BOTON DE AGREGAR --------*/
boton_agregar.addEventListener("click",agregar_lista);

/* ------- EVENTO PARA AGREGAR LISTA DANDOLE CLICL AL BOTON DE ENTER EN EL TECLADO -------------*/
input_lista.addEventListener("keydown", function(event){

    if(event.key === "Enter" && input_lista.value.trim()!=null){
        agregar_lista();
    } 
})