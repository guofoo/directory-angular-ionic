angular.module('movie.services', [])

.factory('MovieService', ['$q', '$http', function($q, $http) {
    var movies = [];
    var current = [];

    var getAllMovies = function(){
      var defer = $q.defer();
      if (movies.length === 0){
        $http.get('data/movies.json').success(function(data){
          movies = data;
          defer.resolve(movies);
        })
      } else{
        defer.resolve(movies);
      }
      return defer.promise;
    };
  
    var reset = function(movies){
      current = movies;
    };
    
    var hasMore = function(pageNum, limit){
      return pageNum * limit < current.length;
    };
      
    var loadPage = function(pageNum, limit){
      var start = pageNum * limit;
      if (start >= current.length) {
        return [];
      }
      var end = (pageNum+1) * limit;
      if (end > current.length){
        end = current.length;
      }
      return current.slice(start, end);
    };
    
    var getMovies = function(pageNum, limit){
      var defer = $q.defer();
      getAllMovies().then(function(movies){
        reset(movies);
        defer.resolve(loadPage(pageNum, limit));
      });
      return defer.promise;
    };
    
    var searchMovies = function(searchKey, pageNum, limit){
      var defer = $q.defer();
      getAllMovies().then(function(movies){
        var results = movies.filter(function(movie) {
          var searchString = movie.title+' '+movie.directors.join(' ')+' '+movie.actors.join(' ');
          return searchString.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });        
        reset(results);
        defer.resolve(loadPage(pageNum, limit));
      });    
      return defer.promise;
    };
    
    var sortMovies = function(sortKey, sortOrder, pageNum, limit){
      var defer = $q.defer();
      var results = current.sort(function(movie1, movie2){
        if (sortOrder > 0){
          return (movie1[sortKey] < movie2[sortKey]) ? 1 : -1;
        } else {
          return (movie1[sortKey] > movie2[sortKey]) ? 1 : -1;
        }
      });
      reset(results);
      defer.resolve(loadPage(pageNum, limit));
      return defer.promise;
    };
    
    var filterByRating = function(low, high, pageNum, limit){
      low = low || 0;
      high = high || 10;
      var defer = $q.defer();
      getAllMovies().then(function(movies){
        var results = movies.filter(function(movie) {
          return movie.rating > low && movie.rating < high;
        });        
        reset(results);
        defer.resolve(loadPage(pageNum, limit));
      });       
      return defer.promise;
    };

    return {
      hasMore: hasMore,
      loadPage: loadPage,
      getMovies: getMovies,
      searchMovies: searchMovies,
      sortMovies: sortMovies,
      filterByRating: filterByRating
    }
    
      
}])

;