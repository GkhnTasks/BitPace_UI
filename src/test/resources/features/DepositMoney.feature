Feature: Deposit Money Menu

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu

  Scenario: User should be see Deposit Money page
    When user click Deposit Money menu
    And user check pop up message and click Agree
    Then user should see "Deposit Money" title