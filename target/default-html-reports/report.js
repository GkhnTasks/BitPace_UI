$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DepositMoney.feature");
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
formatter.scenario({
  "name": "User should be see Deposit Money page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user click Deposit Money menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.DepositMoneyStepDef.user_click_Deposit_Money_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check pop up message and click Agree",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.DepositMoneyStepDef.user_check_pop_up_message_and_click_Agree()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[for\u003d\u0027checkbox-1\u0027]\"}\n  (Session info: chrome\u003d93.0.4577.63)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CA9OM3D\u0027, ip: \u0027172.20.10.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.63, chrome: {chromedriverVersion: 93.0.4577.63 (ff5c0da2ec0ad..., userDataDir: C:\\Users\\GKHAN~1\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:57629}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f5ec838eeb3181b4bdadd015ac43abbb\n*** Element info: {Using\u003dcss selector, value\u003d[for\u003d\u0027checkbox-1\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.bitpace.step_definitions.DepositMoneyStepDef.user_check_pop_up_message_and_click_Agree(DepositMoneyStepDef.java:18)\r\n\tat ✽.user check pop up message and click Agree(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/DepositMoney.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see \"Deposit Money\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.DepositMoneyStepDef.user_should_see_title(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/MakePayment.feature");
formatter.feature({
  "name": "Make Payment",
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
  "name": "user click Make Payment section",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Make_Payment_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Close on the 2FA message",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Close_on_the_2FA_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can see Make Payment page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user see Make Payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_see_Make_Payment_page()"
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
  "name": "user click Make Payment section",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Make_Payment_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Close on the 2FA message",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Close_on_the_2FA_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can see all currency",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user click currency dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.the_user_click_currency_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see all currnecy",
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
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_see_all_currnecy(java.util.List\u003cjava.lang.String\u003e)"
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
  "name": "user click Make Payment section",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Make_Payment_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Close on the 2FA message",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Close_on_the_2FA_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User see currency title",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user select currency \"EUR\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_select_currency(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see currency title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_see_currency_title()"
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
  "name": "user click Make Payment section",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Make_Payment_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Close on the 2FA message",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Close_on_the_2FA_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user match UI-API information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "enter value in  EUR Amount box",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.enter_value_in_EUR_Amount_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select currency \"EUR\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_select_currency(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select cryptocurrency \"ETH\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_select_cryptocurrency(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user match UI-API information make payment page \"ETH\" and \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.match_UI_API_information_make_payment_page(java.lang.String,java.lang.String)"
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
  "name": "user click Make Payment section",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Make_Payment_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Close on the 2FA message",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Close_on_the_2FA_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be  see Make Payment History title",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user see all title",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_see_all_title(java.util.List\u003cjava.lang.String\u003e)"
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
  "name": "user click Make Payment section",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Make_Payment_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Close on the 2FA message",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Close_on_the_2FA_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be see Payment Confirmation box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "enter value in  EUR Amount box",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.enter_value_in_EUR_Amount_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select currency \"EUR\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_select_currency(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select cryptocurrency \"ETH\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_select_cryptocurrency(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter wallet address",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_enter_wallet_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Send button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Send_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[class\u003d\u0027btn btnSendWallet\u0027]\"}\n  (Session info: chrome\u003d93.0.4577.63)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CA9OM3D\u0027, ip: \u0027172.20.10.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.63, chrome: {chromedriverVersion: 93.0.4577.63 (ff5c0da2ec0ad..., userDataDir: C:\\Users\\GKHAN~1\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:62305}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ee10141db4c1bf7cb5e5ad54e60ed16d\n*** Element info: {Using\u003dcss selector, value\u003d[class\u003d\u0027btn btnSendWallet\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.bitpace.step_definitions.MakePaymentStepDef.user_click_Send_button(MakePaymentStepDef.java:179)\r\n\tat ✽.user click Send button(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/MakePayment.feature:47)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user see \"Payment Confirmation\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_see_title(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click Close button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.MakePaymentStepDef.user_click_Close_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/OrderList.feature");
formatter.feature({
  "name": "Orderlist functionals",
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
  "name": "user click Order List button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.OrderListStepDef.user_click_Order_List_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be see order list page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user see Order List page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.OrderListStepDef.user_see_Order_List_page()"
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
  "name": "user click Order List button",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.OrderListStepDef.user_click_Order_List_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User search by Order ıd and match API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter order ıd",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.OrderListStepDef.user_enter_order_ıd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.OrderListStepDef.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user match UI-API information",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.OrderListStepDef.user_connect_Api()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/ReceivePayment.feature");
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
  "name": "User should be see Receive Payment section",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user should be see \"Receive Payment\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_should_be_see_title(java.lang.String)"
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
      "name": "@smoke"
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
  "status": "passed"
});
formatter.step({
  "name": "user click Create Payment URL button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_click_Create_Payment_URL_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"Payment URL\" text and \"Create New\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_see_text_and_button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click copy icon",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_click_copy_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"URL Copied\" txt",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.ReceivePaymentStepDef.user_see_txt(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Support.feature");
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
      "name": "@smoke"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[aria-label\u003d\u0027Message\u0027]\"}\n  (Session info: chrome\u003d93.0.4577.63)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CA9OM3D\u0027, ip: \u0027172.20.10.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.63, chrome: {chromedriverVersion: 93.0.4577.63 (ff5c0da2ec0ad..., userDataDir: C:\\Users\\GKHAN~1\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:57628}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f6dc93b152321edea1a5f6d59617625a\n*** Element info: {Using\u003dcss selector, value\u003d[aria-label\u003d\u0027Message\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.bitpace.step_definitions.SupportStepDef.user_fill_in_the_blank_on_support_page(SupportStepDef.java:20)\r\n\tat ✽.user fill in the blank on support page(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/Support.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.SupportStepDef.user_click_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user see confirm message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.SupportStepDef.user_see_confirm_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Users.feature");
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
      "name": "@smoke"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[User List]\u003e but was:\u003c[Orders Summary]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.bitpace.step_definitions.UsersStepDef.user_see_titles(UsersStepDef.java:27)\r\n\tat ✽.user see \"User List\" titles(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/Users.feature:11)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", "screenshot");
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
  "name": "User should be see User Logs page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user click User Logs",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.UsersStepDef.user_click_User_Logs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"User Logs\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.UsersStepDef.user_see_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/WithdrawMoney.feature");
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
  "name": "User should be see Deposit Money page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user should see \"Withdrawals\" titles",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_should_see_titles(java.lang.String)"
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
  "name": "User should be able to Create Withdrawal",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[aria-label\u003d\u0027Withdrawal Amount\u0027]\"}\n  (Session info: chrome\u003d93.0.4577.63)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CA9OM3D\u0027, ip: \u0027172.20.10.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.63, chrome: {chromedriverVersion: 93.0.4577.63 (ff5c0da2ec0ad..., userDataDir: C:\\Users\\GKHAN~1\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:57406}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f8020f86ea726d44d51c993ec5182a6e\n*** Element info: {Using\u003dcss selector, value\u003d[aria-label\u003d\u0027Withdrawal Amount\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.bitpace.step_definitions.WithdrawMoneyStepDef.user_enter_Withdrawal_Amount(WithdrawMoneyStepDef.java:39)\r\n\tat ✽.user enter Withdrawal Amount(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/WithdrawMoney.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user select Currency \"EUR\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_select_Currency(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select Bank Account",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_select_Bank_Account()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click Create Withdraw button",
  "keyword": "And "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_click_Create_Withdraw_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user see Withdrawal information",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_see_Withdrawal_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png", "screenshot");
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
  "name": "User should be see withdraw detail",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "click search icon",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.click_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see \"Detail\" header",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_see_header(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see withdraw detail",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.WithdrawMoneyStepDef.user_see_withdraw_detail(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c[Amount: 250, Currency: Euro, Bank information: QA bank information, Bank Name: QA Bank, Iban : 23333222323323232323, Swift Code : SWIFTXX, Country Name : United Kingdom]\u003e but was:\u003c[Amount: 1001, Currency: Euro, Bank information: adfsd, Bank Name: dgdfg, Iban : fdfdfdfd, Swift Code : fdgdfg, Country Name : Djibouti]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.bitpace.step_definitions.WithdrawMoneyStepDef.user_see_withdraw_detail(WithdrawMoneyStepDef.java:83)\r\n\tat ✽.user see withdraw detail(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/WithdrawMoney.feature:24)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png", "screenshot");
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
      "name": "@smoke"
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
formatter.uri("file:src/test/resources/features/dashboard.feature");
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
  "name": "User should be see fullname",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user should be see your name \"QA AutoTest\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.DashboardStepDef.user_should_be_see_your_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Users should be able to login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login as a admin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.LoginStepDef.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/tradeBuy.feature");
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
      "name": "@smoke"
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.bitpace.step_definitions.TradeBuyStepDef.user_see_success_page(TradeBuyStepDef.java:54)\r\n\tat ✽.user see success page(file:///C:/Users/Gökhan/IdeaProjects/BitPace_UI/src/test/resources/features/tradeBuy.feature:17)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/tradeSell.feature");
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
      "name": "@smoke"
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
  "name": "user select cryptocurrency \"BTC\" for Trade Sell",
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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/trademain.feature");
formatter.feature({
  "name": "Trade main page",
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
  "name": "User should be see Trade page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
formatter.step({
  "name": "user see Trade page and history title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitpace.step_definitions.TradeStepDef.user_see_Trade_page_and_history_title()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});