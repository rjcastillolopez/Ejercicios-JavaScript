/*
Ejercicio 2
Construir un programa que permita ingresar un número, si el número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este.
*/

let numero = parseInt(prompt("Ingrese un número: "));

if (numero > 500) {
   // 18% del número
   alert(`El 18% de ${numero} es: ${(numero * 0.18).toFixed(2)}`);
}
