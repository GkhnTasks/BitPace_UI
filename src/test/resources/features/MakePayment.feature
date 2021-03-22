Feature: Make Payment
  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu
    When user click Make Payment section


  Scenario: User can see Make Payment page
    Then user see Make Payment page
    
  Scenario: User can see all currency
    When the user click currency dropdown
    Then user see all currnecy
    |TRY|
    |USD|
    |EUR|

  Scenario:User see currency title
    When user select currency
    Then user see currency title
  @admin
  Scenario: user match UI-API information
    Given enter value in  EUR Amount box
    Then user match UI-API information make payment page



