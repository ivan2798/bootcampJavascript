/**
 * Detemrinar si un valor a es mayor a uno b
 */

let a;
let b;

//asigno valores
a = 10;
b = 15;

//relacional
let c = a> b;

console.log("Resultado de a > b",c);

//--------------

/**
 * determinar entre a,b y c el mayot valor
 */

let x,y,z;

a = prompt("Ingrese el valor de x");
b = prompt("Ingrese el valor de y");

//if
if (a > b) {
    console.log("b es mayor");
}else{
    if (b > a) {
        console.log("b es mayor");
    } else {
        console.log("a y b son iguales");
    }
}

/*
if ( a > b) {
    console.log("a es mayor");
} else if( b < a){
    console.log("b es mayor");
} else {
    console.log("son iguales");
}
*/
/*-----------------------------*/

/**
 * Operadores logicos
 * and 
 * or
 * not
 */