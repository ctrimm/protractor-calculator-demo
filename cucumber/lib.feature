Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  @dev
  Scenario: Wrapping WebDriver
    Given I go on "http://juliemr.github.io/protractor-demo/"
    Then the title of the page should equal "Super Calculator"
    Then I "add" the numbers 1 and 3