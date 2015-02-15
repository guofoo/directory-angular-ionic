angular.module('movie.filters', [])

.filter('releaseDate', function(){
  return function(releaseDate){
    releaseDate = releaseDate.toString();
    //the release_date in movies.json is not very friendly, it is in the format of yyyymmdd
    //with the minimum effort, change the format to yyyy/mm/dd
    var formattedDate = '';
    //complete the filter so it returns formattedDate(yyyy/mm/dd) from  releaseDate(yyyymmdd)  
       
       
       

    return formattedDate;
  };
});