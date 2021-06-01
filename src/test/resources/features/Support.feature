Feature: Support Functional

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu

  Scenario: User should be send message to support
    Given user click Support menu title
    When user fill in the blank on support page
    And user click Submit button
    Then user see confirm message