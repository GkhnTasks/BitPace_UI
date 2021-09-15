$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/dashboard.feature");
formatter.feature({
  "name": "Dashboard functionals",
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
formatter.scenario({
  "name": "User should be see filter options",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@task"
    }
  ]
});
formatter.step({
  "name": "click filter button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.DashboardStepDef.click_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usershould be see filter list",
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
  "location": "com.bitpace.step_definitions.DashboardStepDef.usershould_be_see_filter_list(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c[TODAY, YESTERDAY, LAST WEEK, LAST MONTH, LAST YEAR]\u003e but was:\u003c[TODAY, YESTERDAY, LAST WEEK, LAST MONTH, LAST YEAR, , , , , ]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.bitpace.step_definitions.DashboardStepDef.usershould_be_see_filter_list(DashboardStepDef.java:29)\r\n\tat ✽.usershould be see filter list(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/dashboard.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});