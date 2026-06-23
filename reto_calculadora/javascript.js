

/*-------- Guardar info en las variables ------ */
let inputNum1 = document.getElementById("num1");
let inputNum2 = document.getElementById("num2");
let boton_suma = document.getElementById("boton-suma");
let boton_resta = document.getElementById("boton-resta");
let boton_division = document.getElementById("boton-division");
let boton_multiplicacion = document.getElementById("boton-multiplicacion");
let boton_reiniciar = document.getElementById("boton-reiniciar");
let parrafo = document.getElementById("Impresion-operacion");


/*------- EVENTO PARA EL BOTON DE SUMAR ------------ */
boton_suma.addEventListener("click", function(){
   let int_num1 = Number(inputNum1.value);
    let int_num2 = Number(inputNum2.value);


    let suma = int_num1 + int_num2;
    parrafo.innerHTML += "La suma de" + int_num1 +" + "+ int_num2 +" es igual a: " + suma + "<br>";
});

/*------- EVENTO PARA EL BOTON DE RESTAR ------------ */

boton_resta.addEventListener("click", function(){
     
    let int_num1 = Number(inputNum1.value);
    let int_num2 = Number(inputNum2.value);

    let resta = int_num1-int_num2;

    parrafo.innerHTML += "La resta de " + int_num1 +" - " + int_num2 + " es igual a: " + resta + "<br>";
});


/*------- EVENTO PARA EL BOTON DE MULTIPLICAR ------------ */

boton_multiplicacion.addEventListener("click", function(){

    let int_num1 = Number(inputNum1.value);
    let int_num2 = Number(inputNum2.value);

    let multiplicacion = int_num1 * int_num2;
    
    parrafo.innerHTML += "La multiplicacion de " + int_num1 + " * " + int_num2 + "es igual a: " + multiplicacion + "<br>";
});

/*------- EVENTO PARA EL BOTON DE DIVISION ------------ */

boton_division.addEventListener("click", function(){
    let int_num1 = Number(inputNum1.value);
    let int_num2 = Number(inputNum2.value);

    let division = int_num1 / int_num2;

    parrafo.innerHTML += "La division de "+int_num1+" / "+int_num2 + " es igual a: "+ division + "<br>";
})

/* --------- EVENTO PARA EL BOTON DE REINICIAR ---------- */
boton_reiniciar.addEventListener("click", function(){
    inputNum1.value = "";
    inputNum2.value = "";

    parrafo.innerHTML += "";
    console.log("COnsola reiniciado exitosamente");
});
