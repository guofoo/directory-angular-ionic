angular.module('movie.controllers', [])

.controller('MovieHomeCtrl', ['$scope', 'MovieService', '$ionicPopover', function($scope, MovieService, $ionicPopover){
  $scope.sortKey = '';
  var sortOrder = 1;
  $scope.searchKey = '';

  var limit = 20, currentPage = 0;
  
  MovieService.getMovies(currentPage, limit).then(function(movies){
    $scope.movies = movies;
  });   

  $scope.loadMoreData = function(){
    currentPage += 1;
    $scope.movies = $scope.movies.concat(MovieService.loadPage(currentPage, limit));
    $scope.$apply(function(){
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
  
  $scope.hasMoreData = function(){
    return MovieService.hasMore(currentPage+1, limit);
  };
  
  $scope.$watch('searchKey', function(){
    currentPage = 0;
    MovieService.searchMovies($scope.searchKey, currentPage, limit).then(function(movies){
      $scope.movies = movies;
    }); 
  });

  $scope.sortMovies = function(sortKey){
    if ($scope.sortKey == sortKey){
      sortOrder = (-1) * sortOrder;
    }
    currentPage = 0;
    $scope.sortKey = sortKey;
    MovieService.sortMovies($scope.sortKey, sortOrder, currentPage, limit).then(function(movies){
      $scope.movies = movies;
    }); 
  };

  $scope.filterMovies = function(){
    var range = $slider.val();//range is a array of two elements [low, high]
    //set currentPage to 0 to get first 20 results of rating
    //Use method in MovieService and values from range to filter movies based on rating




  };

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  //example configuration to use jquery noUiSlider
  var $slider = $("#slider");
  //initialize the slider configuration
  $slider.noUiSlider({
    start: [ 0, 10 ], //to start, filter movies rating from 0 to 10, that is all movies
    connect: true,
    step: 0.5, //increment step interval is 0.5
    range: { //set the filter rating between 0 and 10
      'min': 0,
      'max': 10
    }
  });
  //use slider tooltip to show the actual values of filter
  $slider.Link('lower').to('-inline-<div class="tooltip"></div>', function ( value ) {
    $(this).html(
      '<span>' + value.substr(0, value.length - 1) + '</span>'
    );
  });
  $slider.Link('upper').to('-inline-<div class="tooltip"></div>', function ( value ) {
    $(this).html(
      '<span>' + value.substr(0, value.length - 1) + '</span>'
    );
  });
  //wire the change event on slider to the $scope.filterMovies method
  //so the filter method is triggered when values change in slider
  $slider.on({change: $scope.filterMovies});
        
}])

;