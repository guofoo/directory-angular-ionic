angular.module('movie.controllers', [])

.controller('MovieHomeCtrl', ['$scope', 'MovieService', function($scope, MovieService){
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
  
  //every time the searchKey model changes, it will be triggered
  //User MovieService provided search method to search for movies containing searchKey
  $scope.$watch('searchKey', function(){
    //set currentPage to 0, so return the first 20 records of search results
    currentPage = 0;
    //finish the method to search movies using MovieService provided search function



  });

}])

;