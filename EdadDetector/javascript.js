
/*  ------ ASIGNACION DE VARIABLES AL DOM -------------- */

let InputEdad = document.getElementById("edad");
let boton_edad = document.querySelector("button");
let parrafo = document.getElementById("mensaje_mayor_menor_edad");

/*--------------- Evento al dar click al boton de mostrar mensaje ---------------------*/
boton_edad.addEventListener("click",function(){

    let edad = Number(InputEdad.value);

    if(edad >= 18){
        parrafo.textContent = "Eres mayor de edad"
    }else{
        parrafo.textContent = "Eres menor de edad"
    }
});