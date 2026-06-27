
/*--------- OBTNECION DE INFO ----------------------*/
let input_lista = document.getElementById("input-list");
let boton_agregar = document.querySelector("button");
let lista = document.getElementById("lista");


function agregar_lista(){
    
    if(input_lista.value.trim() !=""){
        /*-- para crear una lista ordenada (solo lista/li) --*/
        let nuevo_elemento = document.createElement("li");
        /*-- Agrega lo que ingreso el usuario --*/
        nuevo_elemento.textContent = input_lista.value + " ";
        /* -- lo pone como lista dentro del contenedor de la lista --*/
        lista.appendChild(nuevo_elemento);

        /*--- LINEA DE CODIGO PARA CUANDO SE LE DA CLICK AL BOTON DE ELIMINAR --*/
        let boton_eliminar = document.createElement("button");
        boton_eliminar.textContent = "Eliminar";
        nuevo_elemento.appendChild(boton_eliminar);
        input_lista.value = "";

        /*-- EVENTO PARA ELIMINAR UNA FILA DE LA LISTA --*/
        boton_eliminar.addEventListener("click" , function(){
            this.parentElement.remove();
        })
            }
            
} 

/* ------ EVENTO PARA AGREGAR LA LISTA EN EL CONTENEDOR DANDOLE CLIK AL BOTON DE AGREGAR --------*/
boton_agregar.addEventListener("click",agregar_lista);

/* ------- EVENTO PARA AGREGAR LISTA DANDOLE CLICL AL BOTON DE ENTER EN EL TECLADO -------------*/
input_lista.addEventListener("keydown", function(event){

    if(event.key === "Enter" && input_lista.value.trim()!=""){
        agregar_lista();
    } 
})

