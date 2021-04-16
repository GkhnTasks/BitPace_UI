$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Users.feature");
formatter.feature({
  "name": "Users functionals",
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
  "name": "user click Users menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.UsersStepDef.user_click_Users_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be delete any user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@admin"
    }
  ]
});
formatter.step({
  "name": "user click Delete button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.UsersStepDef.user_click_Delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"Are you sure you want to delete the record?\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.UsersStepDef.user_see_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Yes btton",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.UsersStepDef.user_click_Yes_btton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"Record successfully delete\" texts",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.UsersStepDef.user_see_texts(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cRecord[ successfully delete]\u003e but was:\u003cRecord[ing successfully deleted]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.bitpace.step_definitions.UsersStepDef.user_see_texts(UsersStepDef.java:127)\r\n\tat ✽.user see \"Record successfully delete\" texts(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/Users.feature:40)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});