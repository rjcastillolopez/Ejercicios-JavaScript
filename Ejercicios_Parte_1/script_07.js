/*
Ejercicio 7
Ingresar un número y luego mostrar la suma de sus cifras elevada al cuadrado.
*/

let numero = parseInt(prompt("Ingrese un número: "));

// suma de las cifras del número elevada al cuadrado
let suma_cifras = 0;
let numero_aux = numero;
while (numero_aux > 0) {
   suma_cifras += numero_aux % 10;
   numero_aux = parseInt(numero_aux / 10);
}

alert(`Suma de las cifras del número elevada al cuadrado: ${suma_cifras ** 2}`);
