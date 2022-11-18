function Ejercicio_01() {
   let suma = function (x, y) {
      return x + y;
   };

   let resta = function (x, y) {
      return x - y;
   };

   let multiplicacion = function (x, y) {
      return x * y;
   };

   let division = function (x, y) {
      return x / y;
   };

   let potencia = function (x, y) {
      return Math.pow(x, y);
   };

   let raiz_cuadrada = function (x) {
      return Math.sqrt(x);
   };

   let opcion, num1, num2, num, resultado;

   while (true) {
      opcion = prompt(
         "1: suma\n2: resta\n3: multiplicación\n4: división\n5: potencia\n6: raíz cuadrada\n\nIngresar opción:"
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
      if (opcion < 1 || opcion > 6) {
         alert("Opción no válida");
         continue;
      } else {
         break;
      }
   }

   if (opcion != 6) {
      num1 = parseFloat(prompt("Ingrese el primer número: "));
      num2 = parseFloat(prompt("Ingrese el segundo número: "));
   } else {
      num = parseFloat(prompt("Ingrese el número: "));
   }

   switch (opcion) {
      case 1:
         resultado = suma(num1, num2);
         break;
      case 2:
         resultado = resta(num1, num2);
         break;
      case 3:
         resultado = multiplicacion(num1, num2);
         break;
      case 4:
         resultado = division(num1, num2).toFixed(2);
         break;
      case 5:
         resultado = potencia(num1, num2);
         break;
      case 6:
         resultado = raiz_cuadrada(num).toFixed(2);
         break;
      default:
         break;
   }
   alert(`El resultado es: ${resultado}`);
}

function Ejercicio_02() {
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
}
