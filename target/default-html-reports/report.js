$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Support.feature");
formatter.feature({
  "name": "Support Functional",
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
formatter.scenario({
  "name": "User should be send message to support",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user click Support menu title",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bitpace.step_definitions.SupportStepDef.user_click_Support_menu_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in the blank on support page",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.SupportStepDef.user_fill_in_the_blank_on_support_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.SupportStepDef.user_click_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see confirm message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.SupportStepDef.user_see_confirm_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});