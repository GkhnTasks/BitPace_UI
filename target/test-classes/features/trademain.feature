Feature: Trade main page

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu


  Scenario: User should be see Trade page
    When user click Trade title
    Then user see Trade page and history title
