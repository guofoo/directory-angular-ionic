describe('Movie App', function(){
  
  describe('Movie Detail Page Information', function(){

    beforeEach(function() {
      browser.get('index.html');
      element(by.model('searchKey')).sendKeys('');
      element.all(by.repeater('movie in movies')).get(0).element(by.css('a')).click();
      browser.sleep(1000);     
    });
    
    it('should redirect to the detail page of a movie when click the movie\'s record on home page', function(){
      var titleElem = element.all(by.css('.card .item')).get(0);
      var title = titleElem.element(by.css('h2')).getText();
      expect(title).toContain('Star Wars');
      expect(title).toContain('19770525');
    });
    
    it('should show movie\'s plot, genres, rate, language, country, directors, actors in card view after image', function(){
      var elements = element.all(by.css('.card .item'));
      element.all(by.css('.card .item')).then(function(allElems){
        expect(allElems.length).toBe(9);
        allElems[2].getInnerHtml().then(function(plot){
          expect(plot).toContain('Luke Skywalker joins forces');
        });
        allElems[3].element(by.css('span')).getInnerHtml().then(function(genres){
          expect(genres).toContain('Action');
          expect(genres).toContain('Adventure');
          expect(genres).toContain('Fantasy');
          expect(genres).toContain('Sci-Fi'); 
        });
        allElems[4].element(by.css('span')).getInnerHtml().then(function(rate){
          expect(rate).toContain('PG'); 
        });
        allElems[5].element(by.css('span')).getInnerHtml().then(function(lang){
          expect(lang).toContain('English'); 
        });
        allElems[6].element(by.css('span')).getInnerHtml().then(function(country){
          expect(country).toContain('USA');
        });
        allElems[7].element(by.css('span')).getInnerHtml().then(function(director){
          expect(director).toContain('George Lucas'); 
        });
        allElems[8].element(by.css('span')).getInnerHtml().then(function(actors){
          expect(actors).toContain('Mark Hamill');
          expect(actors).toContain('Harrison Ford');
          expect(actors).toContain('Carrie Fisher');
        });
      });
    });
    
  });
  
});