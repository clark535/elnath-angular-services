app.service('CarsService', ['$http', function($http){
    var self = this;//self here refers to the controller. self is what ever it is actually inside of

    

    self.cars = {list: [] };//list: makes it an object, keeping it on the DOM even when refreshed.
     



self.getCars = function() {
    $http({
     method: 'GET',
     url: '/cars'         
     }).then(function(response) {
         console.log('response', response);
         self.cars.list = response.data;//this fills up the companies array with the table from the database.
 });
 };

 self.addCars = function(newCar) {
    console.log('post button 2 was clicked')
    $http({
        method: 'POST',
        url: '/cars',
        data: newCar        
        }).then(function(response) {
            console.log('response', response);
            self.newCar = response.data;
            self.newCar = {};
            // self.newCar.year = '';
            // self.newCar.model = '';
            // self.newCar.nickname = '';
            // self.newCar.company_id = '';
            self.getCars();
            
    });
    };  


 self.getCars();
}]);