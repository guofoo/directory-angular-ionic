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
    });
  });
  
  describe('Employee detail page: ', function(){
    //go to the detail page of James King
    beforeEach(function() {
      browser.get('index.html');
      element.all(by.css('.item-content')).get(0).click();
      browser.sleep(1000);      
    });
    
    it('it should have employee information in a card layout and show employee full name in h2 element', function(){
      expect(element.all(by.css('.card .item')).count()).toBe(5);
      expect(element(by.css('.item-avatar h2')).getText()).toBe('James King'); 
    });
    
    it('There should be 4 link items and about employee\'s office phone, cell phone, sms and email respectively', function(){
      checkLinkItem(0, '781-000-0001');
      checkLinkItem(1, '617-000-0001');
      checkLinkItem(2, '617-000-0001');
      checkLinkItem(3, 'jking@fakemail.com');
    });
 
    var checkLinkItem = function(index, textToHave){
      var elem = element.all(by.css('a.item')).get(index);
      elem.getAttribute('href').then(function(attr){
        expect(attr).toContain(textToHave);
      });
    };    
  });
  
});