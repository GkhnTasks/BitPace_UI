Feature: Dashboard functionals

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information

  Scenario: User should be see fullname
    Then user should be see your name "Gokhan Guzelyurt"

  Scenario: User should be see filter options
    When click filter button
    Then usershould be see filter list
    |TODAY|
    |YESTERDAY|
    |LAST WEEK|
    |LAST MONTH|
    |LAST YEAR |

  Scenario: User should be see activities header
    Then usershould be see see activities header
      |OrderId|
      |Type|
      |Amount|
      |Completed Date|
      |Balance |