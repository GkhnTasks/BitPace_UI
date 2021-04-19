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
  "name": "User should be see Users page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user see \"User List\" titles",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.UsersStepDef.user_see_titles(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see user information",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.UsersStepDef.user_see_user_information(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cgokhan.guzelyurt+01@[hotmail].com\u003e but was:\u003cgokhan.guzelyurt+01@[sgveteris].com\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.bitpace.step_definitions.UsersStepDef.user_see_user_information(UsersStepDef.java:34)\r\n\tat ✽.user see user information(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/Users.feature:12)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});