/*
Ejercicio 5
Ingresar un valor en dólares, luego mostrar su equivalente en soles.<br>
Dato: 1 dólar es 3.38 soles.
*/

let total_dolares = parseFloat(prompt("Ingrese el total en dólares:"));
let total_soles = Math.round(total_dolares * 3.38 * 100) / 100;

alert(`Dólares: $${total_dolares}\nSoles: S/${total_soles}`);
