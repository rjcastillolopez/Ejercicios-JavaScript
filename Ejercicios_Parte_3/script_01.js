/*
Ejercicio 01
Elaborar un programa que permita ingresar el nombre del trabajador, su sueldo básico y el número de hijos, se
deberá mostrar su bonificación y el sueldo final. Tenga en cuenta que la empresa está dando una bonificación del
7% del sueldo básico sólo en el caso el trabajador tuviese hijos.
*/

let nombre = prompt("Ingrese el nombre del trabajador: ");
let sueldo = parseFloat(prompt("Ingrese el sueldo del trabajador: S/"));
let nro_hijos = parseInt(prompt("Ingrese el número de hijos: "));
let sueldo_final = sueldo;
let bonificacion = 0;

if (nro_hijos > 0) {
   bonificacion = 0.05 * sueldo;
   sueldo_final += bonificacion;
}

alert(
   `Nombre: ${nombre}\nBonificación: S/${bonificacion}\nSueldo final: S/${sueldo_final}`
);
