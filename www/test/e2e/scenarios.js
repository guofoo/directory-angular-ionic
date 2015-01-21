describe('Employee Directory App', function(){
  
  var checkLinkItem = function(elements, index, textToHave){
    var elem = elements.get(index);
    elem.getAttribute('href').then(function(attr){
      expect(attr).toContain(textToHave);
    });
  }; 
  
  var visiblePane = function(){
    var views = element.all(by.css('.pane')).filter(function(elem){
      return elem.isDisplayed();
    });
    return views.first();
  };

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
      browser.sleep(500);
      expect(element(by.css('.card')).isPresent()).toBe(true);
    });
  });
  
  describe('Employee detail page - James King ', function(){
    //go to the detail page of James King
    beforeEach(function() {
      browser.get('index.html');
      element.all(by.css('.item-content')).get(0).click();
      browser.sleep(500);      
    });
    
    it('it should have employee information in a card layout and show employee full name in h2 element', function(){
      expect(element.all(by.css('.card .item')).count()).toBe(6);
      expect(element(by.css('.item-avatar h2')).getText()).toBe('James King'); 
    });
    
    it('There should be 5 link items. They are his reports, office phone, cell phone, sms and email.', function(){
      var elements = element.all(by.css('a.item'));
      checkLinkItem(elements, 0, '#/employees/1/reports');
      checkLinkItem(elements, 1, '781-000-0001');
      checkLinkItem(elements, 2, '617-000-0001');
      checkLinkItem(elements, 3, '617-000-0001');
      checkLinkItem(elements, 4, 'jking@fakemail.com');
    });
 
    it('should go to the report page when click the first item link and show the 4 reports', function(){
      element.all(by.css('a.item')).get(0).click();
      expect(element(by.css('.reports')).isPresent()).toBe(true);
      expect(element.all(by.css('.reports .item')).count()).toBe(5);
      var elements = element.all(by.css('.reports a.item'));
      checkLinkItem(elements, 0,'#/employees/2');
      checkLinkItem(elements, 1,'#/employees/3');
      checkLinkItem(elements, 2,'#/employees/4');
      checkLinkItem(elements, 3,'#/employees/5');
    });
  });
  
  describe('Employee detail page - Julie Taylor', function(){
    //go to the detail page of Julie Taylor
    beforeEach(function() {
      browser.get('index.html');
      element.all(by.css('.item-content')).get(1).click();
      browser.sleep(500);      
    });
    
    it('it should have employee information in a card layout and show employee full name in h2 element', function(){
      expect(element.all(by.css('.card .item')).count()).toBe(7);
      expect(element(by.css('.item-avatar h2')).getText()).toBe('Julie Taylor'); 
    });
    
    it('There should be 6 link items. They are her manager, reports, office phone, cell phone, sms and email.', function(){
      var elements = element.all(by.css('a.item'));
      checkLinkItem(elements, 0, '#/employees/1');
      checkLinkItem(elements, 1, '#/employees/2/reports');
      checkLinkItem(elements, 2, '781-000-0002');
      checkLinkItem(elements, 3, '617-000-0002');
      checkLinkItem(elements, 4, '617-000-0002');
      checkLinkItem(elements, 5, 'jtaylor@fakemail.com');
    });
 
     it('should go to the page of James King when click the first item', function(){
      element.all(by.css('.card a.item')).get(0).click();
      var view = visiblePane();
      expect(view.element(by.css('.card .item-avatar h2')).getText()).toBe('James King'); 
    });
    
    it('should go to the report page when click the second item link and show the 2 reports', function(){
      element.all(by.css('.card a.item')).get(1).click();
      expect(element(by.css('.reports')).isPresent()).toBe(true);
      expect(element.all(by.css('.reports .item')).count()).toBe(3);
      var elements = element.all(by.css('.reports a.item'));
      checkLinkItem(elements, 0,'#/employees/8');
      checkLinkItem(elements, 1,'#/employees/9');
    });    
  });

});