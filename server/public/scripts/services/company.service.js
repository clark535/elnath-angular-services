app.service('CompanyService', ['$http', function($http){
    var self = this;//self here refers to the controller. self is what ever it is actually inside of

    

    self.companies = {list: [] };//list: makes it an object, keeping it on the DOM even when refreshed.
    

    self.getCompanies = function() {
       $http({
        method: 'GET',
        url: '/company'         
        }).then(function(response) {
            console.log('response', response);
            self.companies.list = response.data;//this fills up the companies array with the table from the database.
    });
    };

    self.getCompanies();
}]);