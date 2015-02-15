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
    var range = $slider.val();
    currentPage = 0;
    MovieService.filterByRating(range[0], range[1], currentPage, limit).then(function(movies){
      $scope.movies = movies;
    });
  }

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  var $slider = $("#slider");
  $slider.noUiSlider({
    start: [ 0, 10 ],
    connect: true,
    step: 0.5,
    range: {
      'min': 0,
      'max': 10
    }
  });
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
  $slider.on({change: $scope.filterMovies});
        
}])

.controller('MovieDetailCtrl', ['$scope', '$location', 'movie', function($scope, $location, movie){
  if(!movie){
    $location.path('/movies');
  }
  
  //assign the movie passed-in to $scope.movie, complete code below  
  

}])

;