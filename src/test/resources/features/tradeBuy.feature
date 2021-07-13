Feature: Trade Buy

  Background:
    Given the user is on the login page
    When the user click Mercant Login button
    And the user enters the "admin" information
    Given user hover side menu
    When user click Trade title
    @test
  Scenario:User should be make buy transaction
    When click Buy menu item
    Then user see Trade buy title
    And enter value in  EUR Amount box for Trade Buy
    And user select cryptocurrency "ETH" for Trade Buy
    And Click Buy button
    And Click confirm
    Then user see success page
