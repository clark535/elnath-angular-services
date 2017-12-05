
app.controller('CompanyController', ['CompanyService', function(CompanyService){
    var self = this;
    console.log(CompanyService.companies);
    self.companies = CompanyService.companies;
    
}]);