$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/WithdrawMoney.feature");
formatter.feature({
  "name": "Deposit Money Menu",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bitpace.step_definitions.LoginStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Mercant Login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.LoginStepDef.the_user_click_Mercant_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"admin\" information",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.LoginStepDef.the_user_enters_the_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hover side menu",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bitpace.step_definitions.OrderListStepDef.user_hover_side_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Withdraw Money menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_click_Withdraw_Money_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to Create Withdrawal",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@admin"
    }
  ]
});
formatter.step({
  "name": "user click Create Withdrawal button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_click_Create_Withdrawal_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter Withdrawal Amount",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_enter_Withdrawal_Amount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select Currency \"EUR\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_select_Currency(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select Bank Account",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_select_Bank_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Create Withdraw button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_click_Create_Withdraw_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see Withdrawal information",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_see_Withdrawal_information()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bitpace.step_definitions.LoginStepDef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click Mercant Login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.LoginStepDef.the_user_click_Mercant_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"admin\" information",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.LoginStepDef.the_user_enters_the_information(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hover side menu",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bitpace.step_definitions.OrderListStepDef.user_hover_side_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Withdraw Money menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_click_Withdraw_Money_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be Cancel withdraw",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@admin"
    }
  ]
});
formatter.step({
  "name": "user click Cancel button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_click_Cancel_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"Are you sure you want to cancel the withdraw?\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Yes button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_click_Yes_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"Withdraw successfully canceled\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_see_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});