Feature: Receive Payment Function

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu
    Given user click Receive Payment menu icon

  @smoke
  Scenario: User should be see Receive Payment section
    Then user should be see "Receive Payment" title

  @test
  Scenario: User should be create payment url
    When user should be able to fill in the blank
    And user click Create Payment URL button
    Then user see "Payment URL" text and "Create New" button
    When user click copy icon
    Then user see "Copy URL" txt
