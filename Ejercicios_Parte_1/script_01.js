/* 
Ejercicio 01
Se debe permitir ingresar dos números, luego mostrar la suma y el producto de ambos. 
*/

let primer_numero = parseInt(prompt("Ingrese el primer número: "));
let segundo_numero = parseInt(prompt("Ingrese el segundo número: "));

let suma = primer_numero + segundo_numero;
let producto = primer_numero * segundo_numero;

alert(
   `La suma de los números es: ${suma}\nEl producto de los números es: ${producto}`
);
