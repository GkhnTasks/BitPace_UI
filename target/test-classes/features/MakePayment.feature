Feature: Make Payment
  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu
    When user click Make Payment section
    When user click Close on the 2FA message
  @smoke
  Scenario: User can see Make Payment page
    Then user see Make Payment page
  @smoke
  Scenario: User can see all currency
    When the user click currency dropdown
    Then user see all currnecy
    |EUR|
    |USD|
    |TRY|
    |RUB|
    |NOK|
  @smoke
  Scenario:User see currency title
    When user select currency "EUR"
    Then user see currency title
  @smoke
  Scenario: user match UI-API information
    Given enter value in  EUR Amount box
    When user select currency "EUR"
    When user select cryptocurrency "ETH"
    Then user match UI-API information make payment page "ETH" and "EUR"
  @smoke
  Scenario: User should be  see Make Payment History title
    Then user see all title
    |Date|
    |User Name|
    |Mail Address|
    |Currency Amount|
    |Coin Amount|
    |Wallet Address|
    |Status|
  @smoke
  Scenario:User should be see Payment Confirmation box
    Given enter value in  EUR Amount box
    When user select currency "EUR"
    And user select cryptocurrency "ETH"
    And user enter wallet address
    And user click Send button
    Then user see "Payment Confirmation" title
    And user click Close button




