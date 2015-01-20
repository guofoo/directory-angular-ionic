describe('Employee Directory App', function(){
  
  describe('Links between Index page and Detail page', function(){

    beforeEach(function() {
      browser.get('index.html');
    });
    
    it('Default should be at employee index page and show all 12 employees', function(){
      browser.getLocationAbsUrl().then(function(url) {
        expect(url).toContain('/employees');
      });    
      expect(element(by.css('.list')).isPresent()).toBe(true);
      expect(element.all(by.css('.item-avatar')).count()).toBe(12);
    });
    
    it('should redirect to detail page of James King when click the first item in list', function(){
      element.all(by.css('.item-content')).get(0).click();
      browser.sleep(1000);
      expect(element(by.css('.card')).isPresent()).toBe(true);
      expect(element.all(by.css('.card .item')).count()).toBe(5);
      expect(element(by.css('.item-avatar h2')).getText()).toBe('James King');
    });
    
  });
  
});