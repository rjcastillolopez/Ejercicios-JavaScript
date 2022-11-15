/*
Ejercicio 2
Se debe permitir ingresar un número entero, luego mostrar el 20% de este número.
*/

let numero = parseInt(prompt("Ingrese un número: "));
let porcentaje = Math.round(numero * 0.2 * 100) / 100;

alert(`El 20% de ${numero} es: ${porcentaje}`);
