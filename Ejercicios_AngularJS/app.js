// Cálculo del descuento
function descuento(tarefa) {
   if (tarefa > 500) {
      return tarefa * 0.1;
   } else {
      return 0;
   }
}

var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
   // Cálculo de la tarifa
   $scope.calcularTarifa = function () {
      let valor = 0;
      if ($scope.distancia > 0 && $scope.distancia <= 300) {
         valor = 250;
      } else if ($scope.distancia > 300 && $scope.distancia <= 1000) {
         valor = 250 + ($scope.distancia - 300) * 30;
      } else if ($scope.distancia > 1000) {
         valor = 250 + 700 * 30 + ($scope.distancia - 1000) * 20;
      } else {
         valor = 0;
      }
      $scope.tarifa = valor.toFixed(2);
      $scope.descuento = descuento(valor).toFixed(2);
      $scope.total = (valor - $scope.descuento).toFixed(2);
   };
});
