$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/Homepage.feature");
formatter.feature({
  "line": 4,
  "name": "Homepage Features",
  "description": "\nGiven I am on the home page",
  "id": "homepage-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@homepage"
    }
  ]
});
formatter.before({
  "duration": 3597418619,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify auto complete search result",
  "description": "",
  "id": "homepage-features;verify-auto-complete-search-result",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@homepage-1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I search on top search bar with text ios",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify Title: I will teach you IOS as displayed result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ios",
      "offset": 37
    }
  ],
  "location": "HomeSD.topSearchbBar_Text_ios(String)"
});
formatter.result({
  "duration": 396739404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title: I will teach you IOS",
      "offset": 9
    }
  ],
  "location": "HomeSD.verifySearchResult(String)"
});
formatter.result({
  "duration": 3041474673,
  "status": "passed"
});
formatter.after({
  "duration": 95787573,
  "status": "passed"
});
formatter.before({
  "duration": 1592685600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify total number of posts on home page",
  "description": "",
  "id": "homepage-features;verify-total-number-of-posts-on-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@homepage-2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I verify 56 total post is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify all post has price tag",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify all post has title",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify all post has displayed image",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "56",
      "offset": 9
    }
  ],
  "location": "HomeSD.totalPosts(int)"
});
formatter.result({
  "duration": 52095834,
  "status": "passed"
});
formatter.match({
  "location": "HomeSD.verifyPriceTagsForAllTags()"
});
formatter.result({
  "duration": 1530937994,
  "status": "passed"
});
formatter.match({
  "location": "HomeSD.verifyPostTitles()"
});
formatter.result({
  "duration": 1487507865,
  "status": "passed"
});
formatter.match({
  "location": "HomeSD.verifyAllPost_Images()"
});
formatter.result({
  "duration": 576108674,
  "status": "passed"
});
formatter.after({
  "duration": 89354706,
  "status": "passed"
});
});