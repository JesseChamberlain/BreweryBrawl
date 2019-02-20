

Feature: Addition

Addition is great as a verification exercise to get the Cucumber-js infrastructure up and running

  Scenario: Add two numbers
    Given the numbers 1 and 3
    When they are added together
    Then should the result be 4

  Scenario: Add two numbers
    Given the numbers 10 and 30
    When they are added together
    Then should the result be 40

  Scenario: Search something from bing
    Given browse to web site "https://www.bing.com"
    When input keyword "Mars"
    Then search result should contain "NASA"

