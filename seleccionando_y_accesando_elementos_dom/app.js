

/*------------- EJERCICIO 1 - USO DE VARIABLES --------------

/*  DECLARACION DE VARIABLES 
let nombre = "jania";
let edad = 21;
let deporte_favorito = "soccer";

/* ---------- IMPRESIONES- COMO IMPRIMIR VARIABLES ---------- 
console.log("Mi nombre es: "+ nombre);
console.log("Mi edad es de: " + edad + " anos");
console.log("Mi deporte favorito es: " + deporte_favorito + ", en otra vida fui futbolista profesional");


/*------------- EJERCICIO 2 - SUMA DE DOS NUMEROS --------------
let num1 = 10;
let num2 = 5;

let suma = num1 + num2;
console.log("La suma de "+ num1 + " + " + num2 + "es igual a: " + suma);

/* ----------- EJERCICIO 4 - INPUT SI APROBO EXAMEN O NO -------------
let calificacion = prompt("Ingresa la calificacion de tu examen: ")

if(calificacion >=70){
    console.log("Felicidades, has aprobado lel examen con una calificacion de: " + calificacion);
}else{
    console.log("chale, no has aprobado el examen, tu calificacion es de: " + calificacion);
}


/* ------ EJERCICIO 5 - FUNCIONES ---------- 

function saludar(){
    console.log("Hola, estoy practicando Javascript y voy a aprender mucho. I'm sure of it!");
}

saludar();

/* --------- EJERCICIO 6 - FUNCION CON PARAMETRO -------------------

function funcion_nombre(nombre){
    console.log("Hola soy: " + nombre)
}

let nombre_usuario = prompt("Ingresa tu nombre:");
funcion_nombre(nombre_usuario);


/* -------------- FUNCION SUMA DE DOS NUMEROS CON PARAMETROS ----------------*
function suma_dos_numeros(num1,num2){
    let suma = num1 + num2 ;
    console.log("La suma de: "+ num1 + " + " + num2 + "es igual a: " + suma);
}

let numero1 = parseInt(prompt("Ingresa el valor del primer numero: "));
let numero2 = parseInt(prompt("Ingresa el valor del segundo numero: "));
suma_dos_numeros(numero1,numero2);
*/
/*-------------- EJERCICIO 7 - IMPRIMIR NUMERO MAYOR -------------------*/

function numero_mayor(num1,num2,num3){
    if(num1> num2 && num1>num3){
        console.log(num1 + " es el numero mayor");
    }else if(num2> num1 && num2>num3){
        console.log(num2 + " es el numero mayor");
    }else{
        console.log(num3 + " es el numero mayor");
    }
}

let numero_1 = parseInt(prompt("Ingresa el valor del primer numero: "));
let numero_2 = parseInt(prompt("Ingresa el valor del segundo numero: "));
let numero_3 = parseInt(prompt("Ingresa el valor del tercer numero: "));

numero_mayor(numero_1,numero_2,numero_3);