Feature: Users functionals

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu
    When user click Users menu
  @smoke
  Scenario: User should be see Users page
    Then user see "User List" titles
    Then user see user information
    |QA|
    |AutoTest|
    |gokhan.guzelyurt+02@sgveteris.com|
    |Click to see detailed privileges|
    |ADMIN|
  @smoke
  Scenario:User should be see User Logs page
    When user click User Logs
    Then user see "User Logs" page

  Scenario: User should be create new user
    When click Add User
    And user fill in the blank
    And click Create User button
    Then user should be see new users on the table

  Scenario: User should be edit your information
    When user click edit button
    Then user see "User Edit" and "Reset Password" title
    And user change Task Privilages
    And user click Update User button
    Then user see main page

  Scenario: User should be delete any user
    When user click Delete button
    Then user see "Are you sure you want to delete the record?" text
    And user click Yes btton
    Then user see "Recording successfully deleted" texts


