angular.module('movie.directives', [])

.directive('score',function(){
  //the score directive shows a image along with the actual rating
  //the images come from rottentomato
  return {
    restrict: 'AE',
    
    scope: {
      //creat a scope varaible binding to the controller's $scope.rating
      rating: '@'
    },
    
    link: function(scope, elem, attrs){
      scope.rating = parseFloat(scope.rating);
      //create scope.imageSrc to store the image depending on the movie's rating
      //it is used in template below to show the image
      scope.imageSrc = '';
      
      // the rating system
      // rating > 8 -> red.png
      // 8 >= rating > 6 -> popcorn.png
      // 6 >= rating > 4 -> green.png
      // rating <= 4 -> spill.png
      // complete the rating system below and assign the correct images to scope.imageSrc
      
      
      
      

    },
    
    //the directive's template, show a image and the actual rating
    template: '<span><img ng-src="img/{{imageSrc}}" class="ratingImage"><strong>{{rating}}</strong></span>'
    
  }
})

;