Feature: Trade Sel

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu
    When user click Trade title
  @smoke
  Scenario:User should be make buy transaction
    When click Sell menu item
    Then user see Trade sell title
    And enter value in  Coin Amount box for Trade Sell
    And user select cryptocurrency "BTC" for Trade Sell
    And Click Sell button
    And Click confirm
    Then user see success page