app.service('CompanyService', ['$http', function($http){
    var self = this;//self here refers to the controller. self is what ever it is actually inside of

    self.companies = [
        {
            name: 'Ford',
            country: 'USA',
        },
        {
            name: 'Toyota',
            country: 'Japan',
        },
        {
            name: 'Aston Martin',
            country: 'UK',
        },
        {
            name: 'VolksWagen',
            country: 'Germany',
        }
    ]
}]);