// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('directory', ['ionic','directory.services','directory.controllers'])

 .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
    
    .state('employee-index', {
      url: '/employees',
      templateUrl: 'templates/employee-index.html',
      controller: 'EmployeeIndexCtrl'
    })
    
    .state('employee', {
      url: '/employees/:employeeId',
      templateUrl: 'templates/employee-detail.html',
      controller: 'EmployeeDetailCtrl'
    })  
    
    
    ;
  
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/employees');   
 }])

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

;
