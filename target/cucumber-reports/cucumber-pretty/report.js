$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("promotioncheck.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to automate testcase ELSC_020",
  "description": "I want to use this template for my feature file",
  "id": "this-feature-is-to-automate-testcase-elsc-020",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CareerPromotionSubscription"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "To verify whether application allows admin to create career, promotion \u0026 subscribe session to promotion",
  "description": "",
  "id": "this-feature-is-to-automate-testcase-elsc-020;to-verify-whether-application-allows-admin-to-create-career,-promotion-\u0026-subscribe-session-to-promotion",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@GotoAdministration"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I entered username \"admin\" and password \"admin@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click the Registration tab",
  "keyword": "When "
});
formatter.match({
  "location": "CareerPromotion.I_have_launch_the_application()"
});
formatter.result({
  "duration": 10153756999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 20
    },
    {
      "val": "admin@123",
      "offset": 41
    }
  ],
  "location": "CareerPromotion.I_entered_username_and_pasword(String,String)"
});
formatter.result({
  "duration": 181175500,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.I_click_on_login_button()"
});
formatter.result({
  "duration": 6969864700,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.I_click_the_Registration_tab()"
});
formatter.result({
  "duration": 1076580300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To verify whether application allows admin to create career",
  "description": "",
  "id": "this-feature-is-to-automate-testcase-elsc-020;to-verify-whether-application-allows-admin-to-create-career",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@CreateCareer"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I click career and promotions link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the career link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click add icon",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter valid credentials in Name textbox as \"QA\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click add button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Item is added",
  "keyword": "Then "
});
formatter.match({
  "location": "CareerPromotion.I_click_career_and_promotions_link()"
});
formatter.result({
  "duration": 4365574300,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.I_click_the_career_link()"
});
formatter.result({
  "duration": 1997319499,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.I_click_add_icon()"
});
formatter.result({
  "duration": 2784286999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA",
      "offset": 46
    }
  ],
  "location": "CareerPromotion.i_enter_valid_credentials_in_Name_textbox_as(String)"
});
formatter.result({
  "duration": 100705300,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.i_click_add_button()"
});
formatter.result({
  "duration": 2147026700,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.item_added_()"
});
formatter.result({
  "duration": 5039061701,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To verify whether application allows admin to create promotion",
  "description": "",
  "id": "this-feature-is-to-automate-testcase-elsc-020;to-verify-whether-application-allows-admin-to-create-promotion",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@CreatePromotion"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I click on career and promotions link",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on Promotions icon",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click on Add icon",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter credentials in nametextbox as \"QA for Tester\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I Click on Add button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Item added message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CareerPromotion.i_click_on_career_and_promotions_link()"
});
formatter.result({
  "duration": 5590126100,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.i_click_on_Promotions_icon()"
});
formatter.result({
  "duration": 1650837100,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.i_click_on_Add_icon()"
});
formatter.result({
  "duration": 7447992500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA for Tester",
      "offset": 39
    }
  ],
  "location": "CareerPromotion.i_enter_credentials_in_nametextbox_as(String)"
});
formatter.result({
  "duration": 132212499,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.i_Click_on_Add_button()"
});
formatter.result({
  "duration": 1236113100,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.item_added_message_displayed()"
});
formatter.result({
  "duration": 5039412900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "To verify whether application allows admin to subscribe session to promotion",
  "description": "",
  "id": "this-feature-is-to-automate-testcase-elsc-020;to-verify-whether-application-allows-admin-to-subscribe-session-to-promotion",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@CreateSubscription"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I click on subscribe sessions to promotion icon",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "select session in Sessions not subscribed : window",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click on -\u003e arrow",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click on subscribe sessions in promotion window button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "session should get added into promotion",
  "keyword": "Then "
});
formatter.match({
  "location": "CareerPromotion.i_click_on_subscribe_sessions_to_promotion_icon()"
});
formatter.result({
  "duration": 1706113800,
  "status": "passed"
});
formatter.match({
  "location": "CareerPromotion.select_session_in_Sessions_not_subscribed_window()"
});
formatter.result({
  "duration": 99167000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: API training session0.054814791271499685\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NHJGTMDB\u0027, ip: \u0027192.168.43.227\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat stepdefinition.CareerPromotion.select_session_in_Sessions_not_subscribed_window(CareerPromotion.java:126)\r\n\tat ✽.Then select session in Sessions not subscribed : window(promotioncheck.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CareerPromotion.i_click_on_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CareerPromotion.i_click_on_subscribe_sessions_in_promotion_window_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CareerPromotion.session_should_get_added_into_promotion()"
});
formatter.result({
  "status": "skipped"
});
});