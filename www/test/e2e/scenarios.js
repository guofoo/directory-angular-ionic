describe('Movie App', function(){
  
  describe('Sort movies functionality provided by ionic popover', function(){
    
    var selectPopoverItem = function(i){
      element(by.css('.popover-button')).click();
      browser.sleep(1000);
      element(by.css('.popover .item:nth-child('+i+')')).click();
    };

    var getFirstTitle = function(){
      var firstMovie = element.all(by.repeater('movie in movies')).get(0);
      var title = firstMovie.element(by.css('.movie-intro h2')).getText();
      return title;
    };

    beforeEach(function() {
      browser.get('index.html');
    });
    
    it('should show the 4 items in the popver menu when  the popover button is clicked', function(){
      element(by.css('.popover-button')).click();
      expect(element(by.css('.popover')).isPresent()).toBeTruthy();
      element.all(by.css('.popover .item')).then(function(links){
        expect(links).not.toBe(null);
        expect(links.length).toBe(4);
      });
    });

    it('should sort movies by title in both directions using "Sort by Title" from popover menu', function(){
      element(by.model('searchKey')).sendKeys('');
      selectPopoverItem(1);
      var title = getFirstTitle();
      expect(title).toEqual('V for Vendetta');
      selectPopoverItem(1);
      title = getFirstTitle();
      expect(title).toEqual('A Beautiful Mind');
    });

    it('should sort movies by rating in both directions using "Sort by Rating" from popover menu', function(){
      element(by.model('searchKey')).sendKeys('');
      selectPopoverItem(2);
      var title = getFirstTitle();
      expect(title).toEqual('The Godfather');
    });

    it('should sort movies by release date in both directions using "Sort by Release Date" from popover menu', function(){
      element(by.model('searchKey')).sendKeys('');
      selectPopoverItem(3);
      var title = getFirstTitle();
      expect(title).toContain('Mission: Impossible');
    });

    it('should sort movies by release date in both directions using "Sort by Porpularity" from popover menu', function(){
      element(by.model('searchKey')).sendKeys('');
      selectPopoverItem(4);
      var title = getFirstTitle();
      expect(title).toEqual('The Dark Knight');
    });
    
  });
  
});