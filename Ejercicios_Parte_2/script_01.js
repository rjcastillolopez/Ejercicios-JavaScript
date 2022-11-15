/*
Ejercicio 01
Un maestro desea saber qué porcentaje de hombres y qué porcentaje de mujeres hay en un grupo de estudiantes.
Elaborar un programa que permita ingresar la cantidad de varones y mujeres y muestre el porcentaje de estos para
su grupo de estudiantes.
*/

let varones = parseInt(prompt("Ingrese la cantidad de varones: "));
let mujeres = parseInt(prompt("Ingrese la cantidad de mujeres: "));
let total = varones + mujeres;
let porcentaje_varones = Math.round((varones / total) * 100) / 100;
let porcentaje_mujeres = Math.floor((mujeres / total) * 100) / 100;

alert(
   `Total varones y mujeres: ${total}\nPorcentaje de varones: ${porcentaje_varones}\nPorcentaje de mujeres: ${porcentaje_mujeres}`
);
