Feature: Users should be able to login

  Scenario: Login as a admin
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Then the user should be able to login

  Scenario: Login with invalid credential
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "invalid" credentials
    Then user should be see "Invalid username or password." message