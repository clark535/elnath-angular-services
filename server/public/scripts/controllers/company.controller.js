
app.controller('CompanyController', ['CompanyService', function(CompanyService){//dependency injection
    var self = this;
    console.log(CompanyService.companies);
    self.companies = CompanyService.companies;//links view and service. Turns CompanyServce into companies
    
}]);