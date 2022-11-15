/*
Ejercicio 2
La municipalidad de Pueblo Libre piensa invertir cierto monto de dinero en la reparación de las pistas en las
avenidas principales. Desarrollar un pseudocódigo que permita ingresar un monto de inversión en soles y lo reparta
en la refacción de cinco avenidas de la siguiente manera:
- Avenida La Mar - 35% del monto
- Avenida Abancay - 25% del monto
- Avenida 28 de Julio - 10% del monto
- Avenida Aviación - 15% del monto
- Avenida Tacna - restante del monto
*/

let inversion = parseInt(prompt("Ingrese el monto de la inversión: S/"));
let av1 = Math.round(inversion * 0.35 * 100) / 100; // 35%
let av2 = Math.round(inversion * 0.25 * 100) / 100; // 25%
let av3 = Math.round(inversion * 0.1 * 100) / 100; // 10%
let av4 = Math.round(inversion * 0.15 * 100) / 100; // 15%
let av5 = Math.round(inversion * 0.15 * 100) / 100; // 15%

alert(
   `Monto de inversión: S/${inversion}\nAvenida La Mar: S/${av1}\nAvenida Abancay: S/${av2}\nAvenida 28 de Julio: S/${av3}\nAvenida Aviación: S/${av4}\nAvenida Tacna: S/${av5}`
);
