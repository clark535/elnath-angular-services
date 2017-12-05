app.controller('CarsController', ['CarsService', function(CarsService){//dependency injection
    var self = this;
    
    console.log(CarsService.cars);
    self.cars = CarsService.cars;//links view and service. Turns CompanyServce into companies
    self.addCar = CarsService.addCar;//adding the function here to use it from services to html
    self.newCar = CarsService.newCar;
}]);