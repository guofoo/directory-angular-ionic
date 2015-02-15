describe('Movie App', function(){
  
  describe('The score directive and release date filter', function(){

    beforeEach(function() {
      browser.get('index.html');
    });
    
    it('the first movie should have red image as it is star war. The release date should also be formatted as yyyy/mm/dd', function(){
      element(by.model('searchKey')).clear();
      //first image is star war
      var first = element.all(by.repeater('movie in movies')).get(0);
      var imageElem = first.element(by.css('.ratingImage'));
      imageElem.getAttribute('src').then(function(src){
        expect(src).toContain('img/red.png');
      });
      first.element(by.css('.movie-intro p')).getInnerHtml().then(function(html){
        expect(html).toContain('1977/05/25');
      })
    });

    it('the first movie should have the popcorn image when type in "pirate" in search box as it is pirates of the caribbean', function(){
      element(by.model('searchKey')).clear();
      element(by.model('searchKey')).sendKeys('pirate');
      //first image is pirates of the caribbean
      first = element.all(by.repeater('movie in movies')).get(0);
      imageElem = first.element(by.css('.ratingImage'));
      imageElem.getAttribute('src').then(function(src){
        expect(src).toContain('img/popcorn.png');
      });         
    });
    
    it('the first movie show have the green image when type in "batman forever" in search box', function(){
      element(by.model('searchKey')).clear();
      element(by.model('searchKey')).sendKeys('batman forever');
      //first image is batman forever
      first = element.all(by.repeater('movie in movies')).get(0);
      imageElem = first.element(by.css('.ratingImage'));
      imageElem.getAttribute('src').then(function(src){
        expect(src).toContain('img/green.png');
      });        
    })


  });
  
});