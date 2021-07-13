$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/tradeBuy.feature");
formatter.feature({
  "name": "Trade Buy",
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
  "name": "user click Trade title",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeStepDef.user_click_Trade_title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be make buy transaction",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "click Buy menu item",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeBuyStepDef.click_Buy_menu_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see Trade buy title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeBuyStepDef.user_see_Trade_buy_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter value in  EUR Amount box for Trade Buy",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeBuyStepDef.enter_value_in_EUR_Amount_box_for_Trade_Buy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select cryptocurrency \"ETH\" for Trade Buy",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeBuyStepDef.user_select_cryptocurrency_for_Trade_Buy(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Buy button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeBuyStepDef.click_Buy_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click confirm",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeBuyStepDef.click_confirm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see success page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeBuyStepDef.user_see_success_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});