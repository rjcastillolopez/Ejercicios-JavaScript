/*
Ejercicio 2: Convertir  Celsius a Fahrenheit y viceversa
*/

let CelsiusToFahrenheit = (grado) => {
   return (grado * 1.8 + 32).toFixed(2);
};

let FahrenheitToCelsius = (grado) => {
   return ((grado - 32) / 1.8).toFixed(2);
};

let opcion, grado, resultado;

while (true) {
   opcion = prompt(
      "1: Celsius a Fahrenheit\n2: Fahrenheit a Celsius\n\nIngresar opción:"
   );
   if (opcion === null) {
      // Cancelar
      return;
   }
   if (opcion === "") {
      // Vacío
      alert("Ingrese una opción");
      continue;
   }
   if (isNaN(opcion)) {
      // No es un número
      alert("Opción no válida. Ingrese un número");
      continue;
   }
   // Es un número
   opcion = parseInt(opcion);
   if (opcion < 1 || opcion > 2) {
      alert("Opción no válida");
      continue;
   } else {
      break;
   }
}

if (opcion === 1) {
   grado = parseFloat(prompt("Ingrese grados en Celsius: "));
}
if (opcion === 2) {
   grado = parseFloat(prompt("Ingrese grados en Fahrenheit: "));
}

switch (opcion) {
   case 1:
      resultado = CelsiusToFahrenheit(grado);
      alert(`${grado}°C = ${resultado}°F`);
      break;
   case 2:
      resultado = FahrenheitToCelsius(grado);
      alert(`${grado}°F = ${resultado}°C`);
      break;
   default:
      alert("Operación no válida");
      break;
}
