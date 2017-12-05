var app = angular.module('CarApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/company.html',
        controller: 'CompanyController as vm'
    }).when('/cars', {
        templateUrl: '/views/cars.html',
        controller: 'CarsController as vm'
    }).otherwise({
        template: '<h1>404</h1>'//if they go to a link that does not work
    });
});




