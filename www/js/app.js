// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('directory', ['ionic','directory.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('EmployeesCtrl', function($scope, EmployeeService) {
  //get all employees
  EmployeeService.findAll().then(function(employees){
    $scope.employees = employees;
  });
  
  //find the second employee
  EmployeeService.findById(2).then(function(employee){
    $scope.employee = employee;
  });
  
  EmployeeService.findByName('John').then(function(searchEmployees){
    $scope.searchEmployees = searchEmployees;
  });
  
  EmployeeService.findByManager(1).then(function(employeesByManager){
    $scope.employeesByManager = employeesByManager;
  });
  
});