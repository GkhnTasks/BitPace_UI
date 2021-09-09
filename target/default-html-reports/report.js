$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/tradeSell.feature");
formatter.feature({
  "name": "Trade Sel",
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
  "name": "click Sell menu item",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeSellStepDef.click_Sell_menu_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see Trade sell title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeSellStepDef.user_see_Trade_sell_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter value in  Coin Amount box for Trade Sell",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeSellStepDef.enter_value_in_Coin_Amount_box_for_Trade_Sell()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select cryptocurrency \"ETH\" for Trade Sell",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeSellStepDef.user_select_cryptocurrency_for_Trade_Sell(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Sell button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeSellStepDef.click_Sell_button()"
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
  "error_message": "java.lang.IndexOutOfBoundsException: Index 0 out of bounds for length 0\r\n\tat java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)\r\n\tat java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)\r\n\tat java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)\r\n\tat java.base/java.util.Objects.checkIndex(Objects.java:373)\r\n\tat java.base/java.util.ArrayList.get(ArrayList.java:425)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:39)\r\n\tat com.sun.proxy.$Proxy20.get(Unknown Source)\r\n\tat com.bitpace.step_definitions.TradeBuyStepDef.user_see_success_page(TradeBuyStepDef.java:54)\r\n\tat ✽.user see success page(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/tradeSell.feature:17)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});