import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for lmsbook', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be lmsbook', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('lmsbook');
    })
  });

  it('navbar-brand should be lmsbook@1.0.0',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('lmsbook@1.0.0');
  });

  
    it('Book component should be loadable',() => {
      page.navigateTo('/Book');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Book');
    });

    it('Book table should have 16 columns',() => {
      page.navigateTo('/Book');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(16); // Addition of 1 for 'Action' column
      });
    });

  

});
