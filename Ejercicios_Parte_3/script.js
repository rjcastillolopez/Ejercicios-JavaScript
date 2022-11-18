function Ejercicio_01() {
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
}

function Ejercicio_02() {
   let numero = parseInt(prompt("Ingrese un número: "));

   if (numero > 500) {
      alert(`El 18% de ${numero} es: ${(numero * 0.18).toFixed(2)}`);
   }
}

function Ejercicio_03() {
   let numero = parseInt(prompt("Ingrese un número: "));

   let factorial = 1;
   for (let i = 2; i <= numero; i++) {
      factorial *= i;
   }

   alert(`El factorial de ${numero} es: ${factorial}`);
}

function Ejercicio_04() {
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
}

function Ejercicio_05() {
   let alumno = prompt("Ingrese el nombre del alumno: ");
   let nota_parcial = parseFloat(
      prompt("Ingrese la nota del examen parcial: ")
   );
   let nota_final = parseFloat(prompt("Ingrese la nota del examen final: "));
   let nota_practicas = parseFloat(
      prompt("Ingrese la nota de las prácticas: ")
   );
   let promedio_final = (nota_parcial + 2 * nota_final + nota_practicas) / 4;

   if (promedio_final >= 11) {
      alert(
         `El alumno ${alumno} ha aprobado el curso.\nPromedio final: ${promedio_final.toFixed(
            2
         )}`
      );
   }
}
