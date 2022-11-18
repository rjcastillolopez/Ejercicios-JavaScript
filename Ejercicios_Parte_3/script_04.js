/*
Ejercicio 4
Digite el importe de una compra, en caso de que el importe sea 150 o más, se le descontará el 12%. Mostrar el
descuento otorgado y el importe de compra final
*/

let importe_compra = parseInt(prompt("Ingrese el importe de la compra: S/"));
let importe_final = importe_compra;
let descuento = 0;

if (importe_compra >= 150) {
   descuento = 0.12 * importe_compra;
   importe_final -= descuento;
}

alert(
   `Importe de la compra: S/${importe_compra}\nDescuento: S/${descuento}\nImporte final: S/${importe_final}`
);
