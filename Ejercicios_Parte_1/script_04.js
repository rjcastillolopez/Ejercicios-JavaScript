/*
Ejercicio 4
Ingresando la base y altura de un triángulo, luego mostrar su área. Fórmula: A = (b*a)/2
*/

let base = parseFloat(prompt("Ingrese la base del triángulo: "));
let altura = parseFloat(prompt("Ingrese la altura del triángulo: "));
let area = Math.round(((base * altura) / 2) * 100) / 100;

alert(`El área del triángulo es: ${area}`);
