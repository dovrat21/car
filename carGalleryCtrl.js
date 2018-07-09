
app.controller("carsCtrl", function($scope, carsService, $log) {
  
  // Brings cars to view
  $scope.cars = [];
  carsService.getAll().then(function(cars) {
    $scope.cars = cars;
  }, function (error) {
    $log.error(error);
  })


  // Filter cars gallery
  $scope.query = "";
  $scope.filterCars = function(car) {
    if (car.brand.toLowerCase().includes($scope.query.toLowerCase()) || 
        car.model.toLowerCase().includes($scope.query.toLowerCase())) {
      return true;
    } else {
      return false;
    }
    // return (car.brand.includes($scope.query) || car.model.includes($scope.query))
  }


  // Sorting of car gallery  
  $scope.propToOrder = "";
  $scope.reverse = false;
  $scope.updateOrderBy = function(prop) {
    if ($scope.propToOrder === prop) {
      $scope.reverse = !$scope.reverse;
    } else {
      $scope.reverse = false;
      $scope.propToOrder = prop;
    }
  }
  
  
  // Selected car handeling
  $scope.selectedCar = null;
  $scope.selectCar = function(car) {
    if (car === $scope.selectedCar) {
      $scope.selectedCar = null;
    } else {
      $scope.selectedCar = car;
    }
  }
  
})