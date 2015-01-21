angular.module('directory.controllers', [])

  .controller('EmployeeIndexCtrl', function ($scope, EmployeeService) {

    $scope.searchKey = "";

    $scope.clearSearch = function () {
      $scope.searchKey = "";
      findAllEmployees();
    };

    $scope.search = function () {
      EmployeeService.findByName($scope.searchKey).then(function (employees) {
        $scope.employees = employees;
      });
    };

    var findAllEmployees = function() {
      EmployeeService.findAll().then(function (employees) {
        $scope.employees = employees;
      });
    };

    findAllEmployees();

  })
    
  .controller('EmployeeDetailCtrl', function($scope, employee) {
    $scope.employee = employee;  
  })    
   
  .controller('EmployeeReportsCtrl', function ($scope, employee, reports) {
    $scope.employee = employee;
    $scope.reports = reports;
  })
   
    
;