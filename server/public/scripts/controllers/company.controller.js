
app.controller('CompanyController', ['CompanyService', function(CompanyService){//dependency injection
    var self = this;
    
    console.log(CompanyService.companies);
    self.companies = CompanyService.companies;//links view and service. Turns CompanyServce into companies
    self.addCompany = CompanyService.addCompany;//adding the function here to use it from services to html
    self.newCompany = CompanyService.newCompany;
}]);