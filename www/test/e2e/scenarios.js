describe('Movie App', function(){
  
  describe('Search movies functionality on the movies home page', function(){

    beforeEach(function() {
      browser.get('index.html');
    });
    
    it('should show 4 star wars movies when search with keyword "start wars" ', function(){
      element(by.model('searchKey')).sendKeys('star wars');
      
      element.all(by.repeater('movie in movies')).then(function(movies){
        expect(movies).not.toBe(null);
        expect(movies.length).toBe(4);
      });
    });

    it('should show 2 matrix movies when search with keyword "matrix" ', function(){
      element(by.model('searchKey')).sendKeys('matrix');
      
      element.all(by.repeater('movie in movies')).then(function(movies){
        expect(movies).not.toBe(null);
        expect(movies.length).toBe(2);
      });
    });
    
    it('should clear searching and show default movies when clear the searchKey input', function(){
      element(by.model('searchKey')).sendKeys('');
      
      element.all(by.repeater('movie in movies')).then(function(movies){
        expect(movies).not.toBe(null);
        expect(movies.length >= 20).toBeTruthy(); //default show 20 movies
      });    
    });
  });
  
});