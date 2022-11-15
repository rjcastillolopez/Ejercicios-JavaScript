/*
Ejercicio 8
Se debe ingresar un monto de dinero, luego mostrar cuánto le toca a cada socio según la siguiente tabla
Socio Porcentaje
A     30%
B     20%
C     50%
*/

let total = parseFloat(prompt("Monto de dinero: S/"));
// Socio A 30%
let monto_socio_a = total * 0.3;
// Socio B 20%
let monto_socio_b = total * 0.2;
// Socio C 50%
let monto_socio_c = total * 0.5;

alert(
   `Monto de dinero: S/${total}\nMonto para Socio A: S/${monto_socio_a}\nMonto para Socio B: S/${monto_socio_b}\nMonto para Socio C: S/${monto_socio_c}`
);
