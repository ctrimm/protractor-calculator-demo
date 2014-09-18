// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

module.exports = function() {

    this.Given(/^I run Cucumber with Protractor$/, function(next) {
        next();
    });

    this.Given(/^I go on(?: the website)? "([^"]*)"$/, function(url, next) {
        browser.get(url);
        next();
    });

    this.Then(/^it should still do normal tests$/, function(next) {
        expect(true).to.equal(true);
        next();
    });

    this.Then(/^it should expose the correct global variables$/, function(next) {
        expect(protractor).to.exist;
        expect(browser).to.exist;
        expect(by).to.exist;
        expect(element).to.exist;
        expect($).to.exist;
        next();
    });

    this.Then(/the title of the page should equal "([^"]*)"$/, function(text, next) {
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(next);
    });

    this.Then(/^I "([^"]*)" the numbers (\d+) and (\d+)$/, function (arg1, inputOne, inputTwo, next) {
      var firstNumber = element(by.model('first'));
      var secondNumber = element(by.model('second'));
      var goButton = element(by.id('gobutton'));
      var latestResult = element(by.binding('latest'));

      firstNumber.sendKeys(inputOne);
      secondNumber.sendKeys(inputTwo);
      goButton.click();
      next();
    });

};