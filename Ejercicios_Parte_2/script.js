function Ejercicio_01() {
   let varones = parseInt(prompt("Ingrese la cantidad de varones: "));
   let mujeres = parseInt(prompt("Ingrese la cantidad de mujeres: "));
   let total = varones + mujeres;
   let porcentaje_varones = ((varones / total) * 100).toFixed(2);
   let porcentaje_mujeres = ((mujeres / total) * 100).toFixed(2);

   alert(
      `Total varones y mujeres: ${total}\nPorcentaje de varones: ${porcentaje_varones}\nPorcentaje de mujeres: ${porcentaje_mujeres}`
   );
}

function Ejercicio_02() {
   let inversion = parseInt(prompt("Ingrese el monto de la inversión: S/"));
   let av1 = (inversion * 0.35).toFixed(2); // 35%
   let av2 = (inversion * 0.25).toFixed(2); // 25%
   let av3 = (inversion * 0.1).toFixed(2); // 10%
   let av4 = (inversion * 0.15).toFixed(2); // 15%
   let av5 = (inversion * 0.15).toFixed(2); // 15%

   alert(
      `Monto de inversión: S/${inversion}\nAvenida La Mar: S/${av1}\nAvenida Abancay: S/${av2}\nAvenida 28 de Julio: S/${av3}\nAvenida Aviación: S/${av4}\nAvenida Tacna: S/${av5}`
   );
}

function Ejercicio_03() {
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

   alert(
      `Total Entradas Generales: ${total_entradas_generales}\nTotal Entradas Mayores: ${total_entradas_mayores}\nTotal Entradas Menores: ${total_entradas_menores}\nTotal Entradas: ${total_entradas}`
   );
}
