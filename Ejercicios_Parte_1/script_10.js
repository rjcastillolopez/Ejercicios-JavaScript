/*
Ejercicio 10
Una empresa realiza anualmente un evento para fines solidarios con las comunidades nativas del Perú, para ello, se
requiere un algoritmo que permita ingresar la cantidad de entradas vendidas de los tres tipos detallados en el siguiente
tarifario:
Concepto                     Precio
Entrada general              S/ 150.00
Entrada para mayores de 65   S/ 50.00
Entrada para menores de edad S/ 80.00
Luego mostrar la cantidad de dinero recaudado por cada tipo de tarifa y el monto recaudado en total.
*/

let cantidad_entrada_general = parseInt(
   prompt("Total entradas general S/ 150.00: ")
);
let cantidad_entrada_mayores = parseInt(
   prompt("Total entradas para mayores de 65 S/50.00: ")
);
let cantidad_entrada_menores = parseInt(
   prompt("Total entradas para menores de edad S/ 80.00: ")
);

let total_entradas_generales = cantidad_entrada_general * 150;
let total_entradas_mayores = cantidad_entrada_mayores * 50;
let total_entradas_menores = cantidad_entrada_menores * 80;
let total_entradas =
   total_entradas_generales + total_entradas_mayores + total_entradas_menores;

// mostrar total_entradas_generales, total_entradas_mayores, total_entradas_menores, total_entradas en un mismo alert alineado a la izquierda
alert(
   `Total Entradas Generales: ${total_entradas_generales}\nTotal Entradas Mayores: ${total_entradas_mayores}\nTotal Entradas Menores: ${total_entradas_menores}\nTotal Entradas: ${total_entradas}`
);
