/*
Ejercicio 3
Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos
los enteros entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por
ejemplo 5! = 1x2x3x4x5=120)
*/

let numero = parseInt(prompt("Ingrese un número: "));

let factorial = 1;
for (let i = 2; i <= numero; i++) {
   factorial *= i;
}

alert(`El factorial de ${numero} es: ${factorial}`);
