
app.factory("carsService", function($http, $log, $q, convert) {
  
  var cars = [];
  
  function Car(brand, model, km, year) {
    this.brand = brand;
    this.model = model;
    this.km = km;
    this.mile = convert.distance(this.km, "KM", "MILE");
    this.year = year;
  }
  Car.prototype.kmPerYear = function() {
    return (this.km / ((new Date()).getFullYear() - this.year));
  }
  
  
  function create(brand, model, km, year) {
    return new Car(brand, model, km, year);
  }
  
  // This function loads all the cars into the car array
  function getAll() {
    var async = $q.defer();
    
    $http.get('cars.json').then(function(response) {
        response.data.forEach(function(plainObj) {
          var car = new Car(plainObj.brand, plainObj.model, plainObj.km, plainObj.year);
          cars.push(car);
        });
        async.resolve(cars);
      }, function(error) {
        $log.error(error);
        async.reject("failed to load cars.json");
      });
      
    return async.promise;
  }
  
  function add(car) {
    cars.push(car);
  }
  
  function deleteCar(car) {
    var index = cars.indexOf(car);
    cars.splice(index, 1);
  }
  
  return {
    create : create,
    getAll : getAll,
    add : add,
    deleteCar : deleteCar
  }

});