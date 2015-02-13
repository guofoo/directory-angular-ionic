angular.module('movie.controllers', [])

.controller('MovieHomeCtrl', ['$scope', 'MovieService', function($scope, MovieService){
  var limit = 20, currentPage = 0;
  
  //initially we just load 20 movies
  MovieService.getMovies(currentPage, limit).then(function(movies){
    $scope.movies = movies;
  });   

  //this is called to further load movies from our MovieService data source
  //it mocks actual api calls to retrive data from a database
  $scope.loadMoreData = function(){
    currentPage += 1; //keep track of current page, so we know how many records have been loaded
    
    //please replace the empty array in concat using getMovies method from MovieService
    //concat append movies to $scope.movies
    $scope.movies = $scope.movies.concat(/* fill in the code to get movies from MovieService */);
    
    //this is to notify ionic infinite scroller we have loaded data
    //ionic will take care of scrolling in the view
    $scope.$apply(function(){
      //use angular's event system to communicate with ionic library
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
  
  //this is called to find out if there are more data to load
  //if return true, infiniteScroll tries to load more data
  $scope.hasMoreData = function(){
    //we want to know if MovieService has more data for currentPage+1 
    //fill in code below to complete this method
    
  };
  
}])

;