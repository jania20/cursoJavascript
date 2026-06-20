
/* ------- variables que guardan datos elementos del dom -------*/
let InputNombre = document.getElementById("nombre");
let boton = document.querySelector("button");
let parrafo = document.querySelector("p");

/* ------- evento cuando usuario le da click al boton de mostrar mensaje -------*/
boton.addEventListener("click",function(){
    parrafo.textContent="Hola minombre es: "+ InputNombre.value;
});

