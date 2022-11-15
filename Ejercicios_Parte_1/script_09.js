/*
Ejercicio 9
Desarrollar un algoritmo que pida el ingreso del precio base de un producto y se debe calcular el IGV (19% del
precio base), luego mostrar el valor del IGV y el precio final del producto (precio base más el IGV).
*/

const IGV = 0.19;
let precio_producto = parseFloat(prompt("Precio del producto: "));
let valor_igv = precio_producto * IGV;
let precio_producto_con_igv = precio_producto + valor_igv;

alert(
   `Precio del producto: ${precio_producto}\nValor IGV: ${valor_igv}\nPrecio del producto con IGV: ${precio_producto_con_igv}`
);
