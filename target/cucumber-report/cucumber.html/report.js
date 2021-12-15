$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Jobsearch.feature");
formatter.feature({
  "line": 2,
  "name": "Job Search",
  "description": "As a user I want to search the Job in cv Library",
  "id": "job-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 20,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 21,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;2"
    },
    {
      "cells": [
        "Software Test Engineer",
        "West Midlands",
        "up to 15 miles",
        "35000",
        "75000",
        "Per annum",
        "Contract",
        "Contract Software Test Engineer jobs in West Midlands"
      ],
      "line": 22,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;3"
    },
    {
      "cells": [
        "Software Engineer",
        "Stevenage Hertfordshire",
        "up to 10 miles",
        "30000",
        "45000",
        "Per annum",
        "Permanent",
        "Permanent Software Engineer jobs in Stevenage"
      ],
      "line": 23,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;4"
    },
    {
      "cells": [
        "Software Engineer",
        "Glasgow City",
        "up to 10 miles",
        "30000",
        "60000",
        "Per annum",
        "Contract",
        "Contract Software Engineer jobs in Glasgow"
      ],
      "line": 24,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;5"
    },
    {
      "cells": [
        "Software Test Engineer",
        "Derbyshire",
        "up to 25 miles",
        "4500",
        "6000",
        "Per month",
        "Permanent",
        "Permanent Software Engineer jobs in Derbyshire"
      ],
      "line": 25,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;6"
    },
    {
      "cells": [
        "Tester",
        "Coventry",
        "up to 10 miles",
        "50000",
        "75000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Coventry"
      ],
      "line": 26,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;7"
    },
    {
      "cells": [
        "Tester",
        "Central London",
        "up to 15 miles",
        "60000",
        "90000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Central London"
      ],
      "line": 27,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4684125600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 115955100,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 1120356200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" id\u003d\"toggle-hp-search\" aria-expanded\u003d\"false\"\u003e...\u003c/button\u003e is not clickable at point (202, 341). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 359px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ECCE3OFG\u0027, ip: \u0027192.168.1.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ad161f65d38a015dd8618ba39be24b76, clickElement {id\u003d506c8977-0c44-4a0f-b6e8-cb743cf4812e}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\laxmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60552}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60552/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (ad161f65d38a015dd8618ba39be24b76)] -\u003e xpath: //button[@id\u003d\u0027toggle-hp-search\u0027]]\nSession ID: ad161f65d38a015dd8618ba39be24b76\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:71)\r\n\tat uk.co.library.pages.HomePage.clickOnMoreSearchOptionLink(HomePage.java:90)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iClickOnSearchMoreOptions(JobsearchSteps.java:21)\r\n\tat ✽.When I click on search more options(Jobsearch.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 874558600,
  "status": "passed"
});
formatter.before({
  "duration": 2698427400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Software Test Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"West Midlands\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"35000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"75000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Contract Software Test Engineer jobs in West Midlands\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 1088184400,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" id\u003d\"toggle-hp-search\" aria-expanded\u003d\"false\"\u003e...\u003c/button\u003e is not clickable at point (202, 341). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 359px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ECCE3OFG\u0027, ip: \u0027192.168.1.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3d89fa0ed3b19e9b045f9e85eaa43676, clickElement {id\u003d8baae2a1-80a3-45ab-84ba-3b702b35ce63}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\laxmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60592}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60592/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (3d89fa0ed3b19e9b045f9e85eaa43676)] -\u003e xpath: //button[@id\u003d\u0027toggle-hp-search\u0027]]\nSession ID: 3d89fa0ed3b19e9b045f9e85eaa43676\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:71)\r\n\tat uk.co.library.pages.HomePage.clickOnMoreSearchOptionLink(HomePage.java:90)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iClickOnSearchMoreOptions(JobsearchSteps.java:21)\r\n\tat ✽.When I click on search more options(Jobsearch.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Test Engineer",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "West Midlands",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Software Test Engineer jobs in West Midlands",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 840493500,
  "status": "passed"
});
formatter.before({
  "duration": 2707448000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Software Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Stevenage Hertfordshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"45000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Permanent Software Engineer jobs in Stevenage\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 107119700,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 232964500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Engineer",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 136342900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stevenage Hertfordshire",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 156099300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 134639100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 55746200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 78124500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 57643700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 73515100,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 68150700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Engineer jobs in Stevenage",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 4553079000,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Permanent Software Engineer jobs in Stevenage] but found [Permanent Software Engineer jobs]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:34)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(JobsearchSteps.java:85)\r\n\tat ✽.Then I should be able to verify the result message \"Permanent Software Engineer jobs in Stevenage\"(Jobsearch.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 922489000,
  "status": "passed"
});
formatter.before({
  "duration": 2933607400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Software Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Glasgow City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"60000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Contract Software Engineer jobs in Glasgow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39900,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 1096422200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" id\u003d\"toggle-hp-search\" aria-expanded\u003d\"false\"\u003e...\u003c/button\u003e is not clickable at point (202, 341). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 359px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ECCE3OFG\u0027, ip: \u0027192.168.1.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [43925f02ed18ab0cfcb848dfbc0adafb, clickElement {id\u003d932a5567-5e6c-4d85-a18e-258e9cc4756c}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\laxmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60819}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60819/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (43925f02ed18ab0cfcb848dfbc0adafb)] -\u003e xpath: //button[@id\u003d\u0027toggle-hp-search\u0027]]\nSession ID: 43925f02ed18ab0cfcb848dfbc0adafb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:71)\r\n\tat uk.co.library.pages.HomePage.clickOnMoreSearchOptionLink(HomePage.java:90)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iClickOnSearchMoreOptions(JobsearchSteps.java:21)\r\n\tat ✽.When I click on search more options(Jobsearch.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Engineer",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow City",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Software Engineer jobs in Glasgow",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 830463400,
  "status": "passed"
});
formatter.before({
  "duration": 2824510900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Software Test Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Derbyshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"4500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"6000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Permanent Software Engineer jobs in Derbyshire\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 52400,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 1088022100,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" id\u003d\"toggle-hp-search\" aria-expanded\u003d\"false\"\u003e...\u003c/button\u003e is not clickable at point (202, 341). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 359px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ECCE3OFG\u0027, ip: \u0027192.168.1.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [100873c533f1474a50dfac3745a1c7e0, clickElement {id\u003d7d029ced-9a60-4d44-8423-c9206cf32787}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\laxmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60859}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60859/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (100873c533f1474a50dfac3745a1c7e0)] -\u003e xpath: //button[@id\u003d\u0027toggle-hp-search\u0027]]\nSession ID: 100873c533f1474a50dfac3745a1c7e0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:71)\r\n\tat uk.co.library.pages.HomePage.clickOnMoreSearchOptionLink(HomePage.java:90)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iClickOnSearchMoreOptions(JobsearchSteps.java:21)\r\n\tat ✽.When I click on search more options(Jobsearch.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Test Engineer",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Derbyshire",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4500",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Engineer jobs in Derbyshire",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 831947200,
  "status": "passed"
});
formatter.before({
  "duration": 2732892400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Coventry\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"75000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Permanent Tester jobs in Coventry\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 1087618600,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" id\u003d\"toggle-hp-search\" aria-expanded\u003d\"false\"\u003e...\u003c/button\u003e is not clickable at point (202, 341). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 359px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ECCE3OFG\u0027, ip: \u0027192.168.1.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f1feabf99247bb81438b7a9066d22de1, clickElement {id\u003df1df1822-b4ad-436c-a464-1d0dff044c23}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\laxmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60899}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60899/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (f1feabf99247bb81438b7a9066d22de1)] -\u003e xpath: //button[@id\u003d\u0027toggle-hp-search\u0027]]\nSession ID: f1feabf99247bb81438b7a9066d22de1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:71)\r\n\tat uk.co.library.pages.HomePage.clickOnMoreSearchOptionLink(HomePage.java:90)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iClickOnSearchMoreOptions(JobsearchSteps.java:21)\r\n\tat ✽.When I click on search more options(Jobsearch.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Coventry",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Coventry",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 819796800,
  "status": "passed"
});
formatter.before({
  "duration": 2604765100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter location \"Central London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary minimum \"60000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salary maximum \"90000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to verify the result message \"Permanent Tester jobs in Central London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobsearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 1107915200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" id\u003d\"toggle-hp-search\" aria-expanded\u003d\"false\"\u003e...\u003c/button\u003e is not clickable at point (202, 341). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 359px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ECCE3OFG\u0027, ip: \u0027192.168.1.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a22bd8b34c3ad4cd97222dcc4ef22197, clickElement {id\u003d9f16bce5-740d-4c9a-b533-0f181212e331}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\laxmi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60939}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60939/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (a22bd8b34c3ad4cd97222dcc4ef22197)] -\u003e xpath: //button[@id\u003d\u0027toggle-hp-search\u0027]]\nSession ID: a22bd8b34c3ad4cd97222dcc4ef22197\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:71)\r\n\tat uk.co.library.pages.HomePage.clickOnMoreSearchOptionLink(HomePage.java:90)\r\n\tat uk.co.library.cucumber.steps.JobsearchSteps.iClickOnSearchMoreOptions(JobsearchSteps.java:21)\r\n\tat ✽.When I click on search more options(Jobsearch.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobsearchSteps.iAcceptCookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Central London",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 18
    }
  ],
  "location": "JobsearchSteps.iEnterDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "90000",
      "offset": 24
    }
  ],
  "location": "JobsearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobsearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobsearchSteps.iSelectJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobsearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Central London",
      "offset": 47
    }
  ],
  "location": "JobsearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 823411500,
  "status": "passed"
});
});