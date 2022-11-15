function Ejercicio_01() {
   let primer_numero = parseInt(prompt("Ingrese el primer número: "));
   let segundo_numero = parseInt(prompt("Ingrese el segundo número: "));

   let suma = primer_numero + segundo_numero;
   let producto = primer_numero * segundo_numero;

   alert(
      `La suma de los números es: ${suma}\nEl producto de los números es: ${producto}`
   );
}

function Ejercicio_02() {
   let numero = parseInt(prompt("Ingrese un número: "));
   let porcentaje = Math.round(numero * 0.2 * 100) / 100;

   alert(`El 20% de ${numero} es: ${porcentaje}`);
}

function Ejercicio_03() {
   let metros = parseFloat(prompt("Ingrese el valor en metros: "));
   let centimetros = metros * 100;
   let milimetros = centimetros * 10;

   alert(
      `Metros: ${metros} m\nEquivalencias:\nCentimetros: ${centimetros} cm\nMilímetros: ${milimetros} mm`
   );
}

function Ejercicio_04() {
   let base = parseFloat(prompt("Ingrese la base del triángulo: "));
   let altura = parseFloat(prompt("Ingrese la altura del triángulo: "));
   let area = Math.round(((base * altura) / 2) * 100) / 100;

   alert(`El área del triángulo es: ${area}`);
}

function Ejercicio_05() {
   let total_dolares = parseFloat(prompt("Ingrese el total en dólares:"));
   let total_soles = Math.round(total_dolares * 3.38 * 100) / 100;

   alert(`Dólares: $${total_dolares}\nSoles: S/${total_soles}`);
}

function Ejercicio_06() {
   let pulgadas = parseFloat(prompt("Ingrese el valor en pulgadas: "));
   let milimetros = Math.round(pulgadas * 25.4 * 100) / 100;

   alert(`Pulgadas: ${pulgadas} in\nMilímetros: ${milimetros} mm`);
}

function Ejercicio_07() {
   let numero = parseInt(prompt("Ingrese un número: "));

   // suma de las cifras del número elevada al cuadrado
   let suma_cifras = 0;
   let numero_aux = numero;
   while (numero_aux > 0) {
      suma_cifras += numero_aux % 10;
      numero_aux = parseInt(numero_aux / 10);
   }

   alert(
      `Suma de las cifras del número elevada al cuadrado: ${suma_cifras ** 2}`
   );
}

function Ejercicio_08() {
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
}

function Ejercicio_09() {
   const IGV = 0.19;
   let precio_producto = parseFloat(prompt("Precio del producto: "));
   let valor_igv = precio_producto * IGV;
   let precio_producto_con_igv = precio_producto + valor_igv;

   alert(
      `Precio del producto: ${precio_producto}\nValor IGV: ${valor_igv}\nPrecio del producto con IGV: ${precio_producto_con_igv}`
   );
}

function Ejercicio_10() {
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
      total_entradas_generales +
      total_entradas_mayores +
      total_entradas_menores;

   // mostrar total_entradas_generales, total_entradas_mayores, total_entradas_menores, total_entradas en un mismo alert alineado a la izquierda
   alert(
      `Total Entradas Generales: ${total_entradas_generales}\nTotal Entradas Mayores: ${total_entradas_mayores}\nTotal Entradas Menores: ${total_entradas_menores}\nTotal Entradas: ${total_entradas}`
   );
}
