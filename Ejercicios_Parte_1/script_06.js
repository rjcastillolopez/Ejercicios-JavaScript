/*
Ejercicio 6
Leer una medida en pulgadas e imprimir su equivalente en milímetros.<br>
Dato: (25.4 mm = 1 pulgada)
*/

let pulgadas = parseFloat(prompt("Ingrese el valor en pulgadas: "));
let milimetros = Math.round(pulgadas * 25.4 * 100) / 100;

alert(`Pulgadas: ${pulgadas} in\nMilímetros: ${milimetros} mm`);
