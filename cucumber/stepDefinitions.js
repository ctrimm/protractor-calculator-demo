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



    /** stuff for testing interview kits **/

    this.Given(/^I sign in to the interview kit with "([^"]*)" and "([^"]*)"$/, function (Name, Email, next) {
      var name = element(by.model('interviewer.name'));
      var email = element(by.model('interviewer.emailAddress'));

      browser.sleep(4000); // sleep to make sure page loads

      name.sendKeys(Name);
      email.sendKeys(Email);

      // press enter in order to submit
      // email.sendKeys("\n");

      // let's actually try to get the submit button
      var startInterviewbutton = element(".form-group button");
      startInterviewbutton.click();

      browser.sleep(5000); // insomniac
      next();
    });

    this.Given(/^I fill out the interview kit with:$/, function (table, next) {
      // Write code here that turns the phrase above into concrete actions
      next();
    });

    this.Given(/^I fill out interview notes with text "([^"]*)"$/, function (arg1, next) {
      // Write code here that turns the phrase above into concrete actions
      next();
    });

    this.Given(/^I stop$/, function (next) {
      // Write code here that turns the phrase above into concrete actions
      next();
    });



};