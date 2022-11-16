/*
Ejercicio 5
Ingrese el nombre de un alumno y las notas de su examen parcial, examen final y el promedio de prácticas; muestre
el nombre del alumno y su promedio final solo si el alumno está aprobado. Tenga en cuenta que para el cálculo del
promedio la nota del examen final tiene peso doble.
*/

let alumno = prompt("Ingrese el nombre del alumno: ");
let nota_parcial = parseFloat(prompt("Ingrese la nota del examen parcial: "));
let nota_final = parseFloat(prompt("Ingrese la nota del examen final: "));
let nota_practicas = parseFloat(prompt("Ingrese la nota de las prácticas: "));
let promedio_final = (nota_parcial + 2 * nota_final + nota_practicas) / 4;

if (promedio_final >= 11) {
   alert(
      `El alumno ${alumno} ha aprobado el curso.\nPromedio final: ${promedio_final.toFixed(
         2
      )}`
   );
}
