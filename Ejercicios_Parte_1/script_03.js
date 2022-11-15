/* 
Ejercicio 3
Se debe permitir ingresar un valor en metros, luego mostrar su valor en centímetros y en milímetros. <br>
Datos:
- 1 metro es 100 centímetros.
- 1 centímetro es 10 milímetros. 
*/

let metros = parseFloat(prompt("Ingrese el valor en metros: "));
let centimetros = metros * 100;
let milimetros = centimetros * 10;

alert(
   `Metros: ${metros} m\nEquivalencias:\nCentimetros: ${centimetros} cm\nMilímetros: ${milimetros} mm`
);
