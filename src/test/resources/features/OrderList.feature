Feature: Orderlist functionals

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu
    When user click Order List button
  @smoke
  Scenario:User should be see order list page
    Then user see Order List page

  @smoke
  Scenario: User search by Order ıd and match API
    When user enter order ıd
    And user click search button
    Then user match UI-API information


  Scenario: User can be clear search field
    When user type customer name
    And click Clear button
    Then user should be see all search box empty

  Scenario: User can see Order Detail
    When user click detail icon
    Then user see order detail
    |Blockchain Address|
    |Transaction ID    |
    |Customer Name     |
    |Customer Reference|


