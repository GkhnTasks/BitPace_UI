$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ReceivePayment.feature");
formatter.feature({
  "name": "Receive Payment Function",
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
  "name": "user click Receive Payment menu icon",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_click_Receive_Payment_menu_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be create payment url",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user should be able to fill in the blank",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_should_be_able_to_fill_in_the_blank()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat java.base/java.util.Objects.requireNonNull(Objects.java:222)\r\n\tat org.openqa.selenium.interactions.Actions.\u003cinit\u003e(Actions.java:65)\r\n\tat com.bitpace.step_definitions.ReceivePaymentStepDef.user_should_be_able_to_fill_in_the_blank(ReceivePaymentStepDef.java:35)\r\n\tat ✽.user should be able to fill in the blank(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/ReceivePayment.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click Create Payment URL button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_click_Create_Payment_URL_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user see \"Payment URL\" text and \"Create New\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_see_text_and_button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click copy icon",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_click_copy_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user see \"Copy URL\" txt",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_see_txt(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});