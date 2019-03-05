

Feature: Addition

Addition is great as a verification exercise to get the Cucumber-js infrastructure up and running

  Scenario: Search something from Brewery Brawl
    Given browse to web site "http://localhost:3333"
    When input keyword "angels"
    Then search result should contain "Angels & Devils"

