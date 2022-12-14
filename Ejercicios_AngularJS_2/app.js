// Cálculo del descuento
function descuento(sueldo) {
   if (sueldo < 500) {
      return 0;
   } else if (sueldo >= 500 && sueldo < 1000) {
      return sueldo * 0.02;
   } else if (sueldo >= 1000 && sueldo < 4000) {
      return sueldo * 0.08;
   } else if (sueldo >= 4000 && sueldo < 8000) {
      return sueldo * 0.15;
   } else if (sueldo >= 8000 && sueldo < 10000) {
      return sueldo * 0.21;
   } else if (sueldo >= 10000) {
      return sueldo * 0.3;
   } else {
      return 0;
   }
}

// Validación de los datos de entrada numéricos
function validate(param, value, min, max) {
   if (value == "") {
      alert(`El campo ${param} no puede estar vacío`);
      return false;
   } else if (isNaN(value)) {
      alert(`El campo ${param} debe ser un número`);
      return false;
   } else if (value < min || value > max) {
      alert(`El campo ${param} debe estar entre ${min} y ${max}`);
      return false;
   } else {
      return true;
   }
}

// Validación del formulario
function validateForm(scope) {
   if (!validate(`"Horas trabajadas"`, scope.horas, 1, 10)) {
      return false;
   }
   if (!validate(`"Tarifa por hora"`, scope.tarifaHora, 1, 100)) {
      return false;
   }
   return true;
}

var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
   $scope.calcularSalario = function () {
      // Cálculo del salario base
      var tarifaHora;
      if ($scope.tarifaHora == undefined) {
         tarifaHora = 25;
      } else {
         tarifaHora = $scope.tarifaHora;
      }
      var horas = $scope.horas;
      var salario = horas * tarifaHora;
      // Asignación de los valores a las variables del scope
      $scope.salarioBase = salario.toFixed(2);
      $scope.descuento = descuento(salario).toFixed(2);
      $scope.salarioNeto = (salario - $scope.descuento).toFixed(2);
   };
});
