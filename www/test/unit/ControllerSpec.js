describe("Movie App Controller Unit Tests", function() {

  beforeEach(function() {
      //Ensure angular modules available
    module('movie.services');
    module('movie.controllers');
  });
  
  var MovieHomeCtrl;
  
  beforeEach(inject(function($rootScope, $controller, _MovieService_) {
    scope = $rootScope.$new();
    EmployeeIndexController = $controller('MovieHomeCtrl', {$scope: scope, MovieService: _MovieService_});
    scope.$digest();
  }));

  it('should load 20 more movies when loadMoreData is called', function(){
    scope.loadMoreData();
    scope.$digest();
    expect(scope.movies).toBeDefined();
    expect(scope.movies.length).toBe(40);
    
    scope.loadMoreData();
    scope.$digest();
    expect(scope.movies.length).toBe(60);    
  });
  
  it('hasMoreData should return true intially, meaning there are more movies.', function(){
    expect(scope.hasMoreData()).toBeTruthy();
  });
  
  it('hasMoreData should return false when currentPage is a large number', function(){
    scope.currentPage = 20;
    expect(scope.hasMoreData()).toBeFalsy();
  });
  
});