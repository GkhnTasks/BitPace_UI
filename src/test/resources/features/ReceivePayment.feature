Feature: Receive Payment Function

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu

  Scenario: User should be see Receive Payment section
    Given user click Receive Payment menu icon
    Then user should be see "Receive Payment" title
