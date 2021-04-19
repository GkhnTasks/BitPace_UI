Feature: Deposit Money Menu

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu
    When user click Withdraw Money menu
  @smoke
  Scenario: User should be see Deposit Money page
    Then user should see "Withdrawals" titles
  @smoke
  Scenario: User should be able to Create Withdrawal
    When user click Create Withdrawal button
    And user enter Withdrawal Amount
    And user select Currency "EUR"
    And user select Bank Account
    And user click Create Withdraw button
    Then user see Withdrawal information
  @smoke
  Scenario: User should be see withdraw detail
    When click search icon
    Then user see "Detail" header
    Then user see withdraw detail
    |Amount: 250|
    |Currency: Euro|
    |Bank information: QA bank information|
    |Bank Name: QA Bank|
    |Iban : 23333222323323232323|
    |Swift Code : SWIFTXX|
    |Country Name : United Kingdom|
  @smoke
  Scenario: User should be Cancel withdraw
    When user click Cancel button
    Then user see "Are you sure you want to cancel the withdraw?"
    And user click Yes button
    Then user see "Withdraw successfully canceled" message



