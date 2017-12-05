var myApp = angular.module('MyApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/about', {
        templateUrl: '/views/about.html',
        controller: 'AboutController as vm'
    }).otherwise({
        template: '<h1>404</h1>'//if they go to a link that does not work
    });
});

myApp.controller('HomeController', function(){
    var self = this;
    self.message = 'What up homie??';
});

myApp.controller('AboutController', function(){
    var self =this;
    self.message = 'What about them tacos??';
})
