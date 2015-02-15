angular.module('movie.controllers', [])

//$ionicPopover provides the popover menu needed to show the sort options
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

  //sort movie funcionality
  //sortKey is passed in from ng-click on view
  $scope.sortMovies = function(sortKey){
    //click the same sorkey for the reverse order
    //use sortOrder to keep track of the order of sorting
    if ($scope.sortKey == sortKey){
      sortOrder = (-1) * sortOrder;
    }
    //set currentPage to 0 makes sure to grab the first 20 records of sorting results
    currentPage = 0;
    //save sortKey to scope and complete the sort movies function using function in MovieService




  };


  //shows the usage of $ionicPopover, see ionic documentation for detail explanation.
  //the name for the popover view is 'templates/popover', it is the templateUrl for the $ionicPopover directive.
  //we use ng-template to provide the view, it is in the movie-index.html
  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    //attach the current scope, so ng-click in the popover template is wired to the method defined above
    scope: $scope, 
  }).then(function(popover) {
    $scope.popover = popover;
  });
        
}])

;