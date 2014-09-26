Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  @dev
  Scenario: Wrapping WebDriver
    Given I go on "http://app.resumatorstaging.com/app/v2/interview/1B1856A4D15"
#    Then the title of the page should equal "Some interview title"
    And I sign in to the interview kit with "Dave Allen" and "dave.allen@theresumator.com"

    And I fill out the interview kit with:
        | Question               | Notes                | Rating     | Save |
        | QUESTION ONE DETAILS   | Notes for Q1 go here | Poor       | Yes  |
        | QUESTION TWO DETAILS   | Q2 Notes go here     | Acceptable | Yes  |
        | QUESTION THREE DETAILS | Question 3 Notes     | Strong     | Yes  |
    And I fill out interview notes with text "THESE ARE A FEW COMMENTS ON THIS INTERVIEW/APPLICANT"
    And I stop